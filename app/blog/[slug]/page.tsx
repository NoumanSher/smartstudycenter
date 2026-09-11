// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, User, ArrowLeft, MessageCircle, Share2 } from 'lucide-react';
import { client } from '@/lib/sanity.client';
import { postBySlugQuery, postSlugsQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';
import CustomPortableText from '@/components/blog/CustomPortableText';

export const revalidate = 60; // Revalidate every 60s for instant article updates

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for existing posts
export async function generateStaticParams() {
  try {
    if (!process.env.NEXT_SANITY_PROJECT_ID) return [];
    const slugs: string[] = await client.fetch(postSlugsQuery);
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    return [];
  }
}

// Dynamic SEO & OpenGraph metadata
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug });
    if (!post) {
      return { title: 'Post Not Found | Smart Study Center' };
    }

    const postImageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : '/icon.png';

    return {
      title: `${post.title} | Smart Study Center Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://www.smartstudycenter.com/blog/${params.slug}`,
        type: 'article',
        publishedTime: post.publishedAt,
        authors: [post.author?.name || 'Smart Study Center'],
        images: postImageUrl ? [{ url: postImageUrl, width: 1200, height: 630, alt: post.title }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: postImageUrl ? [postImageUrl] : [],
      },
      alternates: {
        canonical: `https://www.smartstudycenter.com/blog/${params.slug}`,
      },
    };
  } catch {
    return { title: 'Blog Post | Smart Study Center' };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post: Post = await client.fetch(postBySlugQuery, { slug: params.slug });

  if (!post) {
    notFound();
  }

  const postImageUrl = post.mainImage ? urlForImage(post.mainImage)?.url() : null;
  const whatsappMessage = encodeURIComponent(
    `Hello Smart Study Center, I read your article "${post.title}" and would like to learn more about your courses.`
  );

  // Schema.org BlogPosting structured data for Google & AI Search
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: postImageUrl || 'https://www.smartstudycenter.com/icon.png',
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Smart Study Center Academic Team',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Smart Study Center',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.smartstudycenter.com/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.smartstudycenter.com/blog/${post.slug.current}`,
    },
  };

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 overflow-x-hidden">
      {/* Inject Article Schema for AI Overviews & Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 relative z-10">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[#C71585] transition-colors py-1 inline-block">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 inline" />
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#C71585] transition-colors py-1 inline-block">
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 inline" />
            </li>
            <li className="font-semibold text-gray-800 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Categories Badges */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#C71585]/10 text-[#C71585]"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C71585]/10 text-[#C71585] flex items-center justify-center font-bold text-sm">
              <User className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-gray-900 leading-none">
                {post.author?.name || 'Smart Study Center'}
              </p>
              {post.author?.role && (
                <p className="text-xs text-gray-500 mt-1">{post.author.role}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <Calendar className="w-4 h-4 text-[#C71585]" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>

        {/* Main Banner Image */}
        {postImageUrl && (
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl mb-10 bg-gray-100">
            <Image
              src={postImageUrl}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-200/80 shadow-md mb-12">
          <CustomPortableText value={post.body} />
        </div>

        {/* WhatsApp & Admissions Consultation Box */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#C71585]/10 via-[#FF1493]/5 to-white border border-[#C71585]/20 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Ready to Excel in Your Studies?
            </h3>
            <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
              Connect directly with our academic coordinators for personalized subject guidance, live online class schedules, and fee details.
            </p>
          </div>
          <a
            href={`https://wa.me/923000412637?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#20ba59] hover:scale-105 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>

        {/* Back to Blog link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C71585] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>
        </div>
      </article>
    </main>
  );
}

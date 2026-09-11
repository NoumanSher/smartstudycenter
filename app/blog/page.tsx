// app/blog/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, ArrowRight, User, Sparkles, PenLine } from 'lucide-react';
import { client } from '@/lib/sanity.client';
import { postsQuery, Post } from '@/lib/sanity.queries';
import { urlForImage } from '@/lib/sanity.image';

export const revalidate = 60; // Incremental Static Regeneration every 60s

async function getPosts(): Promise<Post[]> {
  try {
    if (!process.env.NEXT_SANITY_PROJECT_ID) {
      return [];
    }
    const posts = await client.fetch(postsQuery);
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts from Sanity:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#C71585]/10 text-[#C71585] mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Smart Study Center Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Educational Insights & <span className="text-[#C71585]">Articles</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Practical study guides, exam preparation tips (FBISE, CAIE O/A-Levels, MDCAT, ECAT),
            and academic wisdom curated by our mentors.
          </p>
        </div>

        {posts.length === 0 ? (
          /* Empty State when no posts are published yet */
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-14 border border-gray-200/80 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#C71585]/10 text-[#C71585] flex items-center justify-center mx-auto mb-5">
              <PenLine className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Articles Coming Soon!
            </h2>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Our academic mentors are preparing high-value articles, syllabus breakdowns,
              and study tips. You can publish articles anytime through the Sanity Studio.
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all"
            >
              <PenLine className="w-4 h-4" />
              <span>Go to Sanity Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-12 sm:space-y-16">
            {/* Featured Hero Article */}
            {featuredPost && (
              <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] bg-gray-100 overflow-hidden">
                    {featuredPost.mainImage && (
                      <Image
                        src={urlForImage(featuredPost.mainImage)?.url() || '/smart-study-center-logo.png'}
                        alt={featuredPost.title}
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#C71585] text-white shadow-md">
                        Featured Article
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                    <div>
                      {featuredPost.categories && featuredPost.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {featuredPost.categories.map((cat, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C71585]/10 text-[#C71585]"
                            >
                              {cat.title}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#C71585] transition-colors leading-tight">
                        <Link href={`/blog/${featuredPost.slug.current}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3 mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 pt-6 border-t border-gray-100 mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-[#C71585]" />
                          <span className="font-medium text-gray-800">
                            {featuredPost.author?.name || 'Smart Study Center'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>
                            {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug.current}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#C71585] group-hover:translate-x-1 transition-transform"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Remaining Articles */}
            {regularPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-[#C71585]" />
                  <span>Recent Articles</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post) => {
                    const postImageUrl = post.mainImage
                      ? urlForImage(post.mainImage)?.url()
                      : null;

                    return (
                      <article
                        key={post._id}
                        className="bg-white rounded-3xl border border-gray-200/80 shadow-lg overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div>
                          <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
                            {postImageUrl && (
                              <Image
                                src={postImageUrl}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                              />
                            )}
                            {post.categories && post.categories[0] && (
                              <div className="absolute top-3 left-3">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#C71585] shadow-sm">
                                  {post.categories[0].title}
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C71585] transition-colors line-clamp-2 leading-snug">
                              <Link href={`/blog/${post.slug.current}`}>{post.title}</Link>
                            </h4>

                            <p className="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                          <span className="font-medium text-gray-700">
                            {post.author?.name || 'Academic Team'}
                          </span>
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

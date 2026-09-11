import { groq } from 'next-sanity';

export interface Author {
  name: string;
  role?: string;
  image?: any;
  bio?: string;
}

export interface Category {
  title: string;
  slug: { current: string };
  description?: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  author?: Author;
  mainImage: any;
  categories?: Category[];
  publishedAt: string;
  excerpt: string;
  body: any;
}

// Fetch all published posts ordered by date descending
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "categories": categories[]->{
      title,
      slug
    },
    "author": author->{
      name,
      role,
      image
    }
  }
`;

// Fetch single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    body,
    "categories": categories[]->{
      title,
      slug
    },
    "author": author->{
      name,
      role,
      bio,
      image
    }
  }
`;

// Fetch all post slugs for generateStaticParams
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;

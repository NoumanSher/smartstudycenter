import Image from 'next/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/lib/sanity.image';

export const customPortableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = urlForImage(value)?.url();
      if (!imageUrl) return null;
      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
          <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={value.alt || 'Smart Study Center Article Image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="p-3 text-center text-xs text-gray-500 italic bg-gray-50">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 border-l-4 border-[#C71585] pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl sm:text-2xl font-bold text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-6 mb-2 text-lg font-semibold text-gray-800">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-5 text-base sm:text-lg leading-relaxed text-gray-700">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#C71585] bg-[#C71585]/5 p-5 rounded-r-xl italic text-gray-800 font-medium">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700 text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-700 text-base sm:text-lg">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="font-medium text-[#C71585] underline decoration-[#C71585]/40 underline-offset-4 hover:decoration-[#C71585] transition-colors"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-[#C71585]">
        {children}
      </code>
    ),
  },
};

export default function CustomPortableText({ value }: { value: any }) {
  return <PortableText value={value} components={customPortableTextComponents} />;
}

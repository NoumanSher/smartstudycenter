// app/short-courses/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Short Courses - English, Digital Marketing & AI | Smart Study Center',
  description:
    'Explore hands-on short courses at Smart Study Center: English Language, Digital Marketing, and Artificial Intelligence. Live interactive classes, practical skills, and expert mentorship.',
  keywords:
    'short courses, English language course, digital marketing course, artificial intelligence course, AI for students, spoken English, online marketing classes, Smart Study Center short courses',
  openGraph: {
    title: 'Short Courses - Smart Study Center',
    description:
      'Build practical skills with our English Language, Digital Marketing, and Artificial Intelligence short courses.',
    url: 'https://www.smartstudycenter.com/short-courses',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartstudycenter.com/short-courses',
  },
};

export default function ShortCoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

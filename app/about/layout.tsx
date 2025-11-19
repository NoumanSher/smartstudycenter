// app/about/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Smart Study Center - Online Education Excellence',
  description: 'Learn about Smart Study Center\'s mission to provide quality online education to students in grades 8th through O-Levels. Our expert mentors and personalized approach have helped thousands of students succeed.',
  keywords: 'about Smart Study Center, online education platform, expert mentors, student success stories, quality education, distance learning services',
  openGraph: {
    title: 'About Smart Study Center',
    description: 'Learn about our mission to provide quality online education to students everywhere.',
    url: 'https://smartstudycenter.com/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

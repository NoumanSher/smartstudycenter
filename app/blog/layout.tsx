// app/blog/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Educational Blog & Articles | Smart Study Center',
  description:
    'Read insightful educational guides, study tips, exam preparation strategies (FBISE, CAIE O/A-Levels, MDCAT, ECAT), and academic news from Smart Study Center mentors.',
  keywords:
    'study tips, exam preparation Pakistan, FBISE guide, O Level tips, A Level coaching, MDCAT advice, Smart Study Center blog, daily educational articles',
  openGraph: {
    title: 'Smart Study Center - Educational Blog & Articles',
    description:
      'Expert academic tips, exam guidance, and learning strategies to help you excel.',
    url: 'https://www.smartstudycenter.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartstudycenter.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

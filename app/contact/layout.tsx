// app/contact/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Smart Study Center | Get Started Today',
  description: 'Contact Smart Study Center to inquire about online classes, schedules, and enrollment. We\'re here to help students find the right learning path.',
  keywords: 'contact Smart Study Center, enrollment inquiry, online tutoring inquiry, student support, course information, admissions contact',
  openGraph: {
    title: 'Contact Us - Smart Study Center',
    description: 'Get in touch with us to start your learning journey.',
    url: 'https://smartstudycenter.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

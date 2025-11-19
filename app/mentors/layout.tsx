// app/mentors/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Mentors - Quality Online Tutoring | Smart Study Center',
  description: 'Meet our experienced mentors who provide personalized tutoring for classes 8th through O-Levels. Qualified educators committed to student success.',
  keywords: 'online tutors, expert mentors, qualified teachers, online tutoring, personal tutor, experienced educators, academic mentorship, one-on-one tutoring',
  openGraph: {
    title: 'Expert Mentors - Smart Study Center',
    description: 'Discover our team of experienced mentors ready to help you succeed.',
    url: 'https://smartstudycenter.com/mentors',
    type: 'website',
  },
};

export default function MentorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

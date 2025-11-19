// app/courses/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Courses - 8th to O-Levels Classes | Smart Study Center',
  description: 'Browse our comprehensive online courses for classes 8th through O-Levels. Mathematics, Science, English, and more with expert instructors. Flexible schedules and affordable pricing.',
  keywords: 'online courses 8th grade, 9th class online, 10th class courses, O-Levels classes online, mathematics courses, science online, English tutoring, chemistry courses, physics classes',
  openGraph: {
    title: 'Online Courses - Smart Study Center',
    description: 'Explore quality online courses for all grade levels with expert instruction.',
    url: 'https://smartstudycenter.com/courses',
    type: 'website',
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

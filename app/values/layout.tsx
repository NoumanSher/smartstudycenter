import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Core Values | Smart Study Center",
  description:
    "Explore the foundational values guiding Smart Study Center: Affordable Quality Education, Student-Centred Learning, Career Guidance, Integrity, Continuous Improvement, and Confidence.",
  keywords:
    "Smart Study Center values, affordable online education, student-centred tutoring, career counselling Pakistan, educational integrity, online classes values",
  openGraph: {
    title: "Our Core Values - Smart Study Center",
    description:
      "The principles that shape our teaching, inspire our students, and guide everything we do.",
    url: "https://www.smartstudycenter.com/values",
    type: "website",
  },
  alternates: {
    canonical: "https://www.smartstudycenter.com/values",
  },
};

export default function ValuesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

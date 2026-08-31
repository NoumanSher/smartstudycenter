import { Metadata } from "next";
import { notFound } from "next/navigation";
import { coursesData, getCourseBySlug } from "@/lib/courses-data";
import CourseDetailView from "@/components/courses/CourseDetailView";
import { courseSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return {
      title: "Course Not Found | Smart Study Center",
      description: "The requested academic program could not be found.",
    };
  }

  const tabNames = course.tabs.map((t) => t.label).join(", ");

  return {
    title: `${course.title} - Online Classes & Admissions | Smart Study Center`,
    description: `${course.heroDescription.slice(0, 155)}... Streams available: ${tabNames}.`,
    keywords: `${course.title}, ${course.category}, ${course.tabs
      .map((t) => t.label)
      .join(", ")}, online tuition, smart study center`,
    openGraph: {
      title: `${course.title} | Smart Study Center`,
      description: course.heroDescription,
      url: `https://www.smartstudycenter.com/courses/${course.slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.smartstudycenter.com/courses/${course.slug}`,
    },
  };
}

export default function CoursePage({ params }: PageProps) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  const jsonLdCourse = courseSchema({
    title: course.title,
    description: course.cardDescription,
    category: course.category,
    level: course.level,
    duration: course.duration,
    price: course.price,
    rating: course.rating,
    students: course.students,
  });

  const jsonLdBreadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.smartstudycenter.com" },
    { name: "Courses", url: "https://www.smartstudycenter.com/courses" },
    {
      name: course.title,
      url: `https://www.smartstudycenter.com/courses/${course.slug}`,
    },
  ]);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLdCourse, jsonLdBreadcrumb]),
        }}
      />
      <CourseDetailView course={course} allCourses={coursesData} />
    </>
  );
}

// lib/schema.ts
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Smart Study Center',
  description: 'Online education platform for classes 8th through O-Levels with expert mentorship',
  url: 'https://www.smartstudycenter.com',
  logo: 'https://www.smartstudycenter.com/logo.png',
  image: 'https://www.smartstudycenter.com/logo.png',
  sameAs: [
    'https://facebook.com/smartstudycenter',
    'https://twitter.com/smartstudycenter',
    'https://instagram.com/smartstudycenter',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'info@smartstudycenter.com',
    availableLanguage: ['en'],
  },
  educationalCredentialAwarded: ['9th Grade Certificate', '10th Grade Certificate', 'O-Levels Certificate'],
  areaServed: {
    '@type': 'Country',
    name: 'Pakistan',
  },
  priceRange: '$$',
};

export const courseSchema = (course: {
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  rating: number;
  students: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: course.title,
  description: course.description,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Smart Study Center',
    url: 'https://www.smartstudycenter.com',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: course.rating,
    ratingCount: parseInt(course.students.replace(/\D/g, '')),
  },
  educationLevel: course.level,
  teaches: course.category,
  typicalAgeRange: '13-18',
  learningResourceType: 'Online Course',
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// lib/schema.ts
// Structured Data for Traditional SEO & Generative Engine Optimization (GEO)

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.smartstudycenter.com/#organization",
  name: "Smart Study Center",
  alternateName: ["Smart Study Center Online", "SSC", "Pakistan Science and Commerce Academy"],
  slogan: "Love to Know",
  description:
    "Leading online education platform providing live classes, one-on-one mentorship, and comprehensive test preparation for students in Class 6th through A-Levels, Intermediate (F.Sc/ICS/I.Com), and University Entry Tests (MDCAT/ECAT/NET).",
  url: "https://www.smartstudycenter.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.smartstudycenter.com/smart-study-center-logo.png",
    width: "881",
    height: "215",
  },
  image: "https://www.smartstudycenter.com/smart-study-center-logo.png",
  foundingDate: "2008",
  sameAs: [
    "https://web.facebook.com/profile.php?id=61579559790036",
    "https://www.instagram.com/support.smartstudycenter/",
  ],
  knowsAbout: [
    "Federal Board (FBISE) Exam Preparation",
    "Punjab Board 9th & 10th Matric Classes",
    "Intermediate F.Sc Pre-Medical & Pre-Engineering",
    "I.C.S Computer Science Education",
    "Cambridge CAIE O-Level Preparation",
    "Cambridge International A-Level Coaching",
    "MDCAT Medical Entrance Test Preparation",
    "ECAT Engineering College Admission Test",
    "NUST NET Entry Test Coaching",
    "Online Tutoring for Pakistani Diaspora in Saudi Arabia and Middle East",
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Pakistan",
    },
    {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    {
      "@type": "AdministrativeArea",
      name: "Global",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Admissions & Student Support",
      telephone: "+92-300-0412637",
      email: "support.smartstudycenter@gmail.com",
      availableLanguage: ["English", "Urdu"],
      contactOption: "WhatsApp",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Academic Programs & Online Tutoring",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Intermediate Programs (F.Sc / ICS / I.Com)",
          url: "https://www.smartstudycenter.com/courses/intermediate",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Cambridge & Edexcel A-Level Programs",
          url: "https://www.smartstudycenter.com/courses/a-level",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Cambridge O-Level & IGCSE Programs",
          url: "https://www.smartstudycenter.com/courses/o-level",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Matriculation (9th & 10th Class) FBISE / Provincial",
          url: "https://www.smartstudycenter.com/courses/matric",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Junior Section (Classes 6th to 8th)",
          url: "https://www.smartstudycenter.com/courses/juniors",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "University Entry Test Prep (MDCAT, ECAT, NET, FAST)",
          url: "https://www.smartstudycenter.com/courses/entry-test",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.smartstudycenter.com/#website",
  url: "https://www.smartstudycenter.com",
  name: "Smart Study Center",
  publisher: {
    "@id": "https://www.smartstudycenter.com/#organization",
  },
  inLanguage: "en",
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
  "@context": "https://schema.org",
  "@type": "Course",
  name: course.title,
  description: course.description,
  provider: {
    "@type": "EducationalOrganization",
    name: "Smart Study Center",
    url: "https://www.smartstudycenter.com",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: course.rating,
    ratingCount: parseInt(course.students.replace(/\D/g, "")) || 100,
  },
  educationalLevel: course.level,
  about: course.category,
  teaches: course.category,
  typicalAgeRange: "10-22",
  learningResourceType: "Online Interactive Live Sessions & Recorded Lectures",
  offers: {
    "@type": "Offer",
    category: "Paid",
    priceCurrency: "PKR",
    availability: "https://schema.org/InStock",
  },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

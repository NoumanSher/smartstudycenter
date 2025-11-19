import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://smartstudycenter.com'),
  title: 'Smart Study Center - Online Classes for 8th to O-Levels | Expert Mentorship',
  description: 'Quality online education for classes 8th through O-Levels. Expert mentors, personalized learning, and proven results. Join thousands of successful students in regions without access to quality physical classes.',
  keywords: 'online classes 8th grade, O-Levels online courses, online tutoring Pakistan, distance learning education, virtual classes, home tuition online, 9th 10th 11th 12th online classes, O-Levels preparation, online mentorship',
  authors: [{ name: 'Smart Study Center' }],
  creator: 'Blaze Logic',
  publisher: 'Smart Study Center',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smartstudycenter.com',
    title: 'Smart Study Center - Online Classes for 8th to O-Levels',
    description: 'Expert online education with personalized mentorship for classes 8th through O-Levels. Accessible to students everywhere.',
    siteName: 'Smart Study Center',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Smart Study Center Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Study Center - Online Classes for 8th to O-Levels',
    description: 'Expert online education with personalized mentorship for classes 8th through O-Levels.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: 'https://smartstudycenter.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification - Add your verification code here */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        {/* Schema.org JSON-LD for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Smart Study Center',
              description: 'Online education platform for classes 8th through O-Levels with expert mentorship',
              url: 'https://smartstudycenter.com',
              logo: 'https://smartstudycenter.com/logo.png',
              sameAs: [
                'https://facebook.com/smartstudycenter',
                'https://twitter.com/smartstudycenter',
                'https://instagram.com/smartstudycenter',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'info@smartstudycenter.com',
                availableLanguage: 'en',
              },
              educationalCredentialAwarded: ['9th Grade Certificate', '10th Grade Certificate', 'O-Levels Certificate'],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

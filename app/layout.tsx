import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from "@/components/WhatsAppButton";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smartstudycenter.com'),
  title: 'Smart Study Center - Online Classes for Class 4th to A-Levels & Entry Tests | Expert Mentorship',
  description: 'Quality online education for classes 4th through A-levels, Intermediate, and University Entry Tests. Expert mentors, personalized learning, and proven results for students in Pakistan, Saudi Arabia, and worldwide.',
  keywords: 'online classes 8th grade, Pakistan School System, Love to know, Pakistan school system in Saudi Arabia, A-Levels online courses, O-Levels online courses, Intermediate FSc tuition, online tutoring Pakistan, distance learning education, MDCAT preparation online, ECAT preparation online',
  authors: [{ name: 'Smart Study Center' }],
  creator: 'Smart Study Center',
  publisher: 'Smart Study Center',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.smartstudycenter.com',
    title: 'Smart Study Center - Online Education & Mentorship',
    description: 'Expert online education with personalized mentorship for classes 6th through A-Levels, Intermediate, and Entry Tests.',
    siteName: 'Smart Study Center',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 800,
        alt: 'Smart Study Center',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Smart Study Center - Online Education & Mentorship',
    description: 'Expert online education with personalized mentorship for classes 6th through A-Levels, Intermediate, and Entry Tests.',
    images: ['/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: 'https://www.smartstudycenter.com',
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
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        {/* Schema.org JSON-LD for Organization & Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1072549885145844');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1072549885145844&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

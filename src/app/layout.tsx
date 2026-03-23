import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ronas IT - Software Development Company",
  description: "We design, develop and maintain web and mobile applications since 2007. 60+ team members, 2 offices and more than 300 projects completed.",
  openGraph: {
    title: "Ronas IT - Software Development Company",
    description: "We design, develop and maintain web and mobile applications since 2007. 60+ team members, 2 offices and more than 300 projects completed.",
    url: "https://ronasit.com",
    siteName: "Ronas IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronas IT - Software Development Company",
    description: "We design, develop and maintain web and mobile applications since 2007.",
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ronas IT",
  "url": "https://ronasit.com",
  "description": "We design, develop and maintain web and mobile applications since 2007. 60+ team members, 2 offices and more than 300 projects completed.",
  "foundingDate": "2007",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 50
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ahtri 12",
    "addressLocality": "Tallinn",
    "addressCountry": "Estonia"
  },
  "telephone": "+372 5399 9974",
  "email": "hello@ronasit.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "1870"
  },
  "sameAs": [
    "https://www.instagram.com/ronas_it",
    "https://www.facebook.com/RonasITSoftware/",
    "https://dribbble.com/ronasit",
    "https://www.behance.net/RonasIT",
    "https://www.linkedin.com/company/ronas-it/"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which software development services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our main services include UI/UX design, graphic design, mobile app development, web development, CTO as a service, business analytics, and DevOps services."
      }
    },
    {
      "@type": "Question",
      "name": "What is your software development company's pricing policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of software development is influenced by various factors, including the type of application, the technologies employed, number and complexity of features, and project timeline."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take you to develop a digital product?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The software development time depends on the number and complexity of features. MVP development can take 1-3 months."
      }
    },
    {
      "@type": "Question",
      "name": "What is your experience with custom software development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our software development company has 17+ years of experience in designing and developing products."
      }
    },
    {
      "@type": "Question",
      "name": "Who is on your dedicated development team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are 50+ specialists in our software development company, including UI/UX designers, developers, and DevOps engineers."
      }
    },
    {
      "@type": "Question",
      "name": "Can you sign an NDA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sure! Your privacy is our priority."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "@/components/Providers";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import BookSolar from "@/components/BookSolar";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Daylight Solar | Best Solar Panel Installation in Brisbane, Gold Coast & Sunshine Coast",
    template: "%s | Daylight Solar Australia",
  },
  description: "Daylight Solar offers premium solar panel installation for homes, businesses & industry in Brisbane, Gold Coast & Sunshine Coast. Get government rebates & clean, affordable energy. Free solar assessment available.",
  keywords: [
    "solar panels Brisbane",
    "solar installation Gold Coast",
    "solar panel installation",
    "residential solar",
    "commercial solar",
    "solar power Australia",
    "solar rebate",
    "solar subsidy",
    "clean energy",
    "renewable energy",
    "solar panels for home",
    "solar electricity",
    "Daylight Solar",
    "Sunshine Coast solar",
  ],
  authors: [{ name: "Daylight Solar" }],
  creator: "Daylight Solar",
  publisher: "Daylight Solar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://daylightsolar.com.au"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Daylight Solar | Premium Solar Panel Installation in Brisbane",
    description: "Daylight Solar offers premium solar panel installation for homes, businesses & industry in Brisbane, Gold Coast & Sunshine Coast. Get government rebates & clean, affordable energy.",
    url: process.env.NEXT_PUBLIC_SITE_URL, 
    siteName: "Daylight Solar",
    images: [
      {
        url: "/img/Capture.PNG", 
        width: 1200,
        height: 630,
        alt: "Daylight Solar - Premium Solar Panel Installation",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daylight Solar | Premium Solar Panel Installation in Brisbane",
    description: "Daylight Solar offers premium solar panel installation for homes, businesses & industry in Brisbane, Gold Coast & Sunshine Coast. Get government rebates & clean, affordable energy.",
    images: ["/img/Capture.PNG"],
    creator: "@daylightsolar",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "-BUve0bQLJH5M5JDxcgcejGOKZTAP8LBloV4bKuhKro",
  },
  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.className} font-sans`}>
      <head>
        {/* Google Console Site Verification - Now in metadata */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K9GD85B111"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K9GD85B111');
          `}
        </Script>
        {/* Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1936124837155027');
          fbq('track', 'PageView');`}
        </Script>
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height=\"1\" width=\"1\" style=\"display:none\" src=\"https://www.facebook.com/tr?id=1936124837155027&ev=PageView&noscript=1\" />`,
        }} />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Daylight Solar",
              "url": "https://www.daylightsolar.com.au",
              "logo": "https://www.daylightsolar.com.au/img/logo.png",
              "description": "Premium solar panel installation for homes, businesses & industry in Brisbane, Gold Coast & Sunshine Coast. Government rebates available.",
              "areaServed": [
                { "@type": "City", "name": "Brisbane" },
                { "@type": "City", "name": "Gold Coast" },
                { "@type": "City", "name": "Sunshine Coast" },
                { "@type": "City", "name": "Ipswich" },
                { "@type": "City", "name": "Logan" },
                { "@type": "State", "name": "Queensland" }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61-7-3422-6150",
                "contactType": "customer service",
                "areaServed": "AU",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/daylightsolar",
                "https://www.instagram.com/daylightsolar",
                "https://www.linkedin.com/company/daylightsolar"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Solar Installation Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Solar Installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Solar Installation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Solar Battery Storage"
                    }
                  }
                ]
              }
            }),
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Daylight Solar",
              "image": "https://www.daylightsolar.com.au/img/logo.png",
              "@id": "https://www.daylightsolar.com.au",
              "url": "https://www.daylightsolar.com.au",
              "telephone": "+61-7-3422-6150",
              "email": "hello@daylightsolar.com.au",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "30 Chancellor Village Blvd",
                "addressLocality": "Sippy Downs",
                "addressRegion": "QLD",
                "postalCode": "4556",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -26.7189,
                "longitude": 153.0589
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "John Smith"
                  },
                  "reviewBody": "Excellent service and professional installation. Our power bills have dropped significantly!"
                }
              ]
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What are the benefits of installing solar panels for your home?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Installing solar panels for your home can reduce your electricity bills, increase energy independence, and add value to your property. It's also an eco-friendly way to reduce carbon emissions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is solar power suitable for my house?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most homes can benefit from solar power if they have access to direct sunlight. A quick roof inspection and energy usage analysis can confirm if solar is right for your house."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does solar energy work for home use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Solar energy for home use involves panels capturing sunlight and converting it into electricity for daily use. Excess energy can be stored or fed back into the grid."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I generate solar electricity for my home and go off-grid?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, with the right setup including battery storage, you can generate solar electricity for your home and reduce or eliminate your reliance on the grid."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are household solar panels a good investment in Australia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, household solar panels offer a great return on investment in Australia thanks to high sunlight exposure and available government rebates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a solar array for a home and how does it work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A solar array is a group of solar panels installed on your roof that work together to generate electricity. It's tailored to your home's energy consumption."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are sun panels for home and are they efficient?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sun panels, or solar panels, are highly efficient devices that convert sunlight into usable energy for your home, helping lower your power bills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are home PV panels and how are they different?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Home PV (photovoltaic) panels generate electricity directly from sunlight and are the most common type of solar panel used in Australian households."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does solar electricity reduce my power bill?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Solar electricity allows you to use free sunlight instead of expensive grid electricity, significantly cutting down your monthly energy costs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to choose reliable solar installation companies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look for solar installation companies with Clean Energy Council accreditation, positive reviews, and strong warranties. Always compare quotes and experience."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className="font-outfit">
        <Providers>{children}</Providers>
        <BookSolar />
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}

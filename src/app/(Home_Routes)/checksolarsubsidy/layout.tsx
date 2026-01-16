import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Solar Subsidy & Rebate Eligibility Brisbane | Save Up to $10,000 | Daylight Solar",
  description:
    "Check your eligibility for Queensland government solar subsidies and rebates. Save up to $10,000 on solar installation in Brisbane, Gold Coast & Sunshine Coast. Free 2-minute assessment for Australian homeowners.",
  keywords: [
    "solar subsidy Brisbane",
    "solar rebate Queensland",
    "government solar incentives Brisbane",
    "solar panel rebate Gold Coast",
    "STC rebate calculator",
    "Queensland solar rebate",
    "solar bonus scheme",
    "solar subsidy check Brisbane",
    "free solar assessment Brisbane",
    "solar feed-in tariff Queensland",
    "solar power rebate",
    "solar discount Brisbane",
    "government solar grant",
    "solar panel incentives Australia",
    "small-scale technology certificates",
    "solar rebate eligibility checker",
  ],
  openGraph: {
    title: "Check Solar Subsidy Eligibility Brisbane | Save $10,000 | Daylight Solar",
    description:
      "Discover how much you can save with government solar subsidies in Queensland. Check your eligibility in 2 minutes and get a free solar assessment.",
    url: "https://www.daylightsolar.com.au/checksolarsubsidy",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/img/Capture.PNG",
        width: 1200,
        height: 630,
        alt: "Check Solar Subsidy Eligibility - Daylight Solar Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Solar Subsidy Eligibility | Daylight Solar Brisbane",
    description:
      "Find out if you qualify for government solar rebates. Save up to $10,000 on your solar installation in Brisbane.",
    images: ["https://www.daylightsolar.com.au/img/Capture.PNG"],
  },
  alternates: {
    canonical: "https://www.daylightsolar.com.au/checksolarsubsidy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function CheckSolarSubsidyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Solar Subsidy Eligibility Check Brisbane",
            description:
              "Check your eligibility for Queensland government solar subsidies and rebates in Brisbane, Gold Coast and Sunshine Coast.",
            url: "https://www.daylightsolar.com.au/checksolarsubsidy",
            mainEntity: {
              "@type": "Service",
              name: "Solar Subsidy Assessment",
              provider: {
                "@type": "LocalBusiness",
                name: "Daylight Solar",
                url: "https://www.daylightsolar.com.au",
                telephone: "+61-7-3422-6150",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Brisbane",
                  addressRegion: "QLD",
                  addressCountry: "AU",
                },
              },
              areaServed: ["Brisbane", "Gold Coast", "Sunshine Coast", "Queensland"],
              serviceType: "Solar Panel Installation with Government Rebates",
              offers: {
                "@type": "Offer",
                description: "Save up to $10,000 with government solar subsidies",
                priceCurrency: "AUD",
              },
            },
          }),
        }}
      />
      {children}
    </>
  );
}

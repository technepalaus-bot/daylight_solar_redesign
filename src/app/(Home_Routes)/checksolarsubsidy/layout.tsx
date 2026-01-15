import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Solar Subsidy Eligibility | Daylight Solar Australia",
  description:
    "Check your eligibility for government solar subsidies and rebates. Get up to $10,000 off your solar installation. Free assessment for Australian homeowners.",
  keywords: [
    "solar subsidy Australia",
    "solar rebate eligibility",
    "government solar incentives",
    "solar panel rebate",
    "STC rebate calculator",
    "Victorian solar homes program",
    "NSW solar rebate",
    "Queensland solar bonus",
    "solar subsidy check",
    "free solar assessment",
  ],
  openGraph: {
    title: "Check Solar Subsidy Eligibility | Daylight Solar",
    description:
      "Discover how much you can save with government solar subsidies. Check your eligibility in minutes and get a free solar assessment.",
    url: "https://daylightsolar.com.au/checksolarsubsidy",
    siteName: "Daylight Solar",
    images: [
      {
        url: "/img/og-solar-subsidy.jpg",
        width: 1200,
        height: 630,
        alt: "Check Solar Subsidy Eligibility - Daylight Solar",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Solar Subsidy Eligibility | Daylight Solar",
    description:
      "Find out if you qualify for government solar rebates and subsidies. Save up to $10,000 on your solar installation.",
    images: ["/img/og-solar-subsidy.jpg"],
  },
  alternates: {
    canonical: "https://daylightsolar.com.au/checksolarsubsidy",
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
            name: "Solar Subsidy Eligibility Check",
            description:
              "Check your eligibility for Australian government solar subsidies and rebates.",
            url: "https://daylightsolar.com.au/checksolarsubsidy",
            mainEntity: {
              "@type": "Service",
              name: "Solar Subsidy Assessment",
              provider: {
                "@type": "Organization",
                name: "Daylight Solar",
                url: "https://daylightsolar.com.au",
              },
              areaServed: {
                "@type": "Country",
                name: "Australia",
              },
              serviceType: "Solar Panel Installation",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://daylightsolar.com.au/checksolarsubsidy",
              "query-input": "required name=eligibility_check",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

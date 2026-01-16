import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Solar Assessment Brisbane | Get Your Solar Quote | Daylight Solar",
  description:
    "Get a FREE solar assessment for your home or business in Brisbane, Gold Coast & Sunshine Coast. Expert consultation, no obligation quote. Find out how much you can save with solar panels today!",
  keywords: [
    "free solar assessment Brisbane",
    "free solar quote Brisbane",
    "solar assessment Gold Coast",
    "solar quote Sunshine Coast",
    "free solar consultation",
    "solar panel quote",
    "home solar assessment",
    "solar savings calculator",
    "free solar estimate",
    "solar system quote Brisbane",
    "residential solar quote",
    "commercial solar assessment",
    "no obligation solar quote",
    "solar roof assessment",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/free-solar-assessment",
  },
  openGraph: {
    title: "Free Solar Assessment | Get Your No-Obligation Quote | Daylight Solar",
    description:
      "Discover how much you can save with solar! Get a free, no-obligation solar assessment for your Brisbane, Gold Coast or Sunshine Coast property.",
    url: "https://www.daylightsolar.com.au/free-solar-assessment",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/img/Rectangle%2031.png",
        width: 1200,
        height: 630,
        alt: "Free Solar Assessment - Daylight Solar",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Solar Assessment | Daylight Solar Brisbane",
    description: "Get your free solar quote today. No obligation, expert consultation.",
    images: ["https://www.daylightsolar.com.au/img/Rectangle%2031.png"],
  },
};

export default function FreeSolarAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best Solar Panel Installation Brisbane, Gold Coast & Sunshine Coast | Daylight Solar",
  description:
    "Australia's trusted solar panel installation company. Get premium solar panels, government rebates up to $3,000, and professional installation in Brisbane, Gold Coast & Sunshine Coast. Free solar assessment available. Save up to 70% on electricity bills.",
  keywords: [
    "solar panels Brisbane",
    "solar panel installation Brisbane",
    "solar power systems Brisbane",
    "best solar company Brisbane",
    "solar installers Brisbane",
    "solar panel installation Gold Coast",
    "solar panels Gold Coast",
    "solar power Gold Coast",
    "solar installers Gold Coast",
    "solar panels Sunshine Coast",
    "solar installation Sunshine Coast",
    "residential solar panels Australia",
    "commercial solar Brisbane",
    "solar battery storage Brisbane",
    "solar rebates Queensland",
    "government solar rebate",
    "solar power for home",
    "solar electricity Brisbane",
    "clean energy Queensland",
    "renewable energy Australia",
    "solar panel cost Brisbane",
    "cheap solar panels Brisbane",
    "affordable solar installation",
    "Daylight Solar Australia",
    "solar panel quotes Brisbane",
    "solar system installation",
    "rooftop solar Brisbane",
    "home solar system Brisbane",
    "solar energy solutions",
    "green energy Brisbane",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au",
  },
  openGraph: {
    title: "Best Solar Panel Installation in Brisbane | Daylight Solar Australia",
    description:
      "Transform your home with premium solar panel installation. Government rebates available. Trusted by 1000+ Australian homes. Get your free solar assessment today!",
    url: "https://www.daylightsolar.com.au",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/img/Capture.PNG",
        width: 1200,
        height: 630,
        alt: "Daylight Solar - Premium Solar Panel Installation Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Solar Panel Installation Brisbane | Daylight Solar",
    description:
      "Premium solar installation for homes & businesses. Government rebates up to $3,000. Free assessment available!",
    images: ["https://www.daylightsolar.com.au/img/Capture.PNG"],
    creator: "@daylightsolar",
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
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

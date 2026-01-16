import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Solar Panels Brisbane | Home Solar Systems | Daylight Solar",
  description:
    "Premium residential solar panel installation in Brisbane, Gold Coast & Sunshine Coast. Save up to 70% on electricity bills. Government rebates available. Free home solar assessment. 25-year warranty.",
  keywords: [
    "residential solar panels Brisbane",
    "home solar system Brisbane",
    "solar panels for home",
    "house solar panels Brisbane",
    "residential solar installation",
    "home solar power Brisbane",
    "solar panels Gold Coast residential",
    "Sunshine Coast home solar",
    "solar power for house",
    "rooftop solar panels Brisbane",
    "solar panels price Brisbane",
    "residential solar rebate",
    "home solar battery",
    "solar power system home",
    "best residential solar Brisbane",
    "solar energy for home",
    "domestic solar panels",
    "solar panel installation cost Brisbane",
    "6.6kW solar system Brisbane",
    "10kW solar system Brisbane",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/residential",
  },
  openGraph: {
    title: "Residential Solar Panels Brisbane | Home Solar Installation | Daylight Solar",
    description:
      "Transform your home with premium solar panels. Save up to 70% on electricity. Government rebates up to $3,000. Free assessment available!",
    url: "https://www.daylightsolar.com.au/residential",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/backgroundImg/residentalbg.png",
        width: 1200,
        height: 630,
        alt: "Residential Solar Panel Installation Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Solar Panels Brisbane | Daylight Solar",
    description: "Premium home solar installation. Save up to 70% on electricity bills. Government rebates available.",
    images: ["https://www.daylightsolar.com.au/backgroundImg/residentalbg.png"],
  },
};

export default function ResidentialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

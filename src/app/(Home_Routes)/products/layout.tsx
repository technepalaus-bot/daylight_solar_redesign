import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Products & Systems | Panels, Batteries & Inverters | Daylight Solar Brisbane",
  description:
    "Explore our premium solar products including high-efficiency panels, battery storage systems, and smart inverters. Top brands like SunPower, LG, Tesla Powerwall. Best prices in Brisbane, Gold Coast & Sunshine Coast.",
  keywords: [
    "solar panels Brisbane",
    "solar panels Gold Coast",
    "solar battery storage",
    "Tesla Powerwall Brisbane",
    "solar inverters",
    "SunPower panels Australia",
    "LG solar panels",
    "residential solar systems",
    "commercial solar systems",
    "solar panel prices Brisbane",
    "best solar panels Australia",
    "solar battery Brisbane",
    "hybrid solar system",
    "off-grid solar system",
    "grid-connected solar",
    "solar power system Brisbane",
    "solar energy storage",
    "home battery storage",
    "solar panel brands Australia",
    "quality solar panels",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/products",
  },
  openGraph: {
    title: "Premium Solar Products | Panels, Batteries & Inverters | Daylight Solar",
    description:
      "Top-quality solar panels, battery storage & inverters from leading brands. Professional installation in Brisbane, Gold Coast & Sunshine Coast.",
    url: "https://www.daylightsolar.com.au/products",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/img/solar1.jpeg",
        width: 1200,
        height: 630,
        alt: "Daylight Solar Products - Premium Solar Panels & Batteries",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Solar Products | Daylight Solar Brisbane",
    description: "Top-quality solar panels, batteries & inverters. Best prices in Queensland.",
    images: ["https://www.daylightsolar.com.au/img/solar1.jpeg"],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

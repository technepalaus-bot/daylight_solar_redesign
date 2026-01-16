import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Solar Brisbane | Business Solar Installation | Daylight Solar",
  description:
    "Reduce business operating costs with commercial solar installation in Brisbane, Gold Coast & Sunshine Coast. ROI within 3-5 years. Large-scale solar solutions for offices, warehouses, factories. Tax benefits available.",
  keywords: [
    "commercial solar Brisbane",
    "business solar panels Brisbane",
    "commercial solar installation",
    "industrial solar panels Brisbane",
    "office solar panels",
    "warehouse solar Brisbane",
    "factory solar installation",
    "commercial solar Gold Coast",
    "business solar Sunshine Coast",
    "large scale solar Brisbane",
    "commercial solar rebate",
    "business solar ROI",
    "solar for business Brisbane",
    "commercial solar price",
    "100kW solar system",
    "commercial rooftop solar",
    "solar power business",
    "commercial solar tax benefits",
    "industrial solar installation",
    "commercial building solar",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/commercial",
  },
  openGraph: {
    title: "Commercial Solar Brisbane | Business Solar Panels | Daylight Solar",
    description:
      "Cut business energy costs by up to 80% with commercial solar. Fast ROI, tax benefits, and professional installation for businesses across Queensland.",
    url: "https://www.daylightsolar.com.au/commercial",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/backgroundImg/commercialbg.png",
        width: 1200,
        height: 630,
        alt: "Commercial Solar Installation Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Solar Brisbane | Daylight Solar",
    description: "Cut business energy costs by up to 80%. Fast ROI, tax benefits available.",
    images: ["https://www.daylightsolar.com.au/backgroundImg/commercialbg.png"],
  },
};

export default function CommercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Energy Blog | Tips, Guides & News | Daylight Solar Australia",
  description:
    "Expert solar energy insights, tips, and guides. Learn about solar panel installation, government rebates, battery storage, energy savings, and sustainable living in Australia.",
  keywords: [
    "solar energy blog",
    "solar tips Australia",
    "solar panel guide",
    "solar rebate news",
    "solar installation tips",
    "renewable energy blog",
    "solar savings guide",
    "home solar tips",
    "solar battery guide",
    "Queensland solar news",
    "Brisbane solar blog",
    "solar energy savings",
    "green energy tips",
    "sustainable living blog",
    "solar power guide Australia",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/blog",
  },
  openGraph: {
    title: "Solar Energy Blog | Expert Tips & Guides | Daylight Solar",
    description:
      "Stay informed with expert solar insights, installation tips, rebate news, and sustainable living guides from Daylight Solar.",
    url: "https://www.daylightsolar.com.au/blog",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/img/solar1.jpeg",
        width: 1200,
        height: 630,
        alt: "Daylight Solar Blog - Expert Solar Tips",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Energy Blog | Daylight Solar Australia",
    description: "Expert solar tips, guides, and news. Stay informed about solar energy in Australia.",
    images: ["https://www.daylightsolar.com.au/img/solar1.jpeg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Battery Storage Brisbane | Home Battery Systems | Daylight Solar",
  description:
    "Premium solar battery storage solutions in Brisbane, Gold Coast & Sunshine Coast. Tesla Powerwall, LG RESU, Enphase batteries. Store excess solar energy for 24/7 power. Blackout protection available.",
  keywords: [
    "solar battery Brisbane",
    "home battery storage Brisbane",
    "Tesla Powerwall Brisbane",
    "solar battery storage",
    "LG battery Brisbane",
    "Enphase battery",
    "battery storage Gold Coast",
    "solar battery Sunshine Coast",
    "home battery system",
    "solar energy storage",
    "battery backup solar",
    "off-grid battery system",
    "hybrid solar battery",
    "blackout protection solar",
    "solar battery price Brisbane",
    "best solar battery Australia",
    "lithium battery solar",
    "energy storage system",
    "backup power system",
    "solar battery installation",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/solar",
  },
  openGraph: {
    title: "Solar Battery Storage Brisbane | Tesla Powerwall & More | Daylight Solar",
    description:
      "Store excess solar energy with premium battery storage. Tesla Powerwall, LG, Enphase available. Never worry about power outages again!",
    url: "https://www.daylightsolar.com.au/solar",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/backgroundImg/solarbg.png",
        width: 1200,
        height: 630,
        alt: "Solar Battery Storage Solutions Brisbane",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Battery Storage Brisbane | Daylight Solar",
    description: "Premium battery storage solutions. Tesla Powerwall, LG, Enphase. 24/7 power guaranteed.",
    images: ["https://www.daylightsolar.com.au/backgroundImg/solarbg.png"],
  },
};

export default function SolarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Daylight Solar | Free Solar Consultation Brisbane | Get a Quote",
  description:
    "Contact Daylight Solar for free solar consultation in Brisbane, Gold Coast & Sunshine Coast. Call 07 3422 6150 or request a free quote online. Expert solar advice and fast response guaranteed.",
  keywords: [
    "contact Daylight Solar",
    "solar quote Brisbane",
    "free solar consultation",
    "solar Brisbane phone number",
    "solar company contact",
    "get solar quote",
    "solar consultation Gold Coast",
    "solar assessment Sunshine Coast",
    "solar installation quote",
    "solar panel quote Brisbane",
    "contact solar installer",
    "book solar assessment",
    "solar company Brisbane",
    "request solar quote",
    "solar inquiry Brisbane",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/contact",
  },
  openGraph: {
    title: "Contact Daylight Solar | Free Solar Quote Brisbane",
    description:
      "Get a free solar consultation today. Expert advice, competitive quotes, professional installation across Brisbane, Gold Coast & Sunshine Coast.",
    url: "https://www.daylightsolar.com.au/contact",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/backgroundImg/contactbg.png",
        width: 1200,
        height: 630,
        alt: "Contact Daylight Solar for Free Quote",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Daylight Solar | Free Quote",
    description: "Get your free solar consultation today. Expert advice and competitive quotes.",
    images: ["https://www.daylightsolar.com.au/backgroundImg/contactbg.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

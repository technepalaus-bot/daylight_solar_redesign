import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Leaf, Lightbulb, Users } from "lucide-react";
import { AboutDetails, impactData } from "@/constants/home";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Daylight Solar | Leading Solar Installation Company Brisbane & Queensland",
  description:
    "Discover Daylight Solar - Queensland's trusted solar installation experts. We've installed millions of kWh, reduced thousands of tons of CO2, and powered countless Australian homes with clean energy. CEC accredited installers.",
  keywords: [
    "about Daylight Solar",
    "solar company Brisbane",
    "Queensland solar installers",
    "CEC accredited solar installer",
    "sustainable solar solutions",
    "solar energy company Australia",
    "trusted solar installers Brisbane",
    "eco-friendly solar company",
    "solar power company Gold Coast",
    "Sunshine Coast solar company",
    "solar panel company Queensland",
    "clean energy company Australia",
    "renewable energy Brisbane",
    "solar installation experts",
  ],
  alternates: {
    canonical: "https://www.daylightsolar.com.au/about",
  },
  openGraph: {
    title: "About Daylight Solar | Queensland's Trusted Solar Installation Company",
    description:
      "Learn about Daylight Solar's mission, values, and impact. Millions of kWh generated, thousands of homes powered with sustainable solar energy.",
    url: "https://www.daylightsolar.com.au/about",
    siteName: "Daylight Solar Australia",
    images: [
      {
        url: "https://www.daylightsolar.com.au/img/about1.jpeg",
        width: 1200,
        height: 630,
        alt: "About Daylight Solar - Sustainable Solar Solutions",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Daylight Solar | Queensland's Solar Experts",
    description: "Queensland's trusted solar installation company. CEC accredited, millions of kWh generated.",
    images: ["https://www.daylightsolar.com.au/img/about1.jpeg"],
  },
};

// About Page Structured Data
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "Daylight Solar",
    description:
      "Daylight Solar is Queensland's leading solar installation company, providing innovative, sustainable solar solutions for homes and businesses across Brisbane, Gold Coast, and Sunshine Coast.",
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    areaServed: ["Brisbane", "Gold Coast", "Sunshine Coast", "Queensland"],
    award: ["CEC Accredited Installer", "Clean Energy Council Member"],
    knowsAbout: [
      "Solar Panel Installation",
      "Battery Storage Systems",
      "Residential Solar",
      "Commercial Solar",
      "Solar System Maintenance",
    ],
  },
};

const ItemData: string[] = [
  "MILLIONS of kW GENERATED",
  "MORE THAN HALF A MILLION CO2 REDUCED",
  "THOUSANDS of HOUSEHOLD POWERED",
];

const AboutPageData = [
  {
    iconBg: "#FEF9C3",
    iconColor: "#FFDD00",
    iconType: "lightbulb",
    title: "Innovation",
    des: "Pioneering AI-driven solar optimization.",
  },
  {
    iconBg: "#DCFCE7",
    iconColor: "#2E7D32",
    iconType: "leaf",
    title: "Sustainability",
    des: "Every panel installed = Less carbon, more savings",
  },
  {
    iconBg: "#DBEAFE",
    iconColor: "#2360BD",
    iconType: "users",
    title: "Community",
    des: "Providing solar installations across rural & urban Australia, including under served areas.",
  },
];

const getIcon = (type: string, className: string) => {
  switch (type) {
    case "lightbulb":
      return <Lightbulb size={40} className={className} />;
    case "leaf":
      return <Leaf size={40} className={className} />;
    case "users":
      return <Users size={40} className={className} />;
    default:
      return null;
  }
};

const About = () => {
  const chunkSizes = [4, 3, AboutDetails.length - 7];

  return (
    <div className="animate-fadeIn">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <Navbar />
      {/* HeroSection */}
      <HeroSection
        img="/backgroundImg/aboutbg.png"
        Children={
          <div className={`md:max-w-2xl w-full md:pr-10 mt-20`}>
            <h3 className=" text-3xl md:text-5xl font-semibold text-white md:leading-[48px]">
              {`We don't just sell solar—we build a sustainable future.`}
            </h3>
            <ul className="list-[circle] list-inside text-secondary my-8">
              {ItemData.map((Item, idx) => (
                <li key={idx} className="text-secondary">
                  {Item}
                </li>
              ))}
            </ul>
            <div className="flex md:flex-row flex-col md:items-center  gap-5">
              <Link href="/about#impact">
                <Button variant="white" className="rounded-full text-black">
                  See Our Impact in Action
                </Button>
              </Link>
            </div>
          </div>
        }
      />
      {/* HeroSection */}

      {/* section 2 */}

      <div className="py-16 md:py-24 bg-primary overflow-hidden">
        <div className="globalContainer p-4 md:p-8">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-10 lg:mb-14 text-center animate-slideUp">
            What Drives Us – The Core of Our Mission
          </h1>
          <div className="grid md:grid-cols-3 gap-6 md:gap-10">
            {AboutPageData.map((item, idx) => (
              <div 
                key={idx} 
                className="group border border-white/30 hover:border-secondary rounded-2xl p-8 transition-all duration-500 hover:bg-white/5 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 backdrop-blur-sm"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300 mb-6">
                  {getIcon(item.iconType, `bg-[${item.iconBg}] text-[${item.iconColor}] rounded-full p-2`)}
                </div>
                <p className="text-lg md:text-2xl font-semibold mb-4 text-white group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </p>
                <p className="text-sm md:text-base text-[#ABD1C6] leading-relaxed">
                  {item.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 2 */}

      {/* section 3 */}
      <div className="relative h-auto min-h-[930px] md:min-h-[650px] lg:min-h-[800px] text-white bg-primary">
        <Image
          src={"/img/about1.jpeg"}
                        alt="Commercial Solar Panels Installation for Home In Brisbane"
          width={1000}
          height={1000}
          className="object-cover w-full h-full absolute inset-0 md:rounded-t-4xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 w-full"></div>
        <div className="relative globalContainer py-16 z-10">
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-4 animate-slideUp">
              ✨ Our Difference
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slideUp" style={{ animationDelay: '100ms' }}>
              WHY DAYLIGHT SOLAR ?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
          </div>
          
          {/* Cards Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8">
            {chunkSizes.map((size, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-6 w-full ${
                  index === 1 ? "lg:mt-20" : ""
                }`}
              >
                {AboutDetails.slice(
                  index === 0
                    ? 0
                    : chunkSizes.slice(0, index).reduce((a, b) => a + b, 0),
                  chunkSizes.slice(0, index + 1).reduce((a, b) => a + b, 0)
                ).map((details, idx) => (
                  <div
                    key={idx}
                    className="group card-3d flex items-center rounded-2xl h-auto min-h-[70px] w-full lg:w-[360px] px-5 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-secondary/50 cursor-pointer"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="icon-3d mr-4 w-10 h-10 flex items-center justify-center bg-secondary/20 rounded-xl group-hover:bg-secondary/30 transition-all duration-300">
                      <Image
                        src={details.icon}
                        width={28}
                        height={28}
                        alt="Feature Icon"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm md:text-base font-semibold group-hover:text-secondary transition-colors duration-300">
                      {details.des}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 3 */}

      {/* section 4 */}
      <div className="bg-[#ABD1C6] h-auto py-16 md:py-24" id="impact">
        <div className="globalContainer p-6 md:p-12">
          <p className="text-primary text-center text-2xl md:text-5xl font-bold mb-8 md:mb-16 animate-slideUp">
            Our Solar Impact - Measured in Change
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 bg-white shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 hover:-translate-y-2 border-b-4 border-transparent hover:border-primary"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <p className="text-gray-800 text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                    {item.title}
                  </p>
                  <p
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.data}
                  </p>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105"
                    style={{
                      width: `${Math.min(100, Math.max(0, item.progress))}%`,
                      backgroundColor: item.color1,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* section 4 */}
    </div>
  );
};

export default About;

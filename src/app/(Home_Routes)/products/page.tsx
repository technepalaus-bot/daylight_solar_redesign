"use client";
import ContactForm from "@/components/Contact/ContactForm";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PoweringCard from "@/components/products/PoweringCard";
import { Button } from "@/components/ui/button";
import {
  HarnessData,
  PoweringELData,
  UninterruptedData,
} from "@/constants/home";
import { FeatureSectionProps } from "@/types";
import { Clock3, Leaf, MoveRight, Network, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Product Schema for SEO
const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Solar Products",
  description: "Premium solar panels, battery storage, and inverters for residential and commercial use",
  itemListElement: [
    {
      "@type": "Product",
      position: 1,
      name: "Residential Solar Panels",
      description: "High-efficiency solar panels for homes with 25+ year lifespan",
      brand: { "@type": "Brand", name: "Daylight Solar" },
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      position: 2,
      name: "Commercial Solar Systems",
      description: "Large-scale solar solutions for businesses and industrial properties",
      brand: { "@type": "Brand", name: "Daylight Solar" },
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      position: 3,
      name: "Solar Battery Storage",
      description: "Store excess solar energy for use anytime with advanced battery systems",
      brand: { "@type": "Brand", name: "Daylight Solar" },
      offers: {
        "@type": "Offer",
        priceCurrency: "AUD",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

const FeatureSectionData: FeatureSectionProps[] = [
  {
    title: "Longer Lifespan Technology",
    description:
      "Our panels are built to last 25+ years with minimal degradation.",
    icon: <Clock3 className="text-white w-4 h-4" />,
  },
  {
    title: "Smart Grid Compatibility",
    description: "Seamlessly integrate with modern power infrastructure.",
    icon: <Network className="text-white w-4 h-4" />,
  },
  {
    title: "Lower Carbon Footprint",
    description: "Reduce your environmental impact significantly.",
    icon: <Leaf className="text-white w-4 h-4" />,
  },
  {
    title: "Top-Tier Products with Maximum Daily Yields",
    description:
      "Providing premium range of panels, inverters and batteries certified from various authorities.",
    icon: <Leaf className="text-white w-4 h-4" />,
  },
];

const Products = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [isPopupOpen]);

  return (
    <div className="animate-fadeIn">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <Navbar />
      <HeroSection
        img="/backgroundImg/productbg.png"
        Children={
          <div className={`md:max-w-xl md:pr-10 w-full mt-20`}>
            <h3 className=" text-3xl md:text-5xl font-semibold text-white md:leading-[48px]">
              Smart Solar Solutions. Maximum Efficiency. Zero Hassle.
            </h3>
            <p className="text-secondary md:text-xl my-5">
              Transform the way you power your home & business with cutting-edge
              solar technology.
            </p>
            <div className="flex md:flex-row flex-col md:items-center  gap-5">
              <Button
                variant="outline"
                className="rounded-full text-white w-[220px] md:w-fit"
                onClick={togglePopup}
              >
                Get Free Solar Assessment
                <MoveRight className="mt-1" />
              </Button>
            </div>
          </div>
        }
      />

      {/* Section 2 */}
      <div className="bg-primary py-24">
        <div className="relative overflow-hidden globalContainer">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary text-sm font-semibold rounded-full mb-4 animate-slideUp">
              ⚡ Solutions for Everyone
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white animate-slideUp" style={{ animationDelay: '100ms' }}>
              Powering Every Lifestyle
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6"></div>
          </div>
          
          {/* Cards */}
          <div className="flex flex-col gap-8">
            {PoweringELData.map((item, idx) => {
              return <PoweringCard key={idx} Item={item} index={idx} />;
            })}
          </div>
        </div>
      </div>
      {/* Section 2 */}

      {/* Section 3 */}
      <div className="relative overflow-hidden">
        <div className="relative w-full h-[600px]">
          <Image
            src={"/backgroundImg/residentalbg.png"}
                          alt="Commercial Solar Panels Installation for Home In Brisbane"
            width={1000}
            height={1000}
            className="object-cover h-full w-full object-[center_70%]"
          />
          <div className="bg-black/70 md:bg-black/60 absolute inset-0"></div>
        </div>

        <div className="absolute inset-0 globalContainer py-20">
          <h2 className="text-white text-center md:text-left text-3xl md:text-4xl mb-7 animate-slideUp">
            Harness the Sun at Home
          </h2>
          <div className="flex flex-col gap-5 justify-center h-full">
            {HarnessData.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#FFFFFF1A] hover:bg-[#FFFFFF30] w-full md:w-[498px] py-6 space-y-2 px-6 rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 cursor-pointer border border-transparent hover:border-white/20 animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms`, transform: 'perspective(1000px)' }}
              >
                <h2 className="text-base md:text-xl text-white group-hover:text-secondary transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-white textRes font-light group-hover:text-white/90 transition-colors duration-300">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3 */}

      {/* Section 4 */}
      <div className="bg-[#ABD1C6]">
        <div className="relative overflow-hidden globalContainer py-20 md:py-28">
          <h4 className="text-3xl md:text-4xl text-primary font-bold text-center animate-slideUp">
            Powering Businesses,
            <br /> Sustaining Growth
          </h4>
          <div className="flex items-center justify-center gap-12 mt-12">
            <div className="group bg-white shadow-2xl hover:shadow-3xl p-8 md:p-10 rounded-2xl md:w-[60%] h-fit transition-all duration-500 hover:-translate-y-3 hover:rotate-1 border border-transparent hover:border-primary/20 animate-slideUp" style={{ transform: 'perspective(1000px)', animationDelay: '200ms' }}>
              <div className="mb-8">
                <div className="bg-gray-200 w-full h-4 rounded-full relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-yellow-400 to-secondary w-[80%] h-4 rounded-full transition-all duration-1000 group-hover:w-[85%] animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-4 animate-shimmer"></div>
                </div>
                <p className="text-sm md:text-base mt-4 text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                  80% Average Energy Cost Reduction
                </p>
              </div>

              <div className="">
                <div className="bg-gray-200 w-full h-4 rounded-full relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-teal-500 to-primary w-[90%] h-4 rounded-full transition-all duration-1000 group-hover:w-[95%] animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-4 animate-shimmer"></div>
                </div>
                <p className="text-sm md:text-base mt-4 text-gray-700 font-medium group-hover:text-primary transition-colors duration-300">
                  90% Customer Satisfaction Rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}

      {/* Section 5 */}
      <div className="bg-[#ABD1C6]">
        <div className="globalContainer relative overflow-hidden py-20 md:py-28">
          <h4 className="text-3xl md:text-4xl text-primary font-bold animate-slideUp">
            Stored Power. Uninterrupted Energy.
          </h4>
          <p className="font-medium text-primary/80 text-lg mt-2 animate-slideUp" style={{ animationDelay: '100ms' }}>
            Never worry about BLACKOUTS again.
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            {UninterruptedData.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#262626] shadow-2xl hover:shadow-3xl p-8 md:p-10 rounded-2xl md:w-[50%] h-fit transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border border-transparent hover:border-secondary/30 animate-slideUp cursor-pointer"
                style={{ 
                  animationDelay: `${idx * 150}ms`,
                  transform: 'perspective(1000px)',
                }}
              >
                <div className="flex gap-5 items-center">
                  <div className="relative w-14 h-14 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 bg-gradient-to-br from-secondary/20 to-transparent p-2 rounded-full">
                    <Image
                      src={item.icon}
                      alt="Commercial Solar Panels Installation for Home In Brisbane"
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <h4 className="text-white text-xl md:text-2xl font-semibold group-hover:text-secondary transition-colors duration-300">{item.title}</h4>
                </div>
                <p className="text-white font-light my-6 group-hover:text-white/90 transition-colors duration-300">{item.des}</p>
                <div className="bg-[#374151] w-full h-3 rounded-full relative overflow-hidden shadow-inner">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#2CA758] to-emerald-400 h-3 rounded-full transition-all duration-700 group-hover:shadow-lg group-hover:shadow-green-500/50"
                    style={{ width: `${item.energy}%` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-3 animate-shimmer"></div>
                </div>
                <p className="text-secondary text-sm mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.energy}% Efficiency</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 5 */}

      {/* Section 6 */}
      <div className="relative overflow-hidden globalContainer py-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16 animate-slideUp">
          Why Daylight Solar?
        </h2>
        <div className="flex flex-col gap-5 lg:gap-20">
          {FeatureSectionData.map((feature, index) => (
            <div
              key={index}
              className={`group mb-8 flex ${
                index % 2 !== 0
                  ? "lg:justify-start justify-start"
                  : "lg:justify-end  justify-start"
              } gap-4 w-full lg:w-[50%] animate-slideUp`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`flex gap-5 items-center ${
                  index % 2 !== 0
                    ? "flex-row-reverse lg:ml-[92%]"
                    : "lg:flex-row flex-row-reverse"
                } items-end`}
              >
                <div
                  className={`w-full lg:w-[500px] flex flex-col ${
                    index % 2 !== 0 ? "lg:items-start" : "lg:items-en"
                  } group-hover:translate-x-2 transition-transform duration-300`}
                >
                  <h3 className="text-base md:text-2xl font-medium text-wrap group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="textRes font-light mt-1 text-wrap group-hover:text-gray-600 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="bg-yellow-500 p-2 md:p-4 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 group-hover:bg-yellow-400 group-hover:shadow-xl group-hover:shadow-yellow-500/50 transition-all duration-500">
                    {feature.icon}
                    <div
                      className={`hidden lg:block absolute ${
                        index === 3 ? "w-[0px]" : "w-[1px]"
                      } h-44 bg-[#E5E7EB] inset-0 -z-50 left-5 top-5 group-hover:bg-yellow-300 transition-colors duration-300`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Section 6 */}

      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-start z-50 bg-black/80">
          <div className="popup-container relative w-full max-w-4xl mx-4 mt-10 sm:mt-16">
            <ContactForm />
            <X
              onClick={togglePopup}
              size={30}
              className="absolute top-6 right-5 md:right-24 z-10 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

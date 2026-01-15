"use client";
import BookSolar from "@/components/BookSolar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PackageCard from "@/components/products/PackageCard";
import SystemCard from "@/components/products/SystemCard";
import {
  CommercialData,
  CommercialInfo,
  CommercialPackage,
} from "@/constants/home";
import React from "react";

const Commercial = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* {section 1} */}
      <HeroSection
        img="/backgroundImg/commercialbg.png"
        Children={null}
        SmallImg={true}
      />
      {/* {section 1} */}

      {/* {section 2} */}
      <BookSolar />
      {/* {section 2} */}

      {/* {section 3} */}
      <div className="bg-primary py-12 md:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="globalContainer relative z-10">
          {CommercialData.map((item, idx) => (
            <div key={idx} className="text-center mb-8 md:mb-12 animate-fadeIn">
              <span className="inline-block bg-white/10 text-tertiary font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-4">
                BUSINESS SOLUTIONS
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold animate-slideUp">
                {item.title}
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 mt-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                <p className="text-sm md:text-lg lg:text-xl text-tertiary leading-relaxed">
                  {item.des}
                </p>
              </div>
            </div>
          ))}
          
          <div className="grid grid-cols-1 md:grid-cols-3 py-8 md:py-12 gap-4">
            {CommercialInfo.map((info, idx) => (
              <div 
                key={idx}
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <SystemCard des={info.des} icon={info.icon} />
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-secondary/20 to-tertiary/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-secondary/30 transition-all duration-500 hover:scale-[1.01] cursor-pointer animate-fadeIn">
            <p className="text-tertiary text-lg md:text-2xl text-center font-medium">
              <span className="text-3xl mr-2">😲</span> 
              <span className="text-secondary font-bold">CRAZY FACT:</span> Solar for businesses delivers higher returns than
              residential—smart move, smarter savings!
            </p>
          </div>
        </div>
      </div>
      {/* {section 3} */}

      {/* {section 4} */}
      <div className="bg-tertiary min-h-screen relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
        
        <div className="globalContainer relative z-10 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-4 animate-fadeIn">
              COMMERCIAL PACKAGES
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-primary font-bold animate-slideUp">
              Commercial Solar System Package
            </h2>
            <p className="text-primary/70 mt-4 text-sm md:text-base max-w-2xl mx-auto animate-fadeIn">
              Power your business with sustainable energy and maximize your ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-8">
            {CommercialPackage.map((info, idx) => (
              <div 
                key={idx}
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <PackageCard
                  img={info.img}
                  title={info.title}
                  des1={info.des1}
                  des2={info.des2}
                  Button={info.Button}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {section 4} */}
      <Footer />
    </div>
  );
};

export default Commercial;

"use client";
import BookSolar from "@/components/BookSolar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PackageCard from "@/components/products/PackageCard";
import SystemCard from "@/components/products/SystemCard";
import { ResidentialInfo, ResidentialPackage } from "@/constants/home";
import React from "react";

const Residential = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      {/* hero section */}
      <HeroSection
        img="/backgroundImg/residentalbg.png"
        Children={null}
        SmallImg={true}
      />
      {/* hero section */}

      <BookSolar/>

      {/*  section 1 */}
      <div className="bg-primary py-12 md:py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="globalContainer relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-white/10 text-tertiary font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-4 animate-fadeIn">
              SUSTAINABLE ENERGY
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold animate-slideUp">
              Residential Solar System
            </h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 animate-fadeIn">
            <p className="text-sm md:text-lg lg:text-xl text-[#ABD1C6] leading-relaxed text-center">
              Residential solar systems are an excellent way for homeowners to
              reduce energy bills and promote sustainability. By harnessing the
              power of the sun, solar panels provide free, renewable energy,
              lowering electricity costs over time. With available incentives like
              tax credits and rebates, the initial investment becomes more
              affordable, and many homeowners see a return on investment within a
              few years. Beyond savings, solar energy helps reduce your carbon
              footprint, making your home more Eco-friendly. Solar power is clean
              and renewable, which helps protect the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 py-8 md:py-12 gap-4">
            {ResidentialInfo.map((info, idx) => (
              <div 
                key={idx} 
                className="animate-slideUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <SystemCard
                  des={info.des}
                  icon={info.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  section 1*/}

      {/*  section 2 */}
      <div className="bg-[#ABD1C6] min-h-screen relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
        
        <div className="globalContainer relative z-10 py-12 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block bg-primary/10 text-primary font-semibold text-xs sm:text-sm px-4 py-2 rounded-full mb-4 animate-fadeIn">
              OUR PACKAGES
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-primary font-bold animate-slideUp">
              Residential Solar System Package
            </h2>
            <p className="text-primary/70 mt-4 text-sm md:text-base max-w-2xl mx-auto animate-fadeIn">
              Choose the perfect solar package for your home and start saving today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-8">
            {ResidentialPackage.map((info, idx) => (
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
      {/*  section 2 */}
      <Footer/>
    </div>
  );
};

export default Residential;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Facebook, X } from "lucide-react";
import { SocialLink } from "@/types";
import Image from "next/image";
import ContactForm from "./Contact/ContactForm";
import { NavData, productItems } from "@/constants/home";
const socialLinks: SocialLink[] = [
  {
    href: "https://www.facebook.com/share/196Jdtc7uJ/?mibextid=wwXIfr",
    icon: <Facebook />,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasShownPopup = localStorage.getItem("hasShownPopup");

      if (!hasShownPopup) {
        setIsPopupOpen(true);
        localStorage.setItem("hasShownPopup", "true");
      }
    }
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <footer className="bg-primary text-white relative overflow-hidden">
        {/* Decorative animated elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-tertiary/5 rounded-full blur-3xl"></div>

        {/* Free Solar Assessment Section */}
        <div className="globalContainer py-10 sm:py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10">
            {/* Left Content */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-[0.65] text-center lg:text-left">
              <div>
                <span className="inline-block bg-secondary/20 text-secondary font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                  FREE ASSESSMENT
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block">Get Your Free Solar</span>
                <span className="block bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
                  Assessment Today
                </span>
              </h2>
              <p className="text-gray-100 font-light text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Email us to book your Free Solar Assessment at your home. Understand your solar needs and potential savings from our expert solar consultants.
              </p>
            </div>

            {/* Right CTA Button */}
            <div className="lg:flex-[0.35] w-full lg:w-auto flex justify-center lg:justify-end">
              <button
                onClick={togglePopup}
                className="group relative px-4 sm:px-6 py-2.5 sm:py-3 bg-primary hover:bg-primary/90 text-white font-bold text-xs sm:text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2 shadow-md overflow-hidden whitespace-nowrap"
              >
                <span className="relative z-10">Click Here to Book</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                {/* Hover background effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        <div className="globalContainer py-8 sm:py-12 md:py-16 relative z-10">
          <div className="mt-0 md:mt-0 flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 p-1">
            {/* Company Info - Takes more space */}
            <div className="lg:w-[35%] space-y-6 sm:space-y-8 lg:mb-0">
              <div className="relative w-[180px] sm:w-[236px] h-[40px] sm:h-[52px] mx-auto lg:mx-0">
                <Image
                  src={"/img/logo.png"}
                  alt="Commercial Solar Panels Installation for Home In Brisbane"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-xs sm:text-sm font-light text-center lg:text-left mx-auto lg:mx-0">
                Our mission is to make clean, renewable energy accessible to all
                while helping our customers save money and protect the planet.
                Join us in leading the charge towards a brighter, greener
                future!
              </p>
              <div className="relative w-[180px] sm:w-[236px] h-auto mx-auto lg:mx-0">
                <Image
                  src={"/img/cleanEnery.png"}
                  alt="Commercial Solar Panels Installation for Home In Brisbane"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full px-2 sm:px-3 py-2 sm:py-3 bg-white"
                />
              </div>
            </div>

            {/* Links Section - 3 columns */}
            <div className="lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
              {/* Quick Links */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-sm sm:text-base font-semibold border-b border-white/20 pb-2">Quick Links</h4>
                <nav className="space-y-2 sm:space-y-3 flex flex-col text-xs sm:text-sm font-light">
                  {NavData.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="hover:text-secondary hover:translate-x-1 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Products */}
              <div className="space-y-3 sm:space-y-4">
                <h4 className="text-sm sm:text-base font-semibold border-b border-white/20 pb-2">Products</h4>
                <nav className="space-y-2 sm:space-y-3 flex flex-col text-xs sm:text-sm font-light">
                  {productItems.map((product, idx) => (
                    <Link
                      key={idx}
                      href={product.href}
                      className="hover:text-secondary hover:translate-x-1 transition-all duration-300"
                    >
                      {product.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Contact & Location */}
              <div className="space-y-6 col-span-2 md:col-span-1">
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-sm sm:text-base font-semibold border-b border-white/20 pb-2">Contact Us</h4>
                  <div className="text-xs sm:text-sm font-light space-y-2">
                    <p className="hover:text-secondary transition-colors duration-300 cursor-pointer">📞 0734226150</p>
                    <p className="hover:text-secondary transition-colors duration-300 cursor-pointer">✉️ hello@daylightsolar.com.au</p>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-sm sm:text-base font-semibold border-b border-white/20 pb-2">Location</h4>
                  <p className="text-xs sm:text-sm font-light">
                    📍 1/30 Chancellor Village Blvd, Sippy Downs, 4556, QLD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full py-5 bg-[#0F3433] text-white text-center space-y-4">
        <p className="text-xs font-medium">
          &copy; {currentYear} DaylightSolar. All Rights Reserved.
        </p>
        <div className="flex justify-center gap-0">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="p-3 hover:text-gray-400 transition-colors duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-start z-50 bg-black/80 overflow-y-auto">
          <div className="popup-container relative w-full max-w-4xl mx-2 sm:mx-4 mt-4 sm:mt-10 md:mt-16 mb-4">
            <ContactForm />
            <X
              onClick={togglePopup}
              size={28}
              className="absolute top-3 sm:top-6 right-3 sm:right-5 md:right-24 z-10 cursor-pointer text-white"
            />
          </div>
        </div>
      )}
    </>
  );
}

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavData } from "@/constants/home";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
        setIsScrolled(true);
      } else {
        // Scrolling down - hide navbar
        setIsVisible(false);
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMobileMenuClose = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-lg py-2 shadow-lg"
          : "bg-gradient-to-b from-black/40 via-black/20 to-transparent py-2"
      }`}
    >
      <div className="globalContainer flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          <Image
            src="/img/logo_bw.webp"
            alt="Daylight Solar - Solar Panels Installation Brisbane"
            width={280}
            height={90}
            className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {NavData.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 text-gray-200 hover:text-white hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/checksolarsubsidy"
            className="ml-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white font-bold px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-xs xl:text-sm"
          >
            SOLAR SUBSIDY
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!IsOpen)}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {!IsOpen && <Menu size={24} className="sm:w-[26px] sm:h-[26px] text-white" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {IsOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={handleMobileMenuClose}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className="fixed top-0 right-0 h-screen w-64 bg-gradient-to-b from-primary to-primary/95 shadow-2xl z-50 overflow-y-auto"
            style={{ animation: "slideIn 0.3s ease-out" }}
          >
            {/* Close Button */}
            <button
              onClick={handleMobileMenuClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={28} className="text-white" />
            </button>

            {/* Mobile Nav Items */}
            <div className="pt-20 px-6 space-y-2">
              {NavData.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={handleMobileMenuClose}
                  className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors font-medium text-base"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                href="/checksolarsubsidy"
                onClick={handleMobileMenuClose}
                className="block mt-6 w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white font-bold px-4 py-3 rounded-lg transition-all duration-200 text-center shadow-lg"
              >
                SOLAR SUBSIDY
              </Link>
            </div>

            {/* Footer info in mobile menu */}
            <div className="absolute bottom-8 left-6 right-6 text-white/60 text-xs text-center">
              <p>Powered by Daylight Solar</p>
            </div>
          </div>

          <style jsx>{`
            @keyframes slideIn {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(0);
              }
            }
          `}</style>
        </>
      )}

    </nav>
  );
};

export default Navbar;

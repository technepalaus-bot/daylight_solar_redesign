"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Congrats from "@/components/Contact/Congrats";
import ContactForm from "@/components/Contact/ContactForm";

const FreeSolarAssessment = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative overflow-hidden w-full bg-[#F9F9F9]">
      <section className="max-w-7xl mx-auto my-20 flex flex-col md:flex-row items-center gap-8 bg-[#F9F9F9] rounded-lg">
        <div className="w-full mx-auto md:mx-0 md:w-1/2 lg:w-1/2 relative">
          <Link href={"/"}>
            <div className="absolute top-4 left-4 z-10">
              <Image
                src="/img/logo.png"
                alt="Commercial Solar Panels Installation for Home In Brisbane"
                width={100}
                height={50}
                className="w-32 sm:w-40 h-auto"
              />
            </div>
          </Link>
          <Link href="/">
            <button className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-2xl text-sm font-medium">
              Back to Home Page <ArrowRight size={16} />
            </button>
          </Link>
          <Image
            src="/img/Rectangle 31.png"
                          alt="Commercial Solar Panels Installation for Home In Brisbane"
            width={1200}
            height={1200}
            className="rounded-lg shadow-lg w-full h-full"
          />
        </div>

        <div className="md:w-3/5 bg-[#F9F9F9] px-5 md:pl-8 rounded-lg">
          <ContactForm />
        </div>
        <Congrats isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </section>
    </div>
  );
};

export default FreeSolarAssessment;

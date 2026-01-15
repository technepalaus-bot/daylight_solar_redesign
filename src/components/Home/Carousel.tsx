"use client";
import { CompanyImg } from "@/constants/home";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="globalContainer mt-20 relative overflow-hidden">
      <div className="flex justify-end mb-8">
        <div className="flex gap-3">
          {/* Custom Navigation Buttons */}
          <button
            className="custom-swiper-button-P p-3 rounded-full border-2 border-primary bg-white text-primary shadow-md hover:shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
            onClick={handleButtonClick}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="custom-swiper-button-N p-3 rounded-full border-2 border-primary bg-white text-primary shadow-md hover:shadow-lg hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300"
            onClick={handleButtonClick}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={5}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-swiper-button-N",
          prevEl: ".custom-swiper-button-P",
        }}
        loop={true}
        className="py-10"
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {CompanyImg.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative group w-[122px] h-[50px] md:w-[222px] md:h-[122px] flex-shrink-0 cursor-pointer">
              {/* Image Container with Effects */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-white p-3 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={img}
                  alt="Partner company logo"
                  width={500}
                  height={500}
                  className="object-contain w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Accent Border on Hover */}
              <div className="absolute inset-0 rounded-lg border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

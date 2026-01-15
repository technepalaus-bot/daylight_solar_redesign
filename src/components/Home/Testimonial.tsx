"use client";
import { TestimonialIn } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = ({ testimonials }: { testimonials: TestimonialIn[] }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 px-2 sm:px-4">
      {/* Left Navigation Button */}
      <button className="custom-swiper-button-prev group absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 md:left-0 text-primary bg-white hover:bg-primary hover:text-white border-2 border-primary w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 z-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-110">
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-125 transition-transform duration-300" />
      </button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperRef}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((item, idx) => {
          const isCenter = idx === activeIndex;
          return (
            <SwiperSlide key={idx}>
              <div
                className={`group relative p-5 sm:p-6 md:p-8 lg:p-10 mx-1 sm:mx-2 md:mx-4 bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-200 shadow-lg rounded-2xl sm:rounded-3xl text-primary text-[15px] overflow-hidden flex flex-col justify-between transition-all duration-500 ease-out transform ${
                  isCenter
                    ? "h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px] scale-105 sm:scale-110 opacity-100 z-20 hover:shadow-2xl hover:border-secondary/70 hover:scale-[1.08] sm:hover:scale-[1.15]"
                    : "h-auto min-h-[300px] sm:min-h-[350px] md:min-h-[380px] scale-95 sm:scale-90 opacity-70 z-10 hover:shadow-lg hover:scale-95"
                }`}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-secondary/0 via-secondary via-50% to-secondary/0 group-hover:h-2 transition-all duration-300"></div>

                {/* Quote section */}
                <div className="flex-1 flex flex-col justify-center mb-4 sm:mb-6">
                  <div className={`mb-2 sm:mb-4 font-bold opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${isCenter ? "text-secondary text-xl sm:text-2xl" : "text-secondary text-base sm:text-lg"}`}>
                    ❝
                  </div>
                  <p className={`font-light italic leading-relaxed group-hover:text-gray-900 transition-all duration-300 ${
                    isCenter
                      ? "text-base sm:text-lg md:text-xl text-gray-900"
                      : "text-sm sm:text-base md:text-lg text-gray-800"
                  }`}>
                    {item.quote}
                  </p>
                </div>

                {/* Author and stars section */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-gray-300 group-hover:border-secondary/50 transition-colors duration-300">
                  <div>
                    <p className={`font-bold text-primary group-hover:text-secondary transition-colors duration-300 ${isCenter ? "text-base sm:text-lg md:text-xl" : "text-sm sm:text-base md:text-lg"}`}>
                      {item.author}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Verified Customer</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, starIdx) => (
                        <div
                          key={starIdx}
                          className={`text-secondary transform transition-all duration-300 group-hover:scale-110 ${isCenter ? "text-base sm:text-xl" : "text-sm sm:text-lg"}`}
                          style={{
                            transitionDelay: `${starIdx * 0.05}s`,
                          }}
                        >
                          ⭐
                        </div>
                      ))}
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Right Navigation Button */}
      <button className="custom-swiper-button-next group absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 md:right-0 text-primary bg-white hover:bg-primary hover:text-white border-2 border-primary w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 z-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-110">
        <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:scale-125 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default Testimonials;

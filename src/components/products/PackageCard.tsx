"use client";
import React from "react";
import Image from "next/image";
import { PackageInfoProps } from "@/types";

const PackageCard: React.FC<PackageInfoProps> = ({
  img,
  title,
  des1,
  des2,
}) => {
  return (
    <div className="group flex items-center justify-center mb-4 md:mb-8 animate-fadeIn">
      <div className="flex flex-col items-center bg-white w-full h-[720px] rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="w-full h-[400px] overflow-hidden rounded-xl relative">
          <Image
            src={img}
            alt={title || "No image"}
            width={400}
            height={455}
            className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-700 ease-out"
            priority
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <h2 className="text-xl text-primary md:text-2xl mt-6 font-semibold group-hover:text-primary/80 transition-colors duration-300">{title}</h2>
        {des1 && <p className="text-sm md:text-lg font-light mt-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-center">{des1}</p>}
        {des2 && <p className="text-lg md:text-xl text-center mt-3 font-medium text-primary/80">{des2}</p>}
      </div>
    </div>
  );
};

export default PackageCard;

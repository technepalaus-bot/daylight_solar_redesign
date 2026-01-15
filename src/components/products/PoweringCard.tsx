"use client";
import { PoweringIn } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const PoweringCard = ({ Item, index }: { Item: PoweringIn; index: number }) => {
  return (
    <div className="relative">
      {/* Divider Line */}
      {index > 0 && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      )}
      
      <Link href={Item.href} className="block">
        <div className={`group flex flex-col md:flex-row ${index % 2 !== 0 && "md:flex-row-reverse"} gap-10 items-center py-6 cursor-pointer`}>
          {/* Content Section */}
          <div className="md:w-[50%] text-white">
            <h2 className="text-2xl md:text-3xl text-white font-semibold group-hover:text-secondary transition-colors duration-300">{Item.title}</h2>
            <p className="my-4 md:my-7 font-light text-white/80 group-hover:text-white transition-colors duration-300">{Item.des}</p>
            <div className="flex gap-3 items-center p-3 bg-white/5 rounded-xl w-fit group-hover:bg-white/10 transition-all duration-300 card-3d">
              <div className="relative w-6 h-6 icon-3d">
                <Image
                  src={Item.item.img}
                  alt="Feature Icon"
                  width={500}
                  height={500}
                  className="object-cover w-auto h-full"
                />
              </div>
              <p className="font-medium text-secondary">{Item.item.name}</p>
            </div>
            
            {/* Learn More Button */}
            <div className="mt-6 flex items-center gap-2 text-secondary font-semibold group-hover:gap-4 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

        {/* Image Section */}
        <div className="md:w-[50%]">
          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl card-3d">
            <Image
              src={Item.img}
              alt="Solar Installation"
              width={1000}
              height={1000}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-white font-semibold text-sm">{Item.title}</p>
            </div>
          </div>
          </div>
        </div>
      </Link>
      
      {/* Bottom decorative element */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-6 hover:via-secondary/30 transition-all duration-500"></div>
    </div>
  );
};

export default PoweringCard;

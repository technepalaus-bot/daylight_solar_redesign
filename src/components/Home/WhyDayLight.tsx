import { BtnData } from "@/constants/home";
import Image from "next/image";
import React from "react";

const WhyDayLight = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <div className="globalContainer relative overflow-hidden pt-16 md:pt-32 text-primary">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 ">
          {BtnData.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border-2 border-primary/20 bg-white w-full md:w-[350px] py-5 px-5 rounded-2xl text-lg text-left font-bold uppercase shadow-md hover:shadow-xl hover:border-secondary/50 hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300 group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="leading-6 group-hover:text-secondary transition-colors duration-300">{item.title} </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[25fr_50fr_25fr]">
          <div className="flex flex-col justify-end gap-5 lg:gap-24 mt-3 md:mt-10">
            {BtnData.slice(2, 6).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-primary/20 bg-white lg:w-[350px] uppercase py-5 px-5 rounded-2xl text-lg text-left font-bold shadow-md hover:shadow-xl hover:border-secondary/50 hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="leading-6 group-hover:text-secondary transition-colors duration-300">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 lg:mt-0 flex flex-col items-center justify-end gap-10 lg:gap-36 text-center text-5xl lg:text-7xl font-bold">
            <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">WHY DAYLIGHT SOLAR?</p>
            {BtnData.slice(-1).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-end gap-3 border-2 border-primary/20 bg-white lg:w-[380px] uppercase py-5 px-5 rounded-2xl text-lg text-left font-bold shadow-md hover:shadow-xl hover:border-secondary/50 hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="leading-6 group-hover:text-secondary transition-colors duration-300">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-end  gap-5 lg:gap-24 mt-3 md:mt-10">
            {BtnData.slice(6, 10).map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 border-2 border-primary/20 bg-white lg:w-[350px] uppercase py-5 px-5 rounded-2xl text-lg text-left font-bold shadow-md hover:shadow-xl hover:border-secondary/50 hover:bg-gradient-to-br hover:from-secondary/5 hover:to-transparent transition-all duration-300 group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="leading-6 group-hover:text-secondary transition-colors duration-300">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <Image
          src={
            "/img/Commercial_Solar_Panels_Installation_for_Home_In_Brisbane.webp"
          }
          alt="Commercial Solar Panels Installation for Home In Brisbane"
          width={1500}
          height={1500}
          priority
          quality={100}
          className="object-cover w-full h-full mt-20"
        />
      </div>
    </div>
  );
};

export default WhyDayLight;

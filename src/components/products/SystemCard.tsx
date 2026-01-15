import React from "react";
import Image from "next/image";

export interface ResidentialCommercialCardProps {
  icon: string;
  des: string;
}
const SystemCard: React.FC<ResidentialCommercialCardProps> = ({
  des,
  icon,
}) => {
  return (
    <div className="group flex items-center pl-6 border border-white/50 rounded-xl py-5 text-lg mx-3 md:mr-10 mb-3 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white hover:scale-[1.02] hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer">
      <div className="p-2 bg-white/10 rounded-lg mr-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
        <Image src={icon} width={24} height={24} alt="Commercial Solar Panels Installation for Home In Brisbane" className="group-hover:brightness-125 transition-all duration-300" />
      </div>
      <p className="text-sm md:text-lg group-hover:text-white/90">{des}</p>
    </div>
  );
};

export default SystemCard;

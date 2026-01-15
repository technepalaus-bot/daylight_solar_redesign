import { Feature } from "@/types";
import Image from "next/image";

const FeatureCard = ({ icon, title, description }: Feature) => (
  <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-tertiary/20 transition-all duration-500 hover:shadow-2xl hover:border-secondary/50 cursor-pointer">
    {/* Gradient Background on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Animated Border Glow */}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary/20 to-tertiary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur -z-10"></div>
    
    <div className="relative p-6 flex flex-col h-full">
      {/* Icon with Background */}
      <div className="mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-tertiary/10 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-secondary/20 group-hover:to-tertiary/20 transition-all duration-500 group-hover:scale-110">
          <Image
            src={icon}
            width={32}
            height={32}
            alt={title}
            className="h-8 w-8 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-primary text-lg group-hover:text-secondary transition-colors duration-300 mb-3">
          {title}
        </h3>
        <p className="font-light text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Accent Line */}
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-secondary to-transparent group-hover:w-12 transition-all duration-500"></div>
    </div>
  </div>
);

export default FeatureCard;

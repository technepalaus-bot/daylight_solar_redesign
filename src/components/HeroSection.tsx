import Image from "next/image";
import { ReactNode } from "react";

interface Heroprop {
  img: string;
  Children: ReactNode;
  SmallImg?: boolean;
}

const HeroSection = ({ img, Children, SmallImg }: Heroprop) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className={`relative ${SmallImg ? "h-[90vh]" : "h-screen"} w-full`}>
        <Image
          src={img}
          alt="Commercial Solar Panels Installation for Home In Brisbane"
          width={1000}
          height={1000}
          className={`absolute w-full h-full ${
            SmallImg ? "md:rounded-b-[50px] object-cover" : "object-cover"
          }`}
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Container */}
      <div className="absolute inset-0">
        <div className="globalContainer flex items-center gap-5 h-full mt-20">
          <div>{Children}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

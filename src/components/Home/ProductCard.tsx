import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card
      key={product?.id}
      className="relative overflow-hidden h-[500px] md:h-[500px] lg:w-[400px] border-none group cursor-pointer"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute w-full h-full inset-0 overflow-hidden">
        <Image
          src={product?.imageSrc}
          alt={product?.title}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-500"></div>
      </div>

      {/* Accent Overlay on Hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary/0 via-secondary/100 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 h-full flex flex-col justify-end">
        <CardContent className="text-white pb-4 transform transition-transform duration-500 group-hover:translate-y-0">
          <CardTitle className="text-xl md:text-2xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
            {product?.title}
          </CardTitle>
          <p className="font-light text-sm md:text-base text-gray-100 leading-relaxed group-hover:text-gray-50 transition-colors duration-300">
            {product?.description}
          </p>
        </CardContent>

        <CardFooter className="pb-6">
          <Link href={product?.link} className="w-full">
            <Button
              variant="white"
              className="w-full justify-between text-primary text-xs font-bold rounded-xl transition-all duration-300 group-hover:bg-secondary group-hover:text-black hover:shadow-lg"
            >
              <span>EXPLORE MORE</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;

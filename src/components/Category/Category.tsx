"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "500" });

const categories = [
  { name: "Ethnic Wear", src: "/assets/category/ethnic.png" },
  { name: "Casual Wear", src: "/assets/category/casual.png" },
  { name: "Western Wear", src: "/assets/category/western.png" },
  { name: "Sports Wear", src: "/assets/category/sport.png" },
  { name: "Kids Wear", src: "/assets/category/kids.png" },
  { name: "Formal Wear", src: "/assets/category/formal.png" },
  { name: "Sleep Wear", src: "/assets/category/sleep.png" },
  { name: "Inner Wear", src: "/assets/category/inner.png" },
  { name: "Lingerie Wear", src: "/assets/category/lingerie.png" },
  { name: "Beauty & Makeup", src: "/assets/category/beauty.png" },
  { name: "Footwear", src: "/assets/category/footwear.png" },
  { name: "Watches", src: "/assets/category/watch.png" },
  { name: "Sunglasses", src: "/assets/category/sunglasses.png" },
  { name: "Bags", src: "/assets/category/bags.png" },
  { name: "Handbags", src: "/assets/category/handbags.png" },
];

export default function Category() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full mt-21 pb-34 px-4">
      <h2 className={`${cinzel.className} text-6xl font-bolder tracking-widest text-black mb-20 text-center`}>
        Shop By Category
      </h2>

      <div
        ref={containerRef}
        className={`${
          isSmallScreen
            ? "flex gap-6 overflow-x-auto no-scrollbar scroll-smooth touch-pan-x snap-x snap-mandatory px-4"
            : "flex flex-wrap justify-center gap-10 px-[6vw]"
        }`}
      >
        {categories.map(({ name, src }) => (
          <div
            key={name}
            role="button"
            tabIndex={0}
            className={`${
              isSmallScreen ? "flex-shrink-0 snap-start w-[220px]" : "w-[250px]"
            } bg-red-300 rounded-sm overflow-hidden shadow-md cursor-pointer`}
            onClick={() => {}}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
              }
            }}
          >
            <div className="bg-red-400 pt-[6px] px-[6px]">
              <div className="relative w-full h-[280px] bg-white">
                <Image
                  src={src}
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className={`bg-red-400 text-white text-center py-2 ${cinzel.className}`}>
              <p className="text-xl md:text-2xl font-semibold">{name}</p>
              <p className="mt-2 text-base md:text-lg font-medium">Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

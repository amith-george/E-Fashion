"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "500" });

const brandData = [
  { name: "Nike", src: "/assets/brands/nike.jpeg" },
  { name: "Adidas", src: "/assets/brands/adidas.jpeg" },
  { name: "Guess", src: "/assets/brands/guess.jpeg" },
  { name: "Prada", src: "/assets/brands/prada.jpeg" },
  { name: "Tommy Hilfiger", src: "/assets/brands/tommy.jpeg" },
  { name: "Van Heusen", src: "/assets/brands/vanhuesen.jpeg" },
  { name: "Levi's", src: "/assets/brands/levis.jpeg" },
  { name: "Armani", src: "/assets/brands/armani.jpeg" },
  { name: "Rolex", src: "/assets/brands/rolex.jpeg" },
  { name: "Chanel", src: "/assets/brands/chanel.jpeg" },
];

const CYCLE_INTERVAL = 7000;

export default function Brands() {
  const [startIndex, setStartIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(5);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setImagesPerView(1);
      else if (window.innerWidth < 768) setImagesPerView(2);
      else if (window.innerWidth < 1024) setImagesPerView(3);
      else if (window.innerWidth < 1280) setImagesPerView(4);
      else setImagesPerView(5);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSwiping.current) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + imagesPerView) % brandData.length);
    }, CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [imagesPerView, startIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    isSwiping.current = false;
    const deltaX = touchStartX.current - touchEndX.current;

    const minSwipeDistance = 50;
    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        setStartIndex((prev) => (prev + 1) % brandData.length);
      } else {
        setStartIndex((prev) =>
          prev === 0 ? brandData.length - 1 : prev - 1
        );
      }
    }
  };

  const currentImages = brandData.slice(startIndex, startIndex + imagesPerView);

  const displayImages =
    currentImages.length === imagesPerView
      ? currentImages
      : [...currentImages, ...brandData.slice(0, imagesPerView - currentImages.length)];

  return (
    <section className="w-full mt-21 pb-34">
      <h2
        className={`${cinzel.className} text-4xl font-bolder tracking-widest text-black mb-14 px-4`}
      >
        Popular Brands
      </h2>

      <div
        className="flex w-full h-[500px] overflow-hidden"
        onTouchStart={imagesPerView === 1 ? onTouchStart : undefined}
        onTouchMove={imagesPerView === 1 ? onTouchMove : undefined}
        onTouchEnd={imagesPerView === 1 ? onTouchEnd : undefined}
      >
        {displayImages.map((brand, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-full flex flex-col items-start"
          >
            <div className="relative w-full min-w-[300px] h-[500px] sm:min-w-auto sm:h-[85%]">
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
            <p
              className={`${cinzel.className} mt-2 text-xl text-black font-extrabold tracking-wide`}
              style={{ marginLeft: "8px", width: "100%" }}
            >
              {brand.name}
            </p>
            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              className="mt-2 px-4 py-2 border border-black bg-white text-black font-semibold rounded-sm
                transition-all duration-300 hover:bg-black hover:text-white inline-block"
              style={{ marginLeft: "8px" }}
            >
              Shop Now!
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

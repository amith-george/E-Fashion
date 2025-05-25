"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const desktopBanners = [
  "/assets/banners/banner1.png",
  "/assets/banners/banner2.png",
  "/assets/banners/banner3.png",
  "/assets/banners/banner4.png",
];

const mobileBanners = [
  "/assets/banners/mobilebanner0.png",
  "/assets/banners/mobilebanner1.png",
  "/assets/banners/mobilebanner2.png",
  "/assets/banners/mobilebanner3.png",
];

interface BannerProps {
  current: number;
  setCurrent: (index: number) => void;
}

export default function Banner({ current, setCurrent }: BannerProps) {
  const [isMobile, setIsMobile] = useState(false);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bannerImages = isMobile ? mobileBanners : desktopBanners;

  // Swipe detection
  useEffect(() => {
    const element = bannerRef.current;
    if (!element) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const delta = startX - endX;
      if (Math.abs(delta) > 50) {
        if (delta > 0) {
          // swipe left
          setCurrent((current + 1) % bannerImages.length);
        } else {
          // swipe right
          setCurrent(current === 0 ? bannerImages.length - 1 : current - 1);
        }
      }
    };

    element.addEventListener("touchstart", handleTouchStart);
    element.addEventListener("touchmove", handleTouchMove);
    element.addEventListener("touchend", handleTouchEnd);

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [setCurrent, bannerImages.length, current]);

  return (
    <div
      ref={bannerRef}
      className={`relative w-full overflow-hidden ${
        isMobile
          ? "h-[500px]" // taller for mobile banners
          : "h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
      }`}
    >
      {bannerImages.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}

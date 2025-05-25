"use client";

import { useEffect, useState } from "react";
import Banner from "./Banner";

const bannerCount = 4;

export default function BannerWithDots() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerCount);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Banner current={current} setCurrent={setCurrent} />
      <div className="flex justify-center gap-2 mt-4">
        {[...Array(bannerCount)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full border-2 ${
              index === current ? "bg-black border-black" : "border-gray-400"
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

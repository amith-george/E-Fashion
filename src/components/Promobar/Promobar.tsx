"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Promobar() {
  const getCurrentMonthName = () => {
    const date = new Date();
    return date.toLocaleString("default", { month: "long" });
  };

  const currentMonth = getCurrentMonthName();

  return (
    <div className="w-full bg-gray-100 py-3 px-4 select-none">
      <div className="flex items-center justify-center relative text-base md:text-sg text-gray-800 font-medium">
        <span>
          Buy 2, Save an extra 20%! Exclusive Offer on Curated Picks this {currentMonth}!
        </span>
        <a
          href="#"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Go to offer"
        >
          <FiArrowRight size={20} />
        </a>
      </div>
    </div>
  );
}

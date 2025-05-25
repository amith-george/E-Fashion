"use client";

import { useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const isOpen = (section: string) => openSection === section;

  return (
    <footer className="bg-white pb-40 px-5 lg:px-10 pt-0 text-gray-800">
      <div className="border-t border-gray-300 w-full" />

      {/* Main content */}
      <div className="flex flex-col lg:flex-row justify-between pt-6 text-base space-y-10 lg:space-y-0">
        {/* Left Side */}
        <div className="flex flex-col gap-5 lg:flex-row w-full">
          {/* Section - Resources */}
          <div className="w-full">
            <button
              onClick={() => toggleSection("resources")}
              className="lg:cursor-default w-full flex justify-between items-center text-left text-base font-semibold mb-4 lg:mb-8"
            >
              Resources
              {/* Arrow only visible on small screens */}
              <span className="lg:hidden">
                {isOpen("resources") ? (
                  <FiChevronUp className="inline-block" />
                ) : (
                  <FiChevronDown className="inline-block" />
                )}
              </span>
            </button>
            <ul
              className={`text-sm text-gray-600 space-y-3 ${
                isOpen("resources") ? "block" : "hidden"
              } lg:block`}
            >
              <li><a href="#">Find A Store</a></li>
              <li><a href="#">Become A Member</a></li>
              <li><a href="#">Product Advice</a></li>
              <li><a href="#">Send Us Feedback</a></li>
            </ul>
          </div>

          <hr className="lg:hidden border-t border-gray-300 my-2" />

          {/* Section - Help */}
          <div className="w-full">
            <button
              onClick={() => toggleSection("help")}
              className="lg:cursor-default w-full flex justify-between items-center text-left text-base font-semibold mb-4 lg:mb-8"
            >
              Help
              <span className="lg:hidden">
                {isOpen("help") ? (
                  <FiChevronUp className="inline-block" />
                ) : (
                  <FiChevronDown className="inline-block" />
                )}
              </span>
            </button>
            <ul
              className={`text-sm text-gray-600 space-y-3 ${
                isOpen("help") ? "block" : "hidden"
              } lg:block`}
            >
              <li><a href="#">Get Help</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </div>

          <hr className="lg:hidden border-t border-gray-300 my-2" />

          {/* Section - Company */}
          <div className="w-full">
            <button
              onClick={() => toggleSection("company")}
              className="lg:cursor-default w-full flex justify-between items-center text-left text-base font-semibold mb-4 lg:mb-8"
            >
              Company
              <span className="lg:hidden">
                {isOpen("company") ? (
                  <FiChevronUp className="inline-block" />
                ) : (
                  <FiChevronDown className="inline-block" />
                )}
              </span>
            </button>
            <ul
              className={`text-sm text-gray-600 space-y-3 ${
                isOpen("company") ? "block" : "hidden"
              } lg:block`}
            >
              <li><a href="#">About E-Commerce</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Impact</a></li>
              <li><a href="#">Report a Concern</a></li>
            </ul>
          </div>
        </div>

        {/* Language Selector */}
        <hr className="lg:hidden border-t border-gray-300 my-2" />
        <div className="flex items-start pt-4 lg:pt-0">
          <div className="flex items-center gap-2 text-sm">
            <FaGlobe className="text-base" />
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Footer bottom links */}
      <hr className="lg:hidden border-t border-gray-300 my-6" />
      <div className="mt-15 flex flex-col lg:flex-row flex-wrap gap-y-2 gap-x-10 text-sm text-gray-600">
        <span>© 2025 E-Commerce, Inc. All rights reserved</span>
        <a href="#">Guides</a>
        <a href="#">Terms of Sale</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import {
  categoryDropdowns,
  categoryColors,
  type CategoryKey,
} from "./CategoryData";

const categories: CategoryKey[] = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY"];

export default function Navbar() {
  // indicator hover
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // responsive/mobile detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // profile dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [profileDropdownHovered, setProfileDropdownHovered] = useState(false);

  // scroll hide/show
  const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 80) setScrollDir("down");
      else if (y < lastY.current) setScrollDir("up");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // refs for mega-menu
  const linkContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const hoveredCat =
    hoveredIndex !== null ? categories[hoveredIndex] : null;

  const themeColor =
    hoveredCat && categoryColors[hoveredCat]
      ? categoryColors[hoveredCat]
      : categoryColors.MEN;

  const handleMouseEnterLink = (idx: number) => {
    if (!linkContainerRef.current) return;
    const node = linkRefs.current[idx];
    if (node) {
      const containerRect =
        linkContainerRef.current.getBoundingClientRect();
      const linkRect = node.getBoundingClientRect();
      setIndicator({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
      setHoveredIndex(idx);
    }
  };

  const handleMouseLeaveWrapper = () => {
    setIndicator({ left: 0, width: 0 });
    setHoveredIndex(null);
  };

  const dropdownData =
    hoveredCat !== null ? categoryDropdowns[hoveredCat] : null;

  const dropdownLeft = linkContainerRef.current
    ? linkContainerRef.current.offsetLeft - 20
    : 0;
  const dropdownWidth = linkContainerRef.current
    ? linkContainerRef.current.offsetWidth + 160
    : "auto";

  const showProfile = showProfileDropdown || profileDropdownHovered;

  const profileDropdownLeft = "calc(100% - 280px)";

  return (
    <div
      className={`${styles.navbarWrapper} ${
        scrollDir === "down" ? styles.hide : scrollDir === "up" ? styles.show : ""
      }`}
      onMouseLeave={() => {
        if (!profileDropdownHovered) setShowProfileDropdown(false);
        handleMouseLeaveWrapper();
      }}
      style={{ "--theme-color": themeColor } as React.CSSProperties}
    >
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 bg-white shadow-md">
        {/* LEFT */}
        <div className="flex items-center gap-12">
          <img src="/assets/Logo.svg" alt="Logo" className="h-10 w-auto" />

          {!isMobile && (
            <div className={styles.linkContainer} ref={linkContainerRef}>
              {categories.map((cat, i) => (
                <a
                  key={cat}
                  href="#"
                  ref={(el) => {linkRefs.current[i] = el;}}
                  className="text-sm font-bold text-gray-800 hover:text-[color:var(--theme-color)] transition-colors"
                  onMouseEnter={() => handleMouseEnterLink(i)}
                >
                  {cat}
                </a>
              ))}
              <span
                className={styles.indicator}
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  opacity: hoveredIndex !== null ? 1 : 0,
                }}
              />
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-8 pr-6">
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
            <FiSearch className="text-gray-700 text-lg" />
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="ml-2 border-none outline-none text-sm placeholder-gray-500 text-black"
              style={{ width: "clamp(150px,30vw,350px)" }}
            />
          </div>

          <div
            className="flex flex-col items-center cursor-pointer relative group"
            onMouseEnter={() => setShowProfileDropdown(true)}
            onMouseLeave={() =>
              setTimeout(() => {
                if (!profileDropdownHovered) setShowProfileDropdown(false);
              }, 100)
            }
          >
            <FiUser
              className={`text-lg ${
                showProfile ? "text-blue-600" : "text-gray-800"
              } group-hover:text-blue-600 transition-colors`}
            />
            <span
              className={`text-xs font-bold ${
                showProfile ? "text-blue-600" : "text-gray-800"
              } group-hover:text-blue-600 transition-colors`}
            >
              PROFILE
            </span>
          </div>

          {!isMobile && (
            <>
              <button className="flex flex-col items-center cursor-pointer group">
                <FiHeart className="text-lg text-gray-800 group-hover:text-blue-600 transition-colors" />
                <span className="text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  WISHLIST
                </span>
              </button>
              <button className="flex flex-col items-center cursor-pointer group">
                <FiShoppingBag className="text-lg text-gray-800 group-hover:text-blue-600 transition-colors" />
                <span className="text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  BAG
                </span>
              </button>
            </>
          )}
        </div>
      </nav>

      {/* PROFILE DROPDOWN */}
      {showProfile && (
        <div
          className={styles.profileDropdown}
          onMouseEnter={() => setProfileDropdownHovered(true)}
          onMouseLeave={() => {
            setProfileDropdownHovered(false);
            setShowProfileDropdown(false);
          }}
          style={{
            top: "100%",
            left: profileDropdownLeft,
            position: "absolute",
            /* desktop: behind nav; mobile: above nav */
            zIndex: isMobile ? 20 : 5,
          }}
        >
          <div className="flex flex-col gap-2 mb-2">
            <p className="font-bold m-0">Welcome</p>
            <p className="text-xs m-0">
              To access account and manage orders
            </p>
            <a
              href="#"
              className="mt-2 px-2 py-1 text-sm font-bold border border-green-500 text-green-500 rounded inline-block text-center"
            >
              Login / Signup
            </a>
          </div>
          <hr className={styles.separator} />
          {isMobile && (
            <ul className="text-sm space-y-1 mb-2">
              <li className="flex items-center gap-2">
                <FiHeart />
                <a href="#" className="hover:text-blue-600">
                  Wishlist
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiShoppingBag />
                <a href="#" className="hover:text-blue-600">
                  Bag
                </a>
              </li>
              <hr className="border-t border-gray-300 my-2" />
            </ul>
          )}
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-blue-600">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact Us
              </a>
            </li>
          </ul>
          <hr className={styles.separator} />
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:text-blue-600">
                Coupons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Saved Cards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Saved VPA
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Saved Addresses
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* MEGA MENU DROPDOWN */}
      <div
        className={`${styles.dropdownPanel} ${
          hoveredIndex !== null ? styles.visible : ""
        }`}
        style={{
          left: dropdownLeft,
          width: dropdownWidth,
          /* always behind nav on desktop */
          zIndex: isMobile ? 10 : 5,
        }}
        onMouseEnter={() =>
          hoveredIndex !== null && setHoveredIndex(hoveredIndex)
        }
        onMouseLeave={handleMouseLeaveWrapper}
      >
        {dropdownData?.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`flex flex-col gap-4 min-w-[160px] text-sm rounded p-4 ${
              colIdx % 2 === 1 ? styles.grayBackground : ""
            }`}
          >
            <div className="flex flex-col gap-4">
              {col.map((section, sIdx) => (
                <div key={sIdx} className="flex flex-col gap-1">
                  <a
                    href="#"
                    className="font-bold text-[color:var(--theme-color)] text-sm no-underline"
                  >
                    {section.heading}
                  </a>
                  {section.items.map((it, itIdx) => (
                    <a
                      key={itIdx}
                      href="#"
                      className="text-gray-800 text-sm no-underline hover:text-[color:var(--theme-color)]"
                    >
                      {it}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

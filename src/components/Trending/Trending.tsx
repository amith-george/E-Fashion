"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Cinzel } from "next/font/google";
import { trendingProducts } from "./Product";

const cinzel = Cinzel({ subsets: ["latin"], weight: "500" });

export default function Trending() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [visibleProductIds, setVisibleProductIds] = useState<Set<string>>(new Set());
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateVisibleProducts = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const visibleSet = new Set<string>();
    const children = Array.from(container.children);

    children.forEach((child, index) => {
      const product = trendingProducts[index];
      const rect = child.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (rect.left >= containerRect.left && rect.right <= containerRect.right) {
        visibleSet.add(product.id);
      }
    });

    setVisibleProductIds(visibleSet);
  }, []);

  const scrollContainer = (direction: "left" | "right") => {
    if (!containerRef.current || isSmallScreen) return;
    const scrollAmount = cardWidth * 3;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      updateVisibleProducts();
      updateArrowVisibility();
    }, 300);
  };

  const updateArrowVisibility = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 0);
    setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const handleResizeOrScroll = () => {
      updateVisibleProducts();
      updateArrowVisibility();
      setIsSmallScreen(window.innerWidth < 768);
    };

    if (cardRef.current) {
      const gap = 32; // Tailwind gap-x-8
      setCardWidth(cardRef.current.offsetWidth + gap);
    }

    handleResizeOrScroll();
    containerRef.current?.addEventListener("scroll", handleResizeOrScroll);
    window.addEventListener("resize", handleResizeOrScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", handleResizeOrScroll);
      window.removeEventListener("resize", handleResizeOrScroll);
    };
  }, [updateVisibleProducts]);

  const arrowButtonClasses = (side: "left" | "right") =>
    `absolute top-1/2 ${side === "left" ? "left-0" : "right-0"} transform -translate-y-1/2 z-20 p-4 transition ${
      isSmallScreen
        ? "border-none bg-transparent text-transparent cursor-default"
        : "border border-black bg-white hover:bg-black hover:text-white text-black"
    }`;

  return (
    <section className="w-full mt-14 pb-14 px-4 relative">
      <h2 className={`${cinzel.className} text-4xl font-bolder tracking-widest text-black mb-14`}>
        Trending Now
      </h2>

      {showLeftArrow && (
        <button
          onClick={() => !isSmallScreen && scrollContainer("left")}
          aria-label="Scroll left"
          className={arrowButtonClasses("left")}
          disabled={isSmallScreen}
        >
          ◀
        </button>
      )}
      {showRightArrow && (
        <button
          onClick={() => !isSmallScreen && scrollContainer("right")}
          aria-label="Scroll right"
          className={arrowButtonClasses("right")}
          disabled={isSmallScreen}
        >
          ▶
        </button>
      )}

      <div
        ref={containerRef}
        className="flex gap-x-8 overflow-x-auto no-scrollbar scroll-smooth touch-pan-x snap-x snap-mandatory"
      >
        {trendingProducts.map((product, index) => (
          <div
            key={product.id}
            ref={index === 0 ? cardRef : null}
            className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[450px] snap-start"
          >
            <ProductCard
              product={product}
              canHover={!isSmallScreen && visibleProductIds.has(product.id)}
              isSmallScreen={isSmallScreen}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

type ProductCardProps = {
  product: typeof trendingProducts[0];
  canHover: boolean;
  isSmallScreen: boolean;
};

function ProductCard({ product, canHover, isSmallScreen }: ProductCardProps) {
  const productImages = Object.entries(product.images).map(([id, src]) => ({
    id,
    src,
    alt: `${product.name} ${id} view`,
  }));

  const [mainImageId, setMainImageId] = useState(
    productImages.find((img) => img.id === "front")?.id ?? productImages[0].id
  );
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (canHover) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMainImageId(productImages.find((img) => img.id === "front")?.id ?? productImages[0].id);
  };

  return (
    <div
      className="w-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hovered && !isSmallScreen && (
        <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 border-t-[1px] border-l-[1px] border-r-[1px] border-black h-[450px]" />
          <div className="absolute top-[450px] left-0 right-0 border-l-[1px] border-r-[1px] border-b-[1px] border-black h-[160px]" />
        </div>
      )}

      <div className="relative w-full h-[400px] md:h-[450px] z-10">
        <Image
          src={product.images[mainImageId]}
          alt={`${product.name} main view`}
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      <div className="bg-white w-full px-4 pt-4 pb-6 z-10 relative" style={{ minHeight: "160px" }}>
        <p className="text-xl font-bold text-black">{product.name}</p>
        <p className="text-base text-gray-700">{product.category}</p>
        <p className="text-base font-bold text-gray-900 mt-1">MRP : {product.price}</p>
        <button className="mt-4 px-6 py-2 bg-white text-black font-bold text-sm border border-black hover:bg-black hover:text-white transition">
          Shop Now!
        </button>
      </div>

      {!isSmallScreen && hovered && (
        <div className="absolute top-[450px] right-0 flex z-20 overflow-hidden">
          {productImages.map(({ id, src, alt }) => (
            <div
              key={id}
              className="cursor-pointer"
              onMouseEnter={() => setMainImageId(id)}
            >
              <Image
                src={src}
                alt={alt}
                width={56}
                height={56}
                className="object-cover"
                quality={100}
                priority
              />
              {id === mainImageId && <span className="block h-1 bg-black w-full" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

"use client";

import { useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectAllBundlesFlat } from "@/store/selectors/productSelectors";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const products = useAppSelector(selectAllBundlesFlat);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.children[0] as HTMLElement;
    if (!card) return;

    const gap = 24; // gap-6
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-serif">Products</h2>

          <div className="flex gap-3">
            {/* LEFT */}
            <button
              onClick={() => scrollSlider("left")}
              className="w-16 h-16 bg-white shadow-md flex items-center justify-center active:scale-95"
            >
              ←
            </button>

            {/* RIGHT */}
            <button
              onClick={() => scrollSlider("right")}
              className="w-16 h-16 bg-white shadow-md flex items-center justify-center active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {products.map((product, index) => (
            <div key={index} className="snap-start shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

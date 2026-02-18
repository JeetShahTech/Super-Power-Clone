"use client";

import { useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import { selectAllTestimonials } from "@/store/selectors/testimonialSelectors";
import TestimonialCard from "./testimonialcard";

export default function TestimonialsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const testimonials = useAppSelector(selectAllTestimonials);

  const slide = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(
      ".testimonial-card",
    ) as HTMLElement;
    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!testimonials.length) return null;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-serif">What members say</h2>

          <div className="flex gap-3">
            <button
              onClick={() => slide("left")}
              className="w-12 h-12 rounded-xl border hover:bg-gray-100 active:scale-95"
            >
              ←
            </button>

            <button
              onClick={() => slide("right")}
              className="w-12 h-12 rounded-xl border hover:bg-gray-100 active:scale-95"
            >
              →
            </button>
          </div>
        </div>

        
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[85vw] sm:w-[65vw] lg:w-auto"
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

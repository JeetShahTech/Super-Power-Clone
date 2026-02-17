"use client";
import { useRef, useState, useEffect } from "react";

const DATA = [
  {
    title: "Prescriptions",
    desc: "Medication & peptides you can buy from us, at discounted prices.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68db0c05e445f893e1bec67e_Prescriptions.avif",
  },
  {
    title: "Supplements",
    desc: "Curated supplements and health products, cheaper than Amazon.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/691b435c24cfaf4a07d48f10_marketplace-orange-bg.avif",
  },
  {
    title: "Add-on Testing",
    desc: "Further advanced testing across gut health, cancer risk and toxins.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68db0c4476b037b40ee2e998_Img%20Frame.avif",
  },
  {
    title: "Unlimited Concierge",
    desc: "Use your 24/7 message access to ask questions, our care team answers within 24 hours.",
    img: "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/6909a982dbe21af11d0e9b06_Img%20Frame.avif",
  },
];

export default function GuideSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateButtons = () => {
    const el = sliderRef.current;
    if (!el) return;

    setCanLeft(el.scrollLeft > 5);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    updateButtons();
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.querySelector(".guide-card") as HTMLElement;
    if (!card) return;

    const amount = card.clientWidth + 16;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });

    setTimeout(updateButtons, 350);
  };

  return (
    <section className="w-full py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING + BUTTONS */}
        <div className="flex justify-between items-start mb-14">
          <div>
            <p className="text-zinc-500 mb-3">After your health plan</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-2xl">
              We guide you to what you need
            </h2>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3">
            <button
              aria-label="scroll left"
              disabled={!canLeft}
              onClick={() => scroll("left")}
              className="size-11 rounded-full border flex items-center justify-center disabled:opacity-30"
            >
              ‹
            </button>

            <button
              aria-label="scroll right"
              disabled={!canRight}
              onClick={() => scroll("right")}
              className="size-11 rounded-full border flex items-center justify-center disabled:opacity-30"
            >
              ›
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          onScroll={updateButtons}
          className="flex gap-4 overflow-x-hidden scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {DATA.map((item, i) => (
            <div
              key={i}
              className="guide-card snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] bg-white rounded-2xl"
            >
              <img
                src={item.img}
                className="w-full object-contain rounded-xl"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-start">
          <button
            className="cursor-pointer bg-orange-500 text-white px-8 py-4 rounded-full"
            aria-label="book blood test page"
          >
            Book my blood test →
          </button>
        </div>
      </div>
    </section>
  );
}

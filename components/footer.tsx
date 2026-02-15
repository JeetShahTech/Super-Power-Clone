"use client";
import { useState } from "react";

/* DATA */

const FOOTER_DATA = [
  {
    title: "Superpower",
    items: ["How it Works", "What’s Included", "Membership Login", "Gift Superpower"],
  },
  {
    title: "Company",
    items: ["Our Why", "Careers", "Contact Us", "FAQs"],
  },
  {
    title: "Compare",
    items: ["Function Health", "Mito Health", "InsideTracker", "Others"],
  },
  {
    title: "Library",
    items: ["Biomarker Testing", "Immune Biomarkers", "Energy Biomarkers", "Liver Health"],
  },
  {
    title: "Connect",
    items: ["Twitter", "Instagram", "LinkedIn"],
  },
];

/* COLUMN */

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b md:border-none py-4">

      {/* Heading */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full items-center"
      >
        <span className="text-zinc-500 text-sm font-medium">{title}</span>
        <span className="md:hidden text-lg">⌄</span>
      </button>

      {/* Content */}
      <div
        className={`
          grid transition-all duration-300
          ${open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}
          md:grid-rows-[1fr] md:mt-3
        `}
      >
        <div className="overflow-hidden flex flex-col gap-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="text-[15px] text-zinc-800 hover:text-[#fc5f2b] cursor-default"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Footer */

export default function Footer() {
  const maskUrl =
    "https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/65b8f55bef05d8426623a612_sp-logo-black.svg";

  return (
    <footer className="bg-white pt-28 pb-14 mt-40">

      {/* Masked Logo */}
      <div className="mb-20 px-6 max-w-[1100px] mx-auto">
        <div className="logo-mask relative">

          {/* height sizer */}
          <img src={maskUrl} alt="" className="w-full invisible" />

          {/* video fill */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="https://superpower-website.b-cdn.net/sp-logo-footer-bg.mp4" />
          </video>

        </div>
      </div>

      {/* Columns */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">
        {FOOTER_DATA.map((col, i) => (
          <FooterColumn key={i} title={col.title} items={col.items} />
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Superpower Health, Inc. All rights reserved</p>
        <div className="flex gap-6">
          <span className="hover:text-black cursor-default">Terms</span>
          <span className="hover:text-black cursor-default">Privacy policy</span>
        </div>
      </div>
    </footer>
  );
}

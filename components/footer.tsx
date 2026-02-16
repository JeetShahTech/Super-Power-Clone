"use client";
import { useState } from "react";

/* DATA */

const FOOTER_DATA = [
  {
    title: "Superpower",
    items: [
      "How it Works",
      "What’s Included",
      "Membership Login",
      "Gift Superpower",
    ],
  },
  {
    title: "Company",
    items: [
      "Our Why",
      "Join the team [We are hiring!]",
      "Superpower labs",
      "Contact Us",
      "FAQs",
    ],
  },
  {
    title: "Compare",
    items: ["Function Health", "Mito Health", "InsideTracker", "Others"],
  },
  {
    title: "Library",
    items: [
      "Complete guide to Biomarker Testing",
      "Immune System Biomarkers",
      "Energy Biomarkers",
      "Liver Health Biomarkers",
      "Body Composition Biomarkers",
      "DNA Biomarkers",
      "Thyroid Biomarkers",
      "Metabolic Biomarker Testing",
    ],
  },
  {
    title: "Partnerships",
    items: ["For Creators", "For Partners", "For Organizations"],
  },

  {
    title: "Connect",
    items: ["X/Twitter", "Instagram", "LinkedIn"],
  },
];

const mainColumns = FOOTER_DATA.slice(0, 4);
const lastColumn = FOOTER_DATA.slice(4); // Partnerships + Connect

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
          {items.map((item, i) => {
            const isHiring = item.includes("[We are hiring!]");
            const cleanText = item.replace(" [We are hiring!]", "");

            return (
              <div
                key={i}
                className="flex items-center gap-2 text-[15px] text-zinc-800 hover:text-[#fc5f2b] cursor-pointer"
              >
                {/* Chevron Icon */}
                <img
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/66668bc209003e2545cbca73_chevron-orange.svg"
                  alt=""
                  className="w-2.5 h-2.5 mt-[2px] shrink-0"
                />
                <span>
                  {cleanText}
                  {isHiring && (
                    <span className="text-[#fc5f2b] ml-2 text-[13px] font-medium">
                      [We are hiring!]
                    </span>
                  )}
                </span>
              </div>
            );
          })}
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
    <footer className="bg-gray-200 rounded-[70px] pt-28 pb-14 mt-16">
      {/* Masked Logo */}
      <div className="logo-mask">
        
        <img
          className="logo-sizer"
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/65b8f55bef05d8426623a612_sp-logo-black.svg"
          alt=""
          aria-hidden="true"
        />

        <video
          className="masked-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68dfd7d87857d2aa8e2cb7a2_sp-still-bg-mask.jpg"
        >
          <source
            src="https://superpower-website.b-cdn.net/sp-logo-footer-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* fallback */}
        <img
          className="logo-fallback"
          src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/65b8f55bef05d8426623a612_sp-logo-black.svg"
          alt="Superpower"
        />
      </div>

      {/* Columns */}
      <div className="w-full mx-auto px-6 grid md:grid-cols-5 gap-8">
        {/* First 4 columns */}
        {mainColumns.map((col, i) => (
          <FooterColumn key={i} title={col.title} items={col.items} />
        ))}

        {/* Last stacked column */}
        <div className="flex flex-col gap-2">
          {lastColumn.map((col, i) => (
            <FooterColumn key={i} title={col.title} items={col.items} />
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full mx-auto px-6 mt-20 pt-8 border-t text-sm text-zinc-500 flex flex-col md:flex-row justify-between gap-4">
        <p>
          © {new Date().getFullYear()} Superpower Health, Inc. All rights
          reserved
        </p>
        <div className="flex gap-6">
          <span className="hover:text-black cursor-default">Terms</span>
          <span className="hover:text-black cursor-default">
            Privacy policy
          </span>
        </div>
      </div>
    </footer>
  );
}

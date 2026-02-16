"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // if (!heroRef.current) return;

    ScrollTrigger.matchMedia({
      "(min-width:1024px)": () => {
        gsap.to("#herosec", {
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
          },
        });
      },

      "(max-width: 1023px)": () => {
        gsap.to("#herosec", {
          opacity: 0.35,
          scrollTrigger: {
            trigger: "#herosec",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <main
      ref={heroRef}
      className="relative flex items-center justify-center bg-neutral-100 z-2"
    >
      {/* hero content */}
      <div className="w-screen h-screen p-0 lg:p-2">
        {/* HERO CARD */}
        <div className="relative flex items-center justify-center shadow-lg lg:w-[100%] lg:h-[100%] w-screen h-screen rounded-none lg:rounded-2xl overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://superpower-website.b-cdn.net/superpower-100-year-potential-video-hero.mp4"
              type="video/mp4"
            />
          </video>

          
          <div className="absolute inset-0 bg-black/30"></div>

          {/* CONTENT WRAPPER */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <section
              id="herosec"
              className="w-full md:w-[70%] lg:w-[50%] flex flex-col items-center text-center"
            >
              <p className="text-5xl md:text-6xl text-white">
                Unlock your new <br />
                health intelligence
              </p>
              <div className="w-full md:w-[60%] mt-4">
                <p className="text-base md:text-xl text-white">
                  100+ biomarkers. Every year. Detect early signs of 1,000+
                  conditions. All for only $17/month
                </p>
              </div>
              <button className="cursor-pointer bg-orange-400 w-[40%] py-4 mt-8 rounded-xl hover:bg-orange-500 shadow-2xl transition-colors flex items-center justify-center gap-2">
                <span>Join Today</span>

                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
                className="mt-[2%]"
                alt="HSA FSA"
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

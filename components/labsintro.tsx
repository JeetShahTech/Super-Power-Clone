"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
function IntroSection() {
  const IntroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
     
      "(min-width: 768px)": () => {
        gsap.from(IntroRef.current, {
          opacity: 0,
          y: 60,
          scale: 0.97,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: IntroRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      },

     
      "(max-width: 767px)": () => {
       
      },
    });
  }, []);

  return (
    <div className="w-screen rounded-[70px] -mt-24 md:-mt-15 lg:mt-0 px-2 z-10 relative bg-[#f5f5f5]">
      {/* SECTION */}
      <section className="relative w-full pt-5 pb-32">
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-4 z-20 lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.8335 5L10.0002 9.16667L14.1668 5M5.8335 10.8333L10.0002 15L14.1668 10.8333"
            stroke="black"
            strokeWidth="1.45833"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <div className="px-4 pt-12 pb-16 md:px-8">
          <div className="max-w-6xl mx-auto">
            {/* TITLE ROW */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
                It starts with 100+ labs
              </h2>

              <p className="mt-6 text-lg md:text-xl text-neutral-900">
                From heart health to hormone balance our comprehensive test
                panels detect early signs of over 1,000 conditions
              </p>

              {/* CTA */}
              <a
                href="https://www.superpower.com/biomarkers"
                className="mt-8 inline-flex items-center gap-2 font-medium text-black hover:opacity-70 transition group"
              >
                <span>Explore all biomarkers</span>

                {/* SVG ICON */}
                <span className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M7 7H17M17 7V17M17 7L7 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex w-full flex-shrink items-stretch gap-6 relative">
          {/* LEFT IMAGE */}
          <div className="w-[20%] min-w-0 relative">
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a9565b28afd609739daa_Superpower%20Score.avif"
              className="w-full h-full object-cover rounded-2xl"
              alt="left visual"
            />
          </div>

          {/* CENTER VIDEO */}
          <div className="w-[60%] relative">
            <div className="w-full rounded-3xl overflow-hidden relative border-10 border-black">
              {/* VIDEO */}
              <video autoPlay muted loop playsInline>
                <source
                  src="https://superpower-website.b-cdn.net/sp-labs-dashboard-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* TUBE */}
            <div className="absolute -bottom-12 -right-6 z-20">
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a98ca28b2a7760e72cd0_Group%201321315829.avif"
                className="w-14"
                alt="tube"
              />
            </div>
          </div>

         
          <div className="w-[20%] min-w-0 relative">
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a7a91e594b8d4029a38fb8_Group%201410124615.avif"
              className="w-full h-full object-cover rounded-2xl"
              alt="right visual"
            />
          </div>
        </div>

        {/*MOBILE*/}
        <div className="md:hidden w-full relative mt-12">
          {/* CLIPPING WRAPPER */}
          <div className="relative w-full h-[520px] overflow-hidden">
            {/* TRACK */}
            <div className="flex justify-center gap-2 h-full">
              {/* LEFT CARD */}
              <div className="w-[70%] flex-shrink-0 h-full">
                <div className="h-full rounded-2xl shadow-xl bg-white">
                  <img
                    src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a8fbd1251843351bf65078_Frame.avif"
                    className="w-full h-full object-contain rounded-xl"
                    alt="leftmobile"
                  />
                </div>
              </div>

              {/* CENTER MAIN CARD */}
              <div className="w-[60%] flex-shrink-0 h-full">
                <div className="h-full rounded-3xl shadow-xl bg-white">
                  <img
                    src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a8fbb1ba9665c2cd71afd8_Group%201321315830.avif"
                    className="w-full h-full object-contain rounded-2xl"
                    alt="mainmobile"
                  />
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="w-[70%] flex-shrink-0 h-full">
                <div className="h-full rounded-2xl shadow-xl bg-white">
                  <img
                    src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68a8fbc6e6414b46e4e861fd_MobileModal.avif"
                    className="w-full h-full object-contain justify-start rounded-xl"
                    alt="leftmobile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default IntroSection;

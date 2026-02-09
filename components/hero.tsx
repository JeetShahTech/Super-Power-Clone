import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
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
            markers: true,
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
            markers: true,
          },
        });
      },
    });
  });

  return (
    <main
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-neutral-100"
    >
      {/* hero content */}
      <div className="w-full lg:p-2 xl:p-3 2xl:p-4 p-0">
        {/* HERO CARD */}
        <div
          className="min-h-screen bg-blue-500 flex items-center justify-center shadow-lg rounded-none lg:rounded-2xl">
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
            <button className="bg-orange-200 w-full md:w-[40%] py-4 mt-8 rounded-xl hover:bg-orange-300 transition-colors">
              Join Today
            </button>
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/689c37321e74752df5514537_hsa-fsa.svg"
              className="mt-[2%]"
              alt="HSA FSA"
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default Hero;

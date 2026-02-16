import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.matchMedia().add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
        },
      });

      // LINE + COL2
      tl.to(".progress-line", {
        scaleX: 0.6,
        ease: "none",
      });

      tl.from(
        "#col-2 img",
        {
          opacity: 0,
          y: -80,
          filter: "blur(6px)",
        },
        "<",
      )

        .to("#col-2 img", { filter: "blur(0px)" }, "<")

        .from(
          "#col-2 .hiw-number",
          {
            scale: 0,
            opacity: 0,
            ease: "back.out(2)",
          },
          "<",
        )

        .from(
          "#col-2 .hiw-text",
          {
            opacity: 0,
            y: 60,
          },
          "<",
        );

      // LINE + COL3
      tl.to(".progress-line", {
        scaleX: 1,
        ease: "none",
      });

      tl.from(
        "#col-3 img",
        {
          opacity: 0,
          y: -80,
          filter: "blur(6px)",
        },
        "<",
      )

        .to("#col-3 img", { filter: "blur(0px)" }, "<")

        .from(
          "#col-3 .hiw-number",
          {
            scale: 0,
            opacity: 0,
            ease: "back.out(2)",
          },
          "<",
        )

        .from(
          "#col-3 .hiw-text",
          {
            opacity: 0,
            y: 60,
          },
          "<",
        );
    });

    gsap.matchMedia().add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".progress-line-mobile",
        { scaleY: 0, transformOrigin: "center" },

        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            scrub: true,
          },
        },
      );
    });
  });

  return (
    <section
      ref={sectionRef}
      className="bg-blue-50 py-5 relative overflow-hidden"
    >
      {/* TITLE */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h1 className="text-3xl md:text-5xl font-serif">How it Works</h1>
      </div>

      <div className="absolute left-0 right-0 top-[436px] w-full z-0">
        <div className="progress-line h-[2px] bg-orange-400 origin-left scale-x-0" />
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* COLUMN 1 */}
          <div id="col-1" className="relative z-10">
            {/* IMAGE */}
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed15e90d22210f8cc53_Img%20Frame.avif"
              className="w-full h-[240px] object-cover rounded-xl mb-10"
            />

            {/* NUMBER */}
            <div className="hiw-number w-12 h-12 bg-orange-400 flex items-center justify-center font-bold mb-8">
              1
            </div>

            {/* TEXT */}
            <div className="hiw-text">
              <h3 className="text-xl font-semibold mb-3">
                Test your whole body
              </h3>
              <p className="text-gray-600">
                Get a comprehensive blood draw at one of our 2,000+ partner
                labs.
              </p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div id="col-2" className="relative z-10">
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed15e90d22210f8cc56_Img%20Frame-1.avif"
              className="w-full h-[240px] object-cover rounded-xl mb-10"
            />

            <div className="hiw-number w-12 h-12 bg-orange-400 flex items-center justify-center font-bold mb-8">
              2
            </div>

            <div className="hiw-text">
              <h3 className="text-xl font-semibold mb-3">An actionable plan</h3>
              <p className="text-gray-600">
                Easy to understand results and clear health plan.
              </p>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div id="col-3" className="relative z-10">
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed1b9ed1cceda29fecc_Img%20Frame-2.avif"
              className="w-full h-[240px] object-cover rounded-xl mb-10"
            />

            <div className="hiw-number w-12 h-12 bg-orange-400 flex items-center justify-center font-bold mb-8">
              3
            </div>

            <div className="hiw-text">
              <h3 className="text-xl font-semibold mb-3">
                A connected ecosystem
              </h3>
              <p className="text-gray-600">
                Book diagnostics and buy curated supplements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="relative max-w-5xl mx-auto px-4 md:hidden">
        <div className="progress-line-mobile absolute left-8 top-0 bottom-0 w-[2px] bg-orange-400 origin-top scale-y-0" />
        <div className="space-y-20">
          {/* ITEM 1 */}
          <div className="grid grid-cols-[28px_1fr] gap-3 relative">
            <div className="relative">
              <div className="absolute left-4 -translate-x-1/2 w-8 h-8 bg-orange-400 text-white flex items-start justify-center font-bold text-sm">
                1
              </div>
            </div>

            <div>
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed15e90d22210f8cc53_Img%20Frame.avif"
                className="w-full h-auto max-w-none h-[200px] object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                Test your whole body
              </h3>

              <p className="text-gray-600">
                Get a comprehensive blood draw at partner labs.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="grid grid-cols-[28px_1fr] gap-3 relative">
            <div className="relative">
              <div className="absolute left-4 -translate-x-1/2 w-8 h-8 bg-orange-400 text-white flex items-start justify-center font-bold text-sm">
                2
              </div>
            </div>

            <div>
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed15e90d22210f8cc56_Img%20Frame-1.avif"
                className="w-full h-auto max-w-none h-[200px] object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">An actionable plan</h3>

              <p className="text-gray-600">
                Easy to understand results and clear health plan.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="grid grid-cols-[28px_1fr] gap-3 relative">
            <div className="relative">
              <div className="absolute left-4 -translate-x-1/2 w-8 h-8 bg-orange-400 text-white flex items-start justify-center font-bold text-sm">
                3
              </div>
            </div>

            <div>
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68bf3ed1b9ed1cceda29fecc_Img%20Frame-2.avif"
                className="w-full h-auto max-w-none h-[200px] object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">
                A connected ecosystem
              </h3>

              <p className="text-gray-600">
                Book diagnostics and buy curated supplements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

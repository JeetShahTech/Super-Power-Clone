"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function StepsProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const steps = gsap.utils.toArray<HTMLElement>(".hiw-step");

      
      gsap.set(steps, {
        position: "absolute",
        inset: 0,
      });

     
      gsap.set(steps[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=400%",
          pin: true,
          scrub: true,
        },
      });

      
      tl.fromTo(
        steps[1],
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, duration: 1 },
      ).to(steps[0], { opacity: 0, y: 0, scale: 0.8, duration: 1 }, "<-=0.4");

      
      tl.fromTo(
        steps[2],
        { opacity: 0, y: 400 },
        { opacity: 1, y: 0, duration: 1 },
      ).to(steps[1], { opacity: 0, y: 0, scale: 0.8, duration: 1 }, "<-=0.4");

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    mm.add("(max-width: 1023px)", () => {
      const steps = gsap.utils.toArray<HTMLElement>(".hiw-step");

      gsap.set(steps, {
        clearProps: "all",
        position: "relative",
        opacity: 1,
        y: 0,
        scale: 1,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-white lg:h-screen overflow-hidden lg:overflow-hidden"
    >
      
      <section className="hiw-step lg:absolute lg:inset-0 flex items-center py-24 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          
          <div className="w-full">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68f1118730505995cc94b69e_Frame%201597885600%20(1).avif"
                alt="Lab test"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex flex-col items-start lg:items-center relative w-full lg:w-auto">
            <span className="mt-2 lg:mt-4 px-3 py-1 bg-orange-600 text-white text-sm rounded whitespace-nowrap">
              Today
            </span>
          </div>

          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Book your lab test
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Schedule your annual blood draw through the app. Take it in the
              comfort of your home or at one of 3,000 Quest Diagnostics lab
              locations.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                100+ biomarkers in 1 blood draw
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                Test completed in 15 min
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                HSA/FSA eligible
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section className="hiw-step lg:absolute lg:inset-0 flex items-center py-24 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          
          <div className="w-full">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68df1a0132ce434cf3c4c4a4_Frame%201597885626.avif"
                alt="Results"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex flex-col items-start lg:items-center relative w-full lg:w-auto">
            <span className="mt-2 lg:mt-4 px-3 py-1 bg-orange-600 text-white text-sm rounded whitespace-nowrap">
              Day 5
            </span>
          </div>

          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Understand your results
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Your results in a clear, easy-to-read dashboard with each
              biomarker explained. Easily track your health across tests, to see
              the impact of your choices.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                No medical jargon or PDFs
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                Understand your results
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                Upload past medical records
              </li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="hiw-step lg:absolute lg:inset-0 flex items-center py-24 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          
          <div className="w-full">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gray-200">
              <img
                src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68df1a2cc8140ea958b0a37c_Frame%201597885625.avif"
                alt="Take action"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="flex flex-col items-start lg:items-center relative w-full lg:w-auto">
            <span className="mt-2 lg:mt-4 px-3 py-1 bg-orange-600 text-white text-sm rounded whitespace-nowrap">
              Day 10
            </span>
          </div>

          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Take Action
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Your personalized health plan gives you step-by-step how to
              improve your health, through changes in your diet, fitness and
              lifestyle.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                Custom supplement plan
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                Actionable recommendations
              </li>
              <li className="flex items-center gap-3 text-lg">
                <span className="text-orange-500">✓</span>
                Clear next steps
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

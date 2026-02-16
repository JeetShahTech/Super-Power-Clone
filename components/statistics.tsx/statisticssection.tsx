"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Statistics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // number refs
  const num70 = useRef<HTMLSpanElement>(null);
  const num63 = useRef<HTMLSpanElement>(null);
  const num44 = useRef<HTMLSpanElement>(null);

  // bars
  const bar63 = useRef<HTMLDivElement>(null);
  const bar44 = useRef<HTMLDivElement>(null);

  // markers
  const mark63 = useRef<HTMLDivElement>(null);
  const mark44 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // helper
      const animateStat = (
        target: number,
        numberRef: React.RefObject<HTMLSpanElement | null>,
        barRef?: React.RefObject<HTMLDivElement | null>,
        markRef?: React.RefObject<HTMLDivElement | null>,
      ) => {
        const obj = { val: 0 };

        tl.to(
          obj,
          {
            val: target,
            duration: 1.4,
            ease: "power2.out",
            onUpdate: () => {
              const v = Math.round(obj.val);

              if (numberRef.current !== null)
                numberRef.current.textContent = v.toString();

              if (barRef?.current !== null && barRef?.current !== undefined) gsap.set(barRef.current, { width: v + "%" });

              if (markRef?.current !== null && markRef?.current !== undefined)
                gsap.set(markRef.current, { left: v + "%" });
            },
          },
          0,
        );
      };

      animateStat(70, num70);
      animateStat(63, num63, bar63, mark63);
      animateStat(44, num44, bar44, mark44);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f4f4f5] py-16 md:py-24 flex justify-center"
    >
      <div className="max-w-7xl w-full px-6">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            <span className="text-zinc-400">Members see results</span>
            <br /> in just 6 months
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-4">
          {/* BIG LEFT CARD */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between min-h-[380px]">
            <div className="text-[4.2rem] font-semibold leading-none">
              <span ref={num70}>0</span>%
            </div>

            <p className="text-lg text-zinc-500">slow their speed of ageing</p>

            <Image
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68df249ea8fe836663ddfddf_Bio-age%20graph.avif"
              alt=""
              width={600}
              height={400}
              className="w-full object-contain"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {/* Diabetes */}
            <div className="bg-white rounded-2xl p-8">
              <div className="text-[3.4rem] font-semibold">
                <span ref={num63}>0</span>%
              </div>

              <p className="text-zinc-500 mb-6">
                find early risk factors for diabetes
              </p>

              {/* bar */}
              <div className="relative h-2 bg-zinc-200 rounded-full">
                <div
                  ref={bar63}
                  className="absolute left-0 top-0 h-full bg-pink-400 rounded-full"
                  style={{ width: "0%" }}
                />
                <div
                  ref={mark63}
                  className="absolute -top-2 -translate-x-1/2"
                  style={{ left: "0%" }}
                >
                  ▲
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68def0679cbb818651dd2a13_Frame%201597885470.avif"
                  width={28}
                  height={28}
                  alt=""
                />
                <span>Diabetes Risk</span>
              </div>
            </div>

            {/* Heart */}
            <div className="bg-white rounded-2xl p-8">
              <div className="text-[3.4rem] font-semibold">
                <span ref={num44}>0</span>%
              </div>

              <p className="text-zinc-500 mb-6">
                find elevated heart disease risk
              </p>

              {/* bar */}
              <div className="relative h-2 bg-zinc-200 rounded-full">
                <div
                  ref={bar44}
                  className="absolute left-0 top-0 h-full bg-pink-400 rounded-full"
                  style={{ width: "0%" }}
                />
                <div
                  ref={mark44}
                  className="absolute -top-2 -translate-x-1/2"
                  style={{ left: "0%" }}
                >
                  ▲
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <Image
                  src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68def8182c785a6de4f745c9_Frame%201597885470%20(1).avif"
                  width={28}
                  height={28}
                  alt=""
                />
                <span>Heart Disease Risk</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-zinc-500 mt-6">
          * Study conducted over 3,000 Superpower members, aggregated population
          health data over one year
        </p>
      </div>
    </section>
  );
}

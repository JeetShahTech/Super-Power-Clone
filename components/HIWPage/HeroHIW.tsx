"use client";

function Dot({ text, className }: { text: string; className: string }) {
  return (
    <div className={`absolute flex items-center gap-3 ${className}`}>
      {/* DOT */}
      <div className="relative flex items-center justify-center">
        {/* outer ring */}
        <span className="absolute w-3 h-3 border border-white/40"></span>

        {/* main dot */}
        <span className="w-1 h-1 bg-white"></span>
      </div>

      {/* TEXT */}
      <span className="text-white text-sm font-medium tracking-tight">
        {text}
      </span>
    </div>
  );
}

export default function HeroHIW() {
  return (
    <section className="w-full flex justify-center lg:p-2">
      {/* HERO CARD */}
      <div className="relative w-full min-h-[620px] lg:h-[560px] lg:min-h-0 overflow-hidden flex flex-col lg:flex-row justify-start lg:items-center bg-[radial-gradient(circle_at_60%,#7a725f,#464133)]">
        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full lg:w-1/2 px-6 pt-16 pb-6 lg:pl-20 lg:pr-6 lg:py-0 text-left">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
            How it works
          </h1>

          <p className="text-white/80 text-base sm:text-lg mt-5 max-w-[420px]">
            Book your labs in 15 min, and test 100+ labs in 1 blood draw. Get
            your results within a week.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full flex justify-center lg:absolute lg:inset-0 pointer-events-none">
          <img
            src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68dc40167f31dd1a1cdae60f_sp-hiw-hero.avif"
            alt="How it works"
            className="relative mt-4 w-[85%] sm:w-[70%] md:w-[55%] lg:absolute lg:bottom-0 lg:right-[12%] lg:h-[82%] lg:w-auto object-contain object-bottom select-none"
          />

          {/* FLOATING DOTS */}
          <Dot
            text="Reduce fatigue"
            className=" absolute top-[38%] left-[58%] sm:top-[40%] sm:left-[60%] lg:top-[29%] lg:left-[78%]"
          />

          <Dot
            text="Balance hormones"
            className=" absolute bottom-[28%] left-[18%] sm:bottom-[30%] sm:left-[22%] lg:bottom-[18%] lg:right-[10%] lg:left-auto"
          />

          <Dot
            text="Slow Ageing"
            className="absolute bottom-[18%] right-[18%] sm:bottom-[20%] sm:right-[22%] lg:bottom-[30%] lg:left-[66%] lg:right-auto"
          />
        </div>
      </div>
    </section>
  );
}

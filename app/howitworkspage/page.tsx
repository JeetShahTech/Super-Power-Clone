export default function HowItWorksPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* HERO */}
      <section className="w-full flex justify-center mt-6">
        {/* HERO CARD */}
        <div
          className="
        relative w-[96%] max-w-[1500px]
        h-[420px] md:h-[460px] lg:h-[520px]
        rounded-[16px] overflow-hidden
        flex items-center
        bg-[radial-gradient(circle_at_60%,#7a725f,#464133)]
      "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10 w-full lg:w-1/2 pl-8 md:pl-14 lg:pl-20 pr-6">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05]">
              How it works
            </h1>

            <p className="text-white/80 text-lg mt-6 max-w-md">
              Book your labs in 15 min, and test 100+ labs in 1 blood draw. Get
              your results within a week.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://cdn.prod.website-files.com/63792ff4f3d6aa3d62071b61/68dc40167f31dd1a1cdae60f_sp-hiw-hero.avif"
              alt="How it works"
              className="
  absolute bottom-0 right-[12%]
  h-[75%] md:h-[80%] lg:h-[86%]
  w-auto max-w-none
  object-contain object-bottom
  select-none
"
            />

            {/* FLOATING DOTS */}
            <Dot text="Reduce fatigue" className="top-[29%] left-[78%]" />
            <Dot text="Balance hormones" className="bottom-[18%] right-[10%]" />
            <Dot text="Slow Ageing" className="bottom-[30%] left-[66%]" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Dot({ text, className }: { text: string; className: string }) {
  return (
    <div className={`absolute flex items-center gap-3 ${className}`}>
      <span className="relative flex size-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-orange-500"></span>
      </span>

      <span className="bg-white/90 text-black backdrop-blur px-3 py-1.5 rounded-full text-sm shadow">
        {text}
      </span>
    </div>
  );
}

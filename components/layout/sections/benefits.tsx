interface ProcessRow {
  num: string;
  name: React.ReactNode;
  desc: string;
}

const PROCESS: ProcessRow[] = [
  {
    num: "01",
    name: (
      <>
        We <span className="italic">listen</span>
      </>
    ),
    desc: "A free intro call. You walk us through your business, your bottlenecks, and the version of this that would actually feel like a relief. We mostly just ask questions.",
  },
  {
    num: "02",
    name: (
      <>
        We <span className="italic">sketch</span>
      </>
    ),
    desc: "After we understand the shape of the work, you get a one-page scope: what we'll build, what we won't, the price, and what \"done\" looks like. If it doesn't feel right, we redraft. No commitment yet.",
  },
  {
    num: "03",
    name: (
      <>
        We <span className="italic">build</span>
      </>
    ),
    desc: "We work in tight loops with real previews you can click through — not slideware behind a curtain. You comment, we adjust. No agency theatre.",
  },
  {
    num: "04",
    name: (
      <>
        We <span className="italic">tend</span>
      </>
    ),
    desc: "After launch, we stay close for fixes, training, and polish on us. Then an optional care plan if you want us around while you run the business. No lock-ins.",
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="process"
      className="max-w-[1320px] mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-serif italic text-sprout text-lg">iii.</span>
        <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
          How it works
        </span>
        <span className="flex-1 h-px bg-ink/15" />
      </div>

      <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] max-w-[980px]">
        Four steps. <span className="italic text-sprout">No surprises.</span>
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-ink/75 max-w-[620px] mt-7">
        From first conversation to launch, here&apos;s exactly what working
        with us looks like.
      </p>

      <ol className="mt-16 md:mt-20 border-t border-ink/15">
        {PROCESS.map((p) => (
          <li
            key={p.num}
            className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_260px_1fr] gap-x-6 md:gap-x-10 gap-y-3 items-start py-8 md:py-10 border-b border-ink/15 transition-all duration-300 hover:pl-3"
          >
            <div className="font-serif italic text-[44px] md:text-[56px] text-sprout leading-none">
              {p.num}
            </div>
            <div className="font-serif text-[28px] md:text-[36px] text-moss-2 leading-none tracking-[-0.02em]">
              {p.name}
            </div>
            <p className="text-base leading-relaxed text-ink/80 col-span-2 md:col-span-1">
              {p.desc}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

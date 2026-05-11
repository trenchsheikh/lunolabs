import Image from "next/image";

interface Fact {
  k: string;
  v: React.ReactNode;
}

const FACTS: Fact[] = [
  {
    k: "Background",
    v: (
      <>
        Ex-IBM · Google HQ{" "}
        <span className="italic text-sprout">AI educator</span>
      </>
    ),
  },
  {
    k: "Track record",
    v: (
      <>
        3 token launches, <span className="italic text-sprout">$5M+</span>{" "}
        shipped
      </>
    ),
  },
  {
    k: "Accolades",
    v: (
      <>
        8× <span className="italic text-sprout">hackathon champion</span>
      </>
    ),
  },
  {
    k: "Studio",
    v: (
      <>
        Luno Labs, <span className="italic text-sprout">since 2022</span>
      </>
    ),
  },
];

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="max-w-[1320px] mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-serif italic text-sprout text-lg">vi.</span>
        <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
          Who you&apos;ll work with
        </span>
        <span className="flex-1 h-px bg-ink/15" />
      </div>

      <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] max-w-[980px]">
        A small studio.{" "}
        <span className="italic text-sprout">A short list of names.</span>
      </h2>

      <div className="grid md:grid-cols-[420px_1fr] lg:grid-cols-[480px_1fr] gap-12 md:gap-20 mt-16 md:mt-20 items-start">
        <div>
          <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden bg-moss-2">
            <Image
              src="/sami.jpg"
              alt="Sami Tahir, Founder of Luno Labs"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
              sizes="(min-width: 1024px) 480px, (min-width: 768px) 420px, 100vw"
            />
          </div>
          <div className="font-serif italic text-sm text-moss/60 mt-3 text-right">
            Sami, in his natural habitat — fixing something.
          </div>
        </div>

        <div>
          <h3 className="font-serif text-[44px] md:text-[56px] text-moss-2 leading-none tracking-[-0.02em] mb-2">
            Sami Tahir
          </h3>
          <div className="font-serif italic text-xl text-sprout mb-7">
            Founder &amp; head builder
          </div>
          <p className="text-[17px] leading-relaxed text-ink/85 max-w-[580px] mb-4">
            Sami started Luno Labs in 2022 because too many small businesses
            were being sold software they didn&apos;t need by people who
            wouldn&apos;t return their calls. He&apos;s an ex-IBM engineer, led
            an AI education initiative at Google HQ, and has shipped agentic
            systems, token launches and production platforms with combined
            value well past $5M.
          </p>
          <p className="text-[17px] leading-relaxed text-ink/85 max-w-[580px]">
            But mostly he just likes building <em>useful</em> things for people
            who actually use them.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-9">
            {FACTS.map((f) => (
              <div key={f.k} className="border-t border-ink/15 pt-4">
                <dt className="text-[11px] tracking-[0.2em] uppercase text-moss/60 mb-1.5">
                  {f.k}
                </dt>
                <dd className="font-serif text-[20px] md:text-[22px] text-moss-2 leading-tight">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

interface Quote {
  text: React.ReactNode;
  initial: string;
  name: string;
  role: string;
}

const QUOTES: Quote[] = [
  {
    text: (
      <>
        The team listened more than they talked, which was already unusual.
        Then they{" "}
        <span className="italic text-sprout">delivered working software</span>{" "}
        while we were still comparing polite proposals from other shops.
      </>
    ),
    initial: "M",
    name: "Maya Okafor",
    role: "Founder, Cedar & Bloom Salon",
  },
  {
    text: (
      <>
        I didn&apos;t have a website. I didn&apos;t really know what I needed.
        Sami&apos;s team made the whole thing feel{" "}
        <span className="italic text-sprout">embarrassingly easy.</span>
      </>
    ),
    initial: "D",
    name: "Diego Marín",
    role: "Owner, Marín & Sons Carpentry",
  },
  {
    text: (
      <>
        We replaced three tools and a spreadsheet with one quiet dashboard. The
        team gets back{" "}
        <span className="italic text-sprout">real capacity</span>, fewer
        copy paste loops and fewer panic fixes.
      </>
    ),
    initial: "A",
    name: "Anya Patel",
    role: "Practice Manager, North Clinic",
  },
  {
    text: (
      <>
        They felt more like a thoughtful neighbor than an agency.{" "}
        <span className="italic text-sprout">No nonsense, no jargon,</span> and
        the work was beautiful.
      </>
    ),
    initial: "J",
    name: "Jordan Lee",
    role: "Director, Lee Pilates Studio",
  },
];

export const TestimonialSection = () => {
  return (
    <div className="bg-cream-2 py-24 md:py-36">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-serif italic text-sprout text-lg">v.</span>
          <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
            Kind words
          </span>
          <span className="flex-1 h-px bg-ink/15" />
        </div>

        <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] max-w-[980px]">
          What people <span className="italic text-sprout">say after</span> we
          ship.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-16 md:mt-20">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="relative bg-cream rounded-sm p-10 md:p-12"
            >
              <span className="font-serif italic text-sprout/40 text-[80px] leading-none absolute top-6 left-8">
                &ldquo;
              </span>
              <blockquote className="font-serif text-[20px] md:text-[22px] leading-snug text-moss-2 mt-14 mb-8">
                {q.text}
              </blockquote>
              <figcaption className="flex items-center gap-4 pt-6 border-t border-ink/10">
                <div className="w-12 h-12 rounded-full bg-moss-2 text-cream flex items-center justify-center font-serif italic text-xl">
                  {q.initial}
                </div>
                <div>
                  <div className="font-semibold text-moss-2 text-base">
                    {q.name}
                  </div>
                  <div className="text-[13px] text-ink/60">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

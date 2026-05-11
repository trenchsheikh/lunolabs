import Link from "next/link";

interface WorkItem {
  title: string;
  desc: string;
  tag: string;
  year?: string;
  mark: string;
  markItalic?: boolean;
  span: "feature" | "half" | "third";
  bg: "moss" | "sprout" | "warm";
  href?: string;
}

const WORK: WorkItem[] = [
  {
    title: "LobSmash — an AI padel coach in your pocket",
    desc: "High-conversion landing page plus a mobile app in active development. Computer vision deconstructs player motion and feeds back pro-level tactical analysis through a proprietary neural engine.",
    tag: "AI · Mobile · Computer Vision",
    year: "2025",
    mark: "LobSmash",
    markItalic: true,
    span: "feature",
    bg: "moss",
    href: "https://www.lobsmash.com",
  },
  {
    title: "Kurek Hersi",
    desc: "A premium, kinetic site for a performance coach who works with world leaders and elite athletes. Built to match the brand.",
    tag: "Brand site",
    year: "2024",
    mark: "Kurek",
    span: "half",
    bg: "sprout",
    href: "https://www.kurekhersi.com",
  },
  {
    title: "Omar Technical School",
    desc: "A complete digital home for elite youth football training — landing page, member portal, and a backend that keeps player data clean as the academy grows.",
    tag: "Education · Portal",
    year: "2024",
    mark: "OTS",
    markItalic: true,
    span: "half",
    bg: "warm",
    href: "https://www.omartechnicalschool.com",
  },
  {
    title: "Valuto",
    desc: "Financial literacy for ages 11–18. Learning flows, scoring, dashboards for teachers.",
    tag: "Edtech",
    mark: "Valuto",
    markItalic: true,
    span: "third",
    bg: "moss",
  },
  {
    title: "HyperTruth",
    desc: "An agentic system that finds the closest, most defensible answer across sources. Tuned for due diligence.",
    tag: "AI Agent",
    mark: "HT",
    span: "third",
    bg: "sprout",
    href: "https://www.hypertruth.app/",
  },
  {
    title: "[Redacted]",
    desc: "Signed an NDA — if we speak, we're in trouble. Shipped on time, client happy. That's all we can legally say.",
    tag: "Under wraps",
    mark: "NDA",
    markItalic: true,
    span: "third",
    bg: "warm",
  },
];

const spanClass = {
  feature: "md:col-span-12",
  half: "md:col-span-6",
  third: "md:col-span-4",
};

const aspectClass = {
  feature: "aspect-[21/9]",
  half: "aspect-[16/10]",
  third: "aspect-[4/5]",
};

const bgClass = {
  moss: "bg-moss-2 text-cream",
  sprout: "bg-sprout text-cream",
  warm: "bg-warm text-moss-2",
};

export const ServicesSection = () => {
  return (
    <section
      id="work"
      className="max-w-[1320px] mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-serif italic text-sprout text-lg">iv.</span>
        <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
          Selected work
        </span>
        <span className="flex-1 h-px bg-ink/15" />
      </div>

      <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] max-w-[980px]">
        A few <span className="italic text-sprout">things</span> we&apos;ve shipped.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16 md:mt-20">
        {WORK.map((w) => {
          const card = (
            <div
              key={w.title}
              className={`${spanClass[w.span]} group transition-transform duration-300`}
            >
              <div
                className={`relative overflow-hidden rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02] ${aspectClass[w.span]} ${bgClass[w.bg]}`}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(255,255,255,0.04) 12px, rgba(255,255,255,0.04) 13px)",
                  }}
                />
                <span
                  className={`font-serif text-5xl md:text-6xl opacity-40 tracking-[-0.02em] ${
                    w.markItalic ? "italic" : ""
                  }`}
                >
                  {w.mark}
                </span>
              </div>
              <div className="flex items-center gap-3.5 mb-3">
                <span className="font-serif italic text-[13px] text-sprout">
                  {w.tag}
                </span>
                <span className="flex-1 h-px bg-ink/15" />
                {w.year && (
                  <span className="text-[12px] tracking-[0.1em] text-moss/60">
                    {w.year}
                  </span>
                )}
              </div>
              <h3
                className={`font-serif text-moss-2 mb-2 tracking-[-0.02em] ${
                  w.span === "feature" ? "text-3xl md:text-[44px]" : "text-2xl md:text-[28px]"
                }`}
              >
                {w.title}
              </h3>
              <p className="text-[15px] text-ink/70 leading-relaxed max-w-[520px]">
                {w.desc}
              </p>
            </div>
          );
          return w.href ? (
            <Link
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${spanClass[w.span]} block`}
            >
              {card}
            </Link>
          ) : (
            card
          );
        })}
      </div>
    </section>
  );
};

interface BuildCardProps {
  num: string;
  title: React.ReactNode;
  description: string;
  tags: string[];
}

const BUILDS: BuildCardProps[] = [
  {
    num: "01.",
    title: (
      <>
        Booking <span className="italic text-sprout">systems</span>
      </>
    ),
    description:
      "The waiting list, the no-shows, the WhatsApp messages at odd hours — gone. We build calendar systems that fit how you actually work, with deposits, reminders, and a dashboard your front-desk can actually use.",
    tags: ["salons", "clinics", "studios", "trades"],
  },
  {
    num: "02.",
    title: (
      <>
        Websites that <span className="italic text-sprout">earn their keep</span>
      </>
    ),
    description:
      "A real website — clear, beautiful, and pointed straight at the thing you want people to do. Whether that's a booking, a quote, or a phone call. We measure what works and rebuild what doesn't.",
    tags: ["landing", "e-commerce", "portfolios", "menus"],
  },
  {
    num: "03.",
    title: (
      <>
        AI <span className="italic text-sprout">automations</span>
      </>
    ),
    description:
      "Quiet little workers that handle the inbox, draft the reply, follow up with the lead, and surface only what you actually need to see. Tuned to your tone of voice, not a generic chatbot.",
    tags: ["inbox", "follow-up", "scheduling", "research"],
  },
  {
    num: "04.",
    title: (
      <>
        Custom <span className="italic text-sprout">tools</span>
      </>
    ),
    description:
      "The internal dashboard you've been describing to ChatGPT. The membership portal. The intake form that finally syncs with your CRM. If it doesn't exist yet, we'll build it small and useful first.",
    tags: ["dashboards", "portals", "intake", "integrations"],
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="build"
      className="max-w-[1320px] mx-auto px-6 md:px-12 py-24 md:py-36 relative"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-serif italic text-sprout text-lg">i.</span>
        <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
          What we build
        </span>
        <span className="flex-1 h-px bg-ink/15" />
      </div>

      <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] max-w-[980px]">
        Soft tools for <span className="italic text-sprout">real businesses.</span>{" "}
        Not the other way around.
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-ink/75 max-w-[620px] mt-7">
        Three core practices, all under one roof. We start with whichever one
        your business needs right now, and grow from there.
      </p>

      <div className="grid sm:grid-cols-2 gap-0 mt-16 md:mt-20 border-t border-ink/15">
        {BUILDS.map((b, i) => (
          <article
            key={b.num}
            className={`group relative px-6 py-12 md:px-12 md:py-14 border-b border-ink/15 cursor-default transition-colors hover:bg-sprout/[0.06] ${
              i % 2 === 0 ? "sm:border-r sm:border-ink/15" : ""
            }`}
          >
            <span className="absolute top-12 right-6 md:top-14 md:right-12 font-serif italic text-sprout text-lg">
              {b.num}
            </span>
            <h3 className="font-serif text-moss-2 text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] mb-5 max-w-[480px]">
              {b.title}
            </h3>
            <p className="text-base md:text-[17px] leading-relaxed text-ink/80 max-w-[480px] mb-6">
              {b.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {b.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-serif italic text-sm text-moss bg-cream-2 px-3.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

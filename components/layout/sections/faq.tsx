"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  q: string;
  a: string;
  value: string;
}

const FAQS: FAQ[] = [
  {
    value: "f1",
    q: "How much does this cost?",
    a: "Honestly: it depends. A simple booking system or website usually lands between $4–10k. Custom internal tools and AI automations are usually $10–30k. The first call is free and ends with a written quote — no obligation. We don't believe in surprise invoices.",
  },
  {
    value: "f2",
    q: "How long until I have something working?",
    a: "Most projects ship in 2–6 weeks. We send a real working preview every Friday so you're never wondering what's happening. If we promise four weeks, we ship in four weeks.",
  },
  {
    value: "f3",
    q: "I don't really know what I need — is that okay?",
    a: "That's literally most of our clients. The first call is mostly us asking questions about your day-to-day. You don't need a spec, a wireframe, or technical vocabulary — that's our job. You just need to know your business.",
  },
  {
    value: "f4",
    q: "What happens after launch?",
    a: "You get a quiet month on us — fixes, tweaks, training your team. After that, you can keep us on a care plan (small monthly retainer), or you can take everything and run with it. We hand over clean code, clear documentation, and no lock-ins.",
  },
  {
    value: "f5",
    q: "Do you only work with tech businesses?",
    a: "The opposite, mostly. Our favorite clients are salons, clinics, trades, studios, schools, and founders who've never hired a developer before. Software shouldn't be reserved for tech companies.",
  },
  {
    value: "f6",
    q: "What do you mean by \"AI automation\"?",
    a: "Not chatbots. We mean the quiet stuff: an AI that drafts replies in your voice, that follows up on the lead you forgot about, that summarizes your inbox every morning, that books appointments around your team's actual availability. Small workers that give you hours back.",
  },
];

export const FAQSection = () => {
  return (
    <section
      id="faq"
      className="max-w-[1320px] mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-serif italic text-sprout text-lg">vii.</span>
        <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
          Honest answers
        </span>
        <span className="flex-1 h-px bg-ink/15" />
      </div>

      <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[40px] sm:text-[52px] md:text-[64px] lg:text-[80px] max-w-[980px]">
        The questions <span className="italic text-sprout">everyone</span>{" "}
        eventually asks.
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="f1"
        className="mt-16 md:mt-20 border-t border-ink/15"
      >
        {FAQS.map(({ q, a, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="!bg-transparent !border-0 !border-b !border-ink/15 !rounded-none !px-0 !my-0"
          >
            <AccordionTrigger className="font-serif text-moss-2 text-[22px] md:text-[26px] py-7 md:py-8 hover:text-sprout transition-colors text-left tracking-[-0.01em] [&>svg]:hidden">
              <span className="flex-1 pr-6">{q}</span>
              <span className="font-serif italic text-sprout text-[28px] md:text-[32px] leading-none transition-transform duration-300 data-[state=open]:rotate-45">
                +
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-[17px] leading-relaxed text-ink/80 max-w-[760px] pb-8">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

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
    q: "I'm doing fine with texts and spreadsheets — why would software help?",
    a: "Because the hidden cost isn't the tools you use today — it's the time you lose, the mistakes that slip through, and the customers who give up when booking you feels like work. Good software is just a calmer way to run the same business: fewer double-bookings, less chasing people for answers, a professional front door for new clients, and less of you acting as human glue between a dozen group chats. You don't need to love tech. You need fewer fires.",
  },
  {
    value: "f2",
    q: "How does pricing work — and will I get a nasty surprise?",
    a: "We start with a conversation so we actually understand your world. After that, you get a written scope and a clear number before anything serious begins — no obligation. We don't do vague retainers that balloon, and we don't believe in surprise invoices. If the scope changes, we talk about it first, in plain English.",
  },
  {
    value: "f3",
    q: "Will this lose steam halfway through? I've heard software projects stall.",
    a: "We keep a tight loop with you — no black box, no guessing games. You see real, working pieces you can click through, react to, and steer. Momentum without sloppiness is the point — your business doesn't pause while we hide behind tickets.",
  },
  {
    value: "f4",
    q: "I don't really know what I need — is that okay?",
    a: "That's most of our clients. You bring the business; we bring the questions. The first call is us learning how your operation actually runs — where the friction is, what customers complain about, what you wish happened automatically. You don't need a spec, a wireframe, or the right vocabulary. You need honesty about what's broken, and we'll translate that into something useful.",
  },
  {
    value: "f5",
    q: "What happens after launch — are you gone for good?",
    a: "After launch, we stay hands-on for fixes, tweaks, and training your team — on us. After that, you can absolutely take the keys and run solo — you own what we build. Many clients choose to stay on a simple care plan: we keep an eye on the site, handle bugs, watch analytics with you, and make small updates and improvements so nothing quietly rots while you're busy running the shop. It's optional, not a trap — just steady peace of mind if you want it.",
  },
  {
    value: "f6",
    q: "Do you only work with tech businesses?",
    a: "The opposite, mostly. We love salons, clinics, trades, studios, schools, charities, and founders who've never hired a developer before. Software isn't a club for Silicon Valley — it's a tool for anyone who wants breathing room back.",
  },
  {
    value: "f7",
    q: "When you say \"AI automation,\" what does that mean in real life?",
    a: "Not a gimmicky chatbot on your homepage. We mean the boring, valuable stuff: drafts that sound like you, follow-ups you would have forgotten, inbox summaries, reminders that actually match your calendar, little helpers that shave admin overhead you didn't know you were carrying. The goal isn't to sound futuristic — it's to give you time and fewer mistakes.",
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
      <p className="mt-6 md:mt-8 text-lg md:text-xl text-ink/75 max-w-[640px] leading-relaxed">
        No jargon quiz at the end. If you&apos;ve never bought software before,
        you&apos;re in the right place — these answers are for you.
      </p>

      <Accordion
        type="single"
        collapsible
        defaultValue="f1"
        className="mt-14 md:mt-16 border-t border-ink/15"
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

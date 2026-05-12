import { CalendlyBookButton } from "@/components/calendly-book-button";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-moss-2 text-cream py-24 md:py-36 pb-20"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">
        <div>
          <h2 className="font-serif text-cream leading-[1.0] tracking-[-0.025em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px]">
            Tell us
            <br />
            about the
            <br />
            <span className="italic text-sprout-soft">thing.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-cream/75 mt-7 max-w-[460px]">
            A relaxed conversation: no pitch deck, no obligation. You talk, we
            listen, and at the end you&apos;ll know whether software actually
            solves your problem, or if it&apos;s something simpler.
          </p>
          <ul className="flex flex-col gap-4 mt-12">
            {[
              ["i.", "We", "listen", " first, build second."],
              ["ii.", "We", "cut noise", ", without the usual agency crawl."],
              ["iii.", "We", "prioritize quality", " over scope."],
            ].map(([n, pre, em, post]) => (
              <li
                key={n as string}
                className="font-serif text-xl md:text-[22px] flex gap-3.5 items-baseline"
              >
                <span className="italic text-sprout-soft text-lg">{n}</span>
                <span>
                  {pre} <em className="italic">{em}</em>
                  {post}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-cream/[0.05] backdrop-blur-md border border-cream/15 rounded-2xl p-8 md:p-10">
          <p className="text-base md:text-lg leading-relaxed text-cream/80 mb-8">
            Grab a slot on the calendar. You&apos;ll get a confirmation and a
            short note so we show up informed, no forms, no inbox ping pong.
          </p>
          <CalendlyBookButton className="group inline-flex w-full items-center justify-center gap-3 bg-cream text-moss-2 px-9 py-[18px] rounded-full text-[15px] font-semibold hover:bg-sprout-soft hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(111,212,155,0.35)] transition-all">
            Book a meeting
            <span className="transition-transform group-hover:translate-x-1" aria-hidden>
              →
            </span>
          </CalendlyBookButton>
        </div>
      </div>
    </section>
  );
};

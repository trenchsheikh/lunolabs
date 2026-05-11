"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_URL } from "@/lib/calendly";
import { runWhenCalendlyReady } from "@/lib/calendly-popup";

export function CalendlyInlineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    const mountWidget = () => {
      if (cancelled || !window.Calendly?.initInlineWidget) return;
      el.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: el,
      });
    };

    runWhenCalendlyReady(mountWidget);

    return () => {
      cancelled = true;
      el.innerHTML = "";
    };
  }, []);

  return (
    <section
      aria-label="Book a call"
      className="border-t border-ink/10 bg-background py-16 md:py-24"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <span className="font-serif italic text-sprout text-lg">v.</span>
          <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
            Book a call
          </span>
          <span className="flex-1 h-px bg-ink/15" />
        </div>
        <div
          ref={containerRef}
          className="calendly-inline-widget mx-auto w-full max-w-[1000px] rounded-2xl overflow-hidden border border-ink/10 bg-card shadow-[0_1px_0_rgba(11,27,22,0.06)]"
          data-url={CALENDLY_URL}
          style={{ minWidth: 320, height: 700 }}
        />
      </div>
    </section>
  );
}

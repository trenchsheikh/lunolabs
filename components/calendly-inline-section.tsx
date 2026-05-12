"use client";

import { useEffect, useRef } from "react";
import { CALENDLY_INLINE_URL } from "@/lib/calendly";
import { runWhenCalendlyReady } from "@/lib/calendly-popup";

export function CalendlyInlineSection() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const mountWidget = () => {
      if (cancelled || !window.Calendly?.initInlineWidget) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled || !window.Calendly?.initInlineWidget) return;
          el.innerHTML = "";
          window.Calendly.initInlineWidget({
            url: CALENDLY_INLINE_URL,
            parentElement: el,
          });
        });
      });
    };

    const start = () => {
      if (cancelled) return;
      runWhenCalendlyReady(mountWidget);
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0]?.isIntersecting) return;
          observer?.disconnect();
          observer = null;
          start();
        },
        { rootMargin: "240px 0px", threshold: 0.01 },
      );
      observer.observe(el);
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      el.innerHTML = "";
    };
  }, []);

  return (
    <section aria-label="Schedule a call" className="w-full border-t border-ink/10 bg-background">
      <div
        ref={widgetRef}
        className="calendly-inline-widget w-full"
        data-url={CALENDLY_INLINE_URL}
        style={{ minWidth: 320, minHeight: 720, height: 720 }}
      />
    </section>
  );
}

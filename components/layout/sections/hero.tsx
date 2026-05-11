"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendlyBookButton } from "@/components/calendly-book-button";

/** Short single-line words so the hero headline doesn’t wrap mid-phrase */
const ROTATIONS = ["website", "dashboard", "booking", "portal", "app"];

export const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % ROTATIONS.length);
        setVisible(true);
      }, 400);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative max-w-[1320px] mx-auto px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-24">
      <div className="inline-flex items-center gap-2.5 font-serif italic text-base text-moss/70 mb-8">
        <span className="pulse-dot inline-block w-2 h-2 rounded-full bg-sprout" />
        <span>A software studio for people without software</span>
      </div>

      <h1 className="font-serif text-moss-2 leading-[0.95] tracking-[-0.03em] text-[56px] sm:text-[72px] md:text-[96px] lg:text-[124px] max-w-[1200px]">
        We build the{" "}
        <span
          className="italic text-sprout inline-block transition-opacity duration-300"
          style={{ opacity: visible ? 1 : 0 }}
        >
          {ROTATIONS[idx]}
        </span>
        <br />
        your small business has been{" "}
        <span className="underline-accent">missing.</span>
      </h1>

      <div className="grid md:grid-cols-[1fr_380px] gap-10 md:gap-20 mt-16 md:mt-20 items-end">
        <div>
          <p className="text-lg md:text-[22px] leading-relaxed text-ink max-w-[560px]">
            Most small businesses run on sticky notes, group chats and a prayer.
            We&apos;re a small studio that{" "}
            <span className="font-serif italic text-moss">listens carefully</span>,
            then quietly ships the calm, beautiful software you actually need.
            Booking systems. Websites. AI that does the boring stuff.
          </p>

          <div className="flex flex-wrap gap-4 mt-12 md:mt-14 items-center">
            <CalendlyBookButton className="group inline-flex items-center gap-3 bg-moss-2 text-cream px-9 py-[18px] rounded-full text-[15px] font-semibold hover:bg-sprout hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(47,168,107,0.3)] transition-all">
              Book a meeting
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </CalendlyBookButton>
            <Link
              href="#work"
              className="text-moss-2 text-[15px] font-medium px-6 py-[18px] border-b border-moss-2 hover:text-sprout hover:border-sprout transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>

        <aside className="border-l border-ink/15 pl-8">
          <div className="text-[11px] tracking-[0.2em] uppercase text-moss/60 mb-3">
            How we work
          </div>
          <ul className="flex flex-col gap-3.5">
            <li className="font-serif text-2xl text-moss-2 leading-tight">
              <span className="italic text-sprout text-lg mr-2">i.</span>
              We <em className="italic">listen.</em>
            </li>
            <li className="font-serif text-2xl text-moss-2 leading-tight">
              <span className="italic text-sprout text-lg mr-2">ii.</span>
              We <em className="italic">ship with care.</em>
            </li>
            <li className="font-serif text-2xl text-moss-2 leading-tight">
              <span className="italic text-sprout text-lg mr-2">iii.</span>
              We <em className="italic">prioritize quality.</em>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

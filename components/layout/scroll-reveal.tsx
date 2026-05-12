"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index for sibling grids (multiplied by 70ms) */
  stagger?: number;
  /** Slightly subtler motion for dense sections */
  variant?: "default" | "soft";
};

export function ScrollReveal({
  children,
  className,
  stagger = 0,
  variant = "default",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const delay = Math.min(stagger, 8) * 75;
    el.style.setProperty("--sr-delay", `${delay}ms`);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.classList.add("scroll-reveal-visible");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("scroll-reveal-visible");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [stagger]);

  return (
    <div
      ref={ref}
      className={cn(
        variant === "soft" ? "scroll-reveal scroll-reveal--soft" : "scroll-reveal",
        className
      )}
    >
      {children}
    </div>
  );
}

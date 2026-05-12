"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { useLenisContext } from "@/components/layout/lenis-provider";
import { cn } from "@/lib/utils";

const HEADER_OFFSET = 96;

type Props = ComponentPropsWithoutRef<typeof Link> & {
  onNavigate?: () => void;
};

export function NavHashLink({
  href,
  className,
  onClick,
  onNavigate,
  children,
  ...rest
}: Props) {
  const { lenis, prefersReducedMotion } = useLenisContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (typeof href !== "string" || !href.startsWith("#")) return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    onNavigate?.();

    if (lenis && !prefersReducedMotion) {
      lenis.scrollTo(el, {
        offset: -HEADER_OFFSET,
        duration: 1.45,
      });
    } else {
      const top =
        el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "transition-[transform,color,opacity] duration-300 ease-out",
        "active:scale-[0.96] motion-reduce:active:scale-100",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

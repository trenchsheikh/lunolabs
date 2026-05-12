"use client";

import { CalendlyBookButton } from "@/components/calendly-book-button";
import { NavHashLink } from "@/components/layout/nav-hash-link";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#build", label: "What we build" },
  { href: "#team", label: "Team" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-[padding] duration-500 ease-out",
        scrolled ? "pt-3 md:pt-5 px-2 sm:px-4 md:px-6" : "pt-0 px-0"
      )}
    >
      <header
        className={cn(
          "pointer-events-auto overflow-hidden transition-[box-shadow,background-color,border-color,border-radius,max-width,padding] duration-500 ease-out",
          scrolled
            ? "rounded-[999px] max-w-[min(1200px,calc(100vw-1rem))] mx-auto border border-ink/10 bg-background/90 backdrop-blur-xl py-2.5 md:py-3 shadow-[0_14px_50px_-18px_rgba(11,27,22,0.22)] ring-1 ring-ink/[0.06]"
            : "max-w-none mx-0 rounded-none border-0 border-b border-ink/10 bg-background/88 backdrop-blur-md py-4 shadow-none"
        )}
      >
        <div
          className={cn(
            "max-w-[1320px] mx-auto flex items-center justify-between gap-6 transition-[padding] duration-500",
            scrolled ? "px-5 sm:px-7 md:px-9" : "px-6 md:px-12"
          )}
        >
          <Link
            href="/"
            className={cn(
              "flex items-baseline gap-2.5 shrink-0 transition-transform duration-300 ease-out hover:opacity-90 active:scale-[0.98] motion-reduce:active:scale-100"
            )}
          >
            <span className="font-serif text-[26px] md:text-[28px] leading-none text-moss-2 tracking-tight">
              Luno<span className="italic text-sprout ml-0.5">Labs</span>
            </span>
            <span className="font-serif italic text-[13px] text-moss/50 hidden sm:inline transition-opacity duration-500">
              since 2022
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-9">
            {routeList.map(({ href, label }) => (
              <NavHashLink
                key={href}
                href={href}
                className="group relative text-sm font-medium text-ink hover:text-sprout py-1.5"
              >
                {label}
                <span className="absolute left-0 bottom-0 h-px w-0 bg-sprout transition-all duration-300 ease-out group-hover:w-full" />
              </NavHashLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CalendlyBookButton className="inline-flex items-center gap-2 bg-moss-2 text-cream px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-sprout hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-8px_rgba(47,168,107,0.45)] transition-all duration-300 ease-out active:translate-y-0 active:scale-[0.97] motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100">
              Book a call <span aria-hidden>→</span>
            </CalendlyBookButton>
          </div>

          <div className="flex items-center lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "text-moss-2 p-2 rounded-full transition-[transform,background-color] duration-300",
                    "hover:bg-ink/5 active:scale-95 motion-reduce:active:scale-100"
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex flex-col justify-between bg-background border-ink/10"
              >
                <div>
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-left">
                      <span className="font-serif text-2xl text-moss-2">
                        Luno<span className="italic text-sprout">Labs</span>
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-1">
                    {routeList.map(({ href, label }) => (
                      <NavHashLink
                        key={href}
                        href={href}
                        onNavigate={() => setIsOpen(false)}
                        className="font-serif text-2xl text-moss-2 py-3 px-1 rounded-lg hover:text-sprout hover:bg-sprout/5 transition-colors duration-300"
                      >
                        {label}
                      </NavHashLink>
                    ))}
                  </div>
                </div>
                <SheetFooter className="flex-col items-start gap-4">
                  <Separator />
                  <CalendlyBookButton
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 bg-moss-2 text-cream px-5 py-3 rounded-full text-sm font-semibold w-full justify-center transition-transform duration-300 active:scale-[0.98] motion-reduce:active:scale-100"
                  >
                    Book a call →
                  </CalendlyBookButton>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
};

"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { CalendlyBookButton } from "@/components/calendly-book-button";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "#build", label: "What we build" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-ink/10">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-2.5 shrink-0">
          <span className="font-serif text-[26px] md:text-[28px] leading-none text-moss-2 tracking-tight">
            Luno<span className="italic text-sprout ml-0.5">Labs</span>
          </span>
          <span className="font-serif italic text-[13px] text-moss/50 hidden sm:inline">
            since 2022
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative text-sm font-medium text-ink hover:text-sprout transition-colors py-1.5"
            >
              {label}
              <span className="absolute left-0 bottom-0 h-px w-0 bg-sprout transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CalendlyBookButton className="inline-flex items-center gap-2 bg-moss-2 text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sprout hover:-translate-y-0.5 transition-all">
            Book a call <span aria-hidden>→</span>
          </CalendlyBookButton>
        </div>

        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-moss-2"
                aria-label="Open menu"
              >
                <Menu />
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
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-2xl text-moss-2 py-2 hover:text-sprout transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
              <SheetFooter className="flex-col items-start gap-4">
                <Separator />
                <CalendlyBookButton
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-moss-2 text-cream px-5 py-3 rounded-full text-sm font-semibold w-full justify-center"
                >
                  Book a call →
                </CalendlyBookButton>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

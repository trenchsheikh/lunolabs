"use client";

import { openCalendlyPopup } from "@/lib/calendly-popup";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

export function CalendlyBookButton({
  className,
  children,
  type = "button",
  onClick,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        "transition-[transform,box-shadow,background-color] duration-300 ease-out",
        "active:scale-[0.97] motion-reduce:active:scale-100",
        className
      )}
      onClick={(e) => {
        onClick?.(e);
        openCalendlyPopup();
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

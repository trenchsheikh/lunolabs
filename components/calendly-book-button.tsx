"use client";

import type { ComponentPropsWithoutRef } from "react";
import { openCalendlyPopup } from "@/lib/calendly-popup";

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
      className={className}
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

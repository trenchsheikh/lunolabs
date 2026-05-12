"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";
import {
  CALENDLY_BADGE_BG,
  CALENDLY_BADGE_TEXT,
  CALENDLY_URL,
} from "@/lib/calendly";
import { ensureCalendlyStylesheet } from "@/lib/calendly-popup";

const WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

let calendlyBadgeInitialized = false;

export function CalendlyBadgeWidget() {
  const ranInit = useRef(false);

  const initBadge = useCallback(() => {
    if (ranInit.current || calendlyBadgeInitialized) return;
    if (typeof window === "undefined" || !window.Calendly?.initBadgeWidget) return;

    ensureCalendlyStylesheet();

    window.Calendly.initBadgeWidget({
      url: CALENDLY_URL,
      text: "Schedule time with me",
      color: CALENDLY_BADGE_BG,
      textColor: CALENDLY_BADGE_TEXT,
      branding: true,
    });

    ranInit.current = true;
    calendlyBadgeInitialized = true;
  }, []);

  return (
    <Script
      src={WIDGET_JS}
      strategy="afterInteractive"
      onLoad={initBadge}
    />
  );
}

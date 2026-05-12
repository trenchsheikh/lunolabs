import { CALENDLY_URL } from "./calendly";

const WIDGET_CSS =
  "https://assets.calendly.com/assets/external/widget.css";
const WIDGET_JS =
  "https://assets.calendly.com/assets/external/widget.js";

const SCRIPT_SELECTOR =
  'script[src*="assets.calendly.com/assets/external/widget.js"]';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

export function ensureCalendlyStylesheet(): void {
  if (typeof document === "undefined") return;
  const id = "calendly-widget-css";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = WIDGET_CSS;
  document.head.appendChild(link);
}

/** Loads widget.js if needed, then runs callback when `window.Calendly` exists. */
export function runWhenCalendlyReady(callback: () => void): void {
  if (typeof window === "undefined") return;

  ensureCalendlyStylesheet();

  let fired = false;
  const fire = () => {
    if (fired || !window.Calendly) return;
    fired = true;
    callback();
  };

  if (window.Calendly) {
    fire();
    return;
  }

  const existing = document.querySelector<HTMLScriptElement>(SCRIPT_SELECTOR);
  if (existing) {
    existing.addEventListener("load", fire, { once: true });
    // If the script already finished loading before we attached `load`, pick it up here.
    queueMicrotask(fire);
    return;
  }

  const script = document.createElement("script");
  script.src = WIDGET_JS;
  script.async = true;
  script.onload = fire;
  document.body.appendChild(script);
}

/**
 * Opens Calendly’s popup (same as Calendly.initPopupWidget in their link widget).
 */
export function openCalendlyPopup(): void {
  runWhenCalendlyReady(() => {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  });
}

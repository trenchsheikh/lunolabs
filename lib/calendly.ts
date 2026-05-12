/** Calendly scheduling page: used by popup, badge, and CTAs */
export const CALENDLY_URL = "https://calendly.com/samitahir018";

/**
 * Inline embed only. Prefer a full Calendly event type URL so the widget opens straight into
 * date and time selection (copy from Calendly, Event types, then share link). Optionally set
 * NEXT_PUBLIC_CALENDLY_INLINE_URL.
 */
export const CALENDLY_INLINE_URL =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_CALENDLY_INLINE_URL) ||
  CALENDLY_URL;

/** Matches `bg-moss-2` + `text-cream` (globals.css) for Calendly.initBadgeWidget */
export const CALENDLY_BADGE_BG = "#0D2A1E";
export const CALENDLY_BADGE_TEXT = "#F3EFE5";

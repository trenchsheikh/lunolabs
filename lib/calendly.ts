/** Calendly scheduling page — used by popup, badge, and CTAs */
export const CALENDLY_URL = "https://calendly.com/samitahir018";

/**
 * Inline embed only. Prefer your **event-type** URL so the widget opens straight into
 * date/time (e.g. `https://calendly.com/samitahir018/discovery-call` from Calendly →
 * Event types → Copy link). Override with `NEXT_PUBLIC_CALENDLY_INLINE_URL` if you like.
 */
export const CALENDLY_INLINE_URL =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_CALENDLY_INLINE_URL) ||
  CALENDLY_URL;

/** Matches `bg-moss-2` + `text-cream` (globals.css) for Calendly.initBadgeWidget */
export const CALENDLY_BADGE_BG = "#0D2A1E";
export const CALENDLY_BADGE_TEXT = "#F3EFE5";

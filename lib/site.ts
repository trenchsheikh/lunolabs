/**
 * Canonical site URL. Override per-environment with NEXT_PUBLIC_SITE_URL
 * (no trailing slash), e.g. https://lunolabs.com
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lunolabs.com"
).replace(/\/$/, "");

export const SITE_NAME = "Luno Labs";

export const SITE_TITLE =
  "Luno Labs: Custom Software, Booking Systems and AI Automations for Small Businesses";

export const SITE_DESCRIPTION =
  "A small software studio that builds custom booking systems, websites, internal tools and AI automations for small businesses. Free consultation, a written quote up front, and no lock ins.";

/** Primary search intent we want to rank for. */
export const SITE_KEYWORDS = [
  "custom software development for small businesses",
  "booking system development",
  "small business booking software",
  "appointment booking software",
  "AI automation for small business",
  "web app development",
  "custom internal tools and dashboards",
  "software studio for small business",
  "build software for my business",
  "bespoke software development",
  "salon booking system",
  "clinic booking software",
];

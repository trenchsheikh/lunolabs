/**
 * Canonical site URL. Override per-environment with NEXT_PUBLIC_SITE_URL
 * (no trailing slash), e.g. https://lunolabs.com
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lunolabs.com"
).replace(/\/$/, "");

export const SITE_NAME = "Luno Labs";

export const SITE_DESCRIPTION =
  "A small software studio building custom booking systems, websites, internal tools and AI automations for small businesses. Free consultation, written quote, no lock-ins.";

import { SITE_URL } from "@/lib/site";

/** Safely embed a JSON-LD object into the document. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const SERVICES = [
  {
    name: "Custom booking system development",
    description:
      "Calendar and appointment booking software for salons, clinics, studios and trades — deposits, reminders, and an admin dashboard.",
  },
  {
    name: "Website & web app development",
    description:
      "Fast, conversion-focused websites and web apps for small businesses, built and measured.",
  },
  {
    name: "AI automation for small business",
    description:
      "Lightweight AI workflows: inbox triage, drafted replies in your voice, lead follow-up, scheduling and research assistants.",
  },
  {
    name: "Custom internal tools & dashboards",
    description:
      "Bespoke dashboards, member portals, intake forms and CRM integrations built small and useful first.",
  },
];

/** Organization + the software services we offer (for "software build" intent). */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#organization`,
        name: "Luno Labs",
        alternateName: "Luno Labs Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/Luno-logo.png`,
        image: `${SITE_URL}/Luno-logo.png`,
        email: "hello@lunolabs.com",
        foundingDate: "2022",
        slogan: "We listen, then we build.",
        description:
          "A small software studio that builds custom booking systems, websites, internal tools and AI automations for small businesses — calmly, fast, and made to last.",
        founder: {
          "@type": "Person",
          name: "Sami Tahir",
          jobTitle: "Founder & Head Builder",
        },
        areaServed: "Worldwide",
        knowsAbout: [
          "custom software development",
          "booking system development",
          "small business software",
          "AI automation",
          "web app development",
          "internal tools and dashboards",
        ],
        makesOffer: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.description },
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software builds for small businesses",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, description: s.description },
          })),
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Luno Labs",
        description:
          "Custom software, booking systems and AI automations for small businesses.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en",
      }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }}
    />
  );
}

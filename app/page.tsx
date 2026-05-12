import { CalendlyInlineSection } from "@/components/calendly-inline-section";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SelectedWorkSection } from "@/components/layout/sections/selected-work";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Luno Labs — We listen, then we build",
  description:
    "A small studio for small businesses without software. Booking systems, websites, and AI automations — calm builds, made to last.",
  openGraph: {
    type: "website",
    title: "Luno Labs — We listen, then we build",
    description:
      "A small studio for small businesses without software. Booking systems, websites, and AI automations — calm builds, made to last.",
    siteName: "Luno Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luno Labs — We listen, then we build",
    description:
      "A small studio for small businesses without software. Booking systems, websites, and AI automations — calm builds, made to last.",
  },
  icons: {
    icon: "/Luno-logo.png",
    shortcut: "/Luno-logo.png",
    apple: "/Luno-logo.png",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollReveal stagger={0}>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal stagger={1}>
        <BenefitsSection />
      </ScrollReveal>
      <ScrollReveal stagger={2}>
        <SelectedWorkSection />
      </ScrollReveal>
      <ScrollReveal stagger={3} variant="soft">
        <TestimonialSection />
      </ScrollReveal>
      <ScrollReveal stagger={4}>
        <TeamSection />
      </ScrollReveal>
      <ScrollReveal stagger={5}>
        <FAQSection />
      </ScrollReveal>
      <ScrollReveal stagger={6}>
        <ContactSection />
      </ScrollReveal>
      {/* Inline Calendly must not sit under ScrollReveal (opacity/transform breaks iframe sizing). */}
      <CalendlyInlineSection />
      <ScrollReveal stagger={7} variant="soft">
        <FooterSection />
      </ScrollReveal>
    </>
  );
}

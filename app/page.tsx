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

// Site-wide metadata (title, description, OG, canonical, robots) lives in app/layout.tsx.

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollReveal stagger={0}>
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal stagger={1}>
        <TeamSection />
      </ScrollReveal>
      <ScrollReveal stagger={2}>
        <BenefitsSection />
      </ScrollReveal>
      <ScrollReveal stagger={3}>
        <SelectedWorkSection />
      </ScrollReveal>
      <ScrollReveal stagger={4} variant="soft">
        <TestimonialSection />
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

import { CalendlyInlineSection } from "@/components/calendly-inline-section";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { SelectedWorkSection } from "@/components/layout/sections/selected-work";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
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
      <SponsorsSection />
      <FeaturesSection />
      <BenefitsSection />
      <SelectedWorkSection />
      <TestimonialSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
      <CalendlyInlineSection />
      <FooterSection />
    </>
  );
}

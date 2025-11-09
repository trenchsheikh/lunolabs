import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { CryptoTicker } from "@/components/layout/sections/crypto-ticker";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Luno Labs — Launch ready apps & tokens",
  description: "Specialist builders for Web2 and Web3. We ship production apps, mobile, token launches, trading tools, and agentic AI—fast and right.",
  openGraph: {
    type: "website",
    title: "Luno Labs — Launch ready apps & tokens",
    description: "Specialist builders for Web2 and Web3. We ship production apps, mobile, token launches, trading tools, and agentic AI—fast and right.",
    siteName: "Luno Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luno Labs — Launch ready apps & tokens",
    description: "Specialist builders for Web2 and Web3. We ship production apps, mobile, token launches, trading tools, and agentic AI—fast and right.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <CryptoTicker />
      <FeaturesSection />
      <ServicesSection />
      <BenefitsSection />
      <TeamSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}

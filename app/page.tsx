import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { CryptoTicker } from "@/components/layout/sections/crypto-ticker";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";

export const metadata = {
  title: "Launch ready apps & tokens built fast and right",
  description: "We're a team of specialist builders for Web2 and Web3 shipping production grade apps, sites, and token launches end to end. From idea to live product, we handle build, security, and deployment.",
  openGraph: {
    type: "website",
    title: "Launch ready apps & tokens built fast and right",
    description: "We're a team of specialist builders for Web2 and Web3 shipping production grade apps, sites, and token launches end to end. From idea to live product, we handle build, security, and deployment.",
    siteName: "Luno Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch ready apps & tokens built fast and right",
    description: "We're a team of specialist builders for Web2 and Web3 shipping production grade apps, sites, and token launches end to end. From idea to live product, we handle build, security, and deployment.",
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

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
}

const web2Services: ServiceProps[] = [
  {
    icon: "Zap",
    title: "MVPs & Production Web Apps",
    description: "Full stack web applications built with React/Next.js, TypeScript, and modern tooling.",
  },
  {
    icon: "Smartphone",
    title: "Mobile Apps (React Native/Expo)",
    description: "Cross platform mobile apps for iOS and Android with native performance.",
  },
  {
    icon: "BarChart3",
    title: "Dashboards & Analytics",
    description: "Data visualization, admin panels, and real time monitoring systems.",
  },
  {
    icon: "CreditCard",
    title: "Payment & Auth Integrations",
    description: "Secure payment processing, authentication flows, and user management.",
  },
  {
    icon: "Shield",
    title: "Performance and Reliability",
    description: "Optimized for speed, security, and uptime with proper monitoring.",
  },
  {
    icon: "Bot",
    title: "Agentic AI + MCP Integrations",
    description: "AI agents with Model Context Protocol for autonomous workflows.",
  },
];

const web3Services: ServiceProps[] = [
  {
    icon: "Coins",
    title: "Token Launches & Launch Ops",
    description: "End to end token deployment, compliance checks, and go to market strategy.",
  },
  {
    icon: "TrendingUp",
    title: "Trading Bots & On chain Tools",
    description: "Automated trading systems, market makers, and blockchain integrations.",
  },
  {
    icon: "Bot",
    title: "Agentic AI + MCP Integrations",
    description: "AI agents with Model Context Protocol for autonomous workflows.",
  },
  {
    icon: "Wallet",
    title: "Wallet, Auth & On chain UX",
    description: "Seamless wallet connections and blockchain powered authentication.",
  },
  {
    icon: "FileCode",
    title: "Smart Contract Integrations",
    description: "Contract interactions, event indexing, and on chain data management.",
  },
];

export const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<"web2" | "web3">("web2");

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What we build
      </h2>

      <div className="flex justify-center gap-4 mb-12 mt-8">
        <Button
          variant={activeTab === "web2" ? "default" : "outline"}
          onClick={() => setActiveTab("web2")}
          className="px-8"
        >
          Web2 Development
        </Button>
        <Button
          variant={activeTab === "web3" ? "default" : "outline"}
          onClick={() => setActiveTab("web3")}
          className="px-8"
        >
          Web3 Development
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {(activeTab === "web2" ? web2Services : web3Services).map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground mb-4">
          Not sure where to start?
        </p>
        <Button asChild variant="outline">
          <Link href="#contact">Talk to us →</Link>
        </Button>
      </div>
    </section>
  );
};

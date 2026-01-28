import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface WorkProps {
  title: string;
  tagline: string;
  description: string;
  type: string;
  href?: string;
}

const workList: WorkProps[] = [
  {
    title: "LobSmash",
    tagline: "World Class AI Padel Coach & Performance Analytics",
    description:
      "We built the high conversion landing page and are currently developing the core mobile application. LobSmash uses computer vision to deconstruct player motion, providing pro level feedback and tactical match decoding through its proprietary neural engine.",
    type: "Web2",
    href: "https://www.lobsmash.com",
  },
  {
    title: "Kurek Hersi",
    tagline: "Performance coach to world leaders & athletes",
    description:
      "Built a high conversion landing page for world class strategic performance coach Kurek Hersi. We delivered a premium, high performance architecture with fluid animations and rapid load speeds to match the elite brand identity.",
    type: "Web2",
    href: "https://www.kurekhersi.com",
  },
  {
    title: "Build Fund",
    tagline: "Investment fund via token launches",
    description:
      "We built the application and launched the token with tax per trade to fund builders on the BNB ecosystem. We architected a token launch pipeline from compliance checks to go to market, enabling faster, repeatable launches.",
    type: "Web3",
    href: "https://www.buildfund.io/",
  },
  {
    title: "Omar Technical School",
    tagline: "Elite Football Development for Youth Aged 5 to 18",
    description:
      "Designed and developed a comprehensive digital ecosystem, including a high performance landing page and a custom member portal for elite youth football training. We focused on seamless user journeys and robust backend architecture to support growing athlete data.",
    type: "Web2",
    href: "https://www.omartechnicalschool.com",
  },
  {
    title: "Valuto",
    tagline: "Financial education app for ages 11 to 18",
    description:
      "Built learning flows, scoring, and dashboards to make finance engaging and measurable for teens and schools.",
    type: "Web2",
  },
  {
    title: "AsterLite",
    tagline: "Telegram futures trading bot on Aster",
    description:
      "Delivered lightning fast trade flows and position visibility inside Telegram with robust safety rails.",
    type: "Web3",
    href: "https://asterlitetrading.com/",
  },
  {
    title: "HyperTruth",
    tagline: "AI agent with MCP for prediction markets",
    description:
      "An agentic system that finds the closest answer reliably across sources, tailored for market resolution and due diligence.",
    type: "Web3",
    href: "https://www.hypertruth.app/",
  },
  {
    title: "[REDACTED]",
    tagline: "I signed an NDA, if I speak I'm in trouble",
    description:
      "Let's just say it involved some really cool tech, shipped on time, and the client was happy. That's all I can legally tell you.",
    type: "Web2",
  },
];

export const ServicesSection = () => {
  return (
    <section id="work" className="container py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary mb-2 tracking-wider uppercase font-semibold">
          Portfolio
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Selected work
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          High performance applications and platforms delivered for Web2 and Web3 leaders.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
        {workList.slice(0, 7).map(({ title, tagline, description, type, href }) => (
          <Card
            key={title}
            className="group bg-card/40 backdrop-blur-sm border-secondary/50 h-full relative hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 flex flex-col overflow-hidden"
          >
            <CardHeader className="flex-grow p-8">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="outline" className="text-[10px] uppercase tracking-widest font-bold py-0.5 px-2 bg-background/50">
                  {type}
                </Badge>
                {href && (
                  <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="size-4" />
                  </div>
                )}
              </div>
              
              <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              
              <CardDescription className="text-base font-semibold text-foreground/90 mb-4 line-clamp-1">
                {tagline}
              </CardDescription>
              
              <CardDescription className="text-muted-foreground leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>

            {href && (
              <CardContent className="p-8 pt-0 mt-auto">
                <Button asChild variant="secondary" size="sm" className="w-full group/btn font-bold rounded-lg border border-transparent group-hover:border-primary/20 group-hover:bg-primary/10 transition-all">
                  <Link href={href} target="_blank" className="flex items-center justify-center">
                    Visit Project
                    <ExternalLink className="ml-2 size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            )}
          </Card>
        ))}

        {/* Integrated NDA card */}
        <Card className="bg-muted/30 border-dashed border-2 border-secondary/60 h-full flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
          <div className="bg-background/50 p-4 rounded-full mb-4">
            <svg className="size-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <CardTitle className="text-xl font-bold mb-2">{workList[7].title}</CardTitle>
          <p className="text-muted-foreground mb-4 text-sm px-4">
            {workList[7].description}
          </p>
          <Badge variant="secondary" className="font-bold">
            {workList[7].type}
          </Badge>
        </Card>
      </div>

      <div className="text-center mt-16">
        <p className="text-muted-foreground font-medium mb-6">
          More projects and technical case studies available on request.
        </p>
        <Button asChild variant="outline" className="rounded-full px-8">
          <Link href="#contact">Discuss your project →</Link>
        </Button>
      </div>
    </section>
  );
};

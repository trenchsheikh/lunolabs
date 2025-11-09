import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WorkProps {
  title: string;
  tagline: string;
  description: string;
  type: string;
}

const workList: WorkProps[] = [
  {
    title: "Build Fund",
    tagline: "Investment fund via token launches",
    description:
      "We built the application and launched the token with tax per trade to fund builders on the BNB ecosystem. We architected a token launch pipeline from compliance checks to go to market, enabling faster, repeatable launches.",
    type: "Web3",
  },
  {
    title: "Valuto",
    tagline: "Financial education app for ages 11–18",
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
  },
  {
    title: "HyperTruth",
    tagline: "AI agent with MCP for prediction markets",
    description:
      "An agentic system that finds the closest answer reliably across sources, tailored for market resolution and due diligence.",
    type: "Web3",
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
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Work
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Selected work
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 w-full lg:w-[80%] mx-auto mt-12">
        {workList.slice(0, 4).map(({ title, tagline, description, type }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl">{title}</CardTitle>
                <Badge variant="secondary" className="ml-2">
                  {type}
                </Badge>
              </div>
              <CardDescription className="text-base font-medium text-foreground/80 mb-2">
                {tagline}
              </CardDescription>
              <CardDescription className="text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Centered NDA card */}
      {workList[4] && (
        <div className="flex justify-center w-full lg:w-[80%] mx-auto mt-6">
          <Card className="bg-muted/60 dark:bg-card w-full sm:w-[calc(50%-0.75rem)] relative hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl">{workList[4].title}</CardTitle>
                <Badge variant="secondary" className="ml-2">
                  {workList[4].type}
                </Badge>
              </div>
              <CardDescription className="text-base font-medium text-foreground/80 mb-2">
                {workList[4].tagline}
              </CardDescription>
              <CardDescription className="text-muted-foreground">
                {workList[4].description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      )}

      <p className="text-center text-muted-foreground mt-8">
        More available on request.
      </p>
    </section>
  );
};

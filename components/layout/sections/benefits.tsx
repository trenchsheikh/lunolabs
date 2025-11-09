import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface ProcessProps {
  icon: string;
  title: string;
  description: string;
}

const processList: ProcessProps[] = [
  {
    icon: "ClipboardList",
    title: "Scope & Plan",
    description:
      "Rapid scoping, milestones, and success metrics defined upfront.",
  },
  {
    icon: "Code",
    title: "Build & Validate",
    description:
      "Tight feedback loops, staging links, and measurable progress every step.",
  },
  {
    icon: "Rocket",
    title: "Ship & Monitor",
    description:
      "Production deploy with analytics, error monitoring, and performance tracking.",
  },
  {
    icon: "FileText",
    title: "Handover & Support",
    description:
      "Complete documentation, runbooks, and optional retainer for ongoing support.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="process" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Process</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How we work
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            A proven workflow from discovery to delivery, ensuring transparency, speed, and quality at every stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {processList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import TelegramIcon from "@/components/icons/telegram-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface SocialNetworkProps {
  name: string;
  url: string;
}

const founderSocials: SocialNetworkProps[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samitahir1/",
  },
  {
    name: "Telegram",
    url: "https://t.me/trenchsheikh",
  },
  {
    name: "X",
    url: "https://x.com/trench_sheikh",
  },
];

export const TeamSection = () => {
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Telegram":
        return <TelegramIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          About
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-8">
          Built by specialists
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12">
          Luno Labs is a team of specialist engineers shipping at startup speed. 
          We partner from zero to one through scale, keeping quality and reliability front and center.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <Card className="bg-muted/60 dark:bg-card overflow-hidden">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-48 h-64 rounded-lg overflow-hidden border-2 border-primary/20">
                <img 
                  src="/sami.jpg" 
                  alt="Sami Tahir"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 35%' }}
                />
              </div>
            </div>
            <CardTitle className="text-2xl">
              Sami Tahir
            </CardTitle>
            <p className="text-primary font-medium">Founder & CEO</p>
          </CardHeader>

          <CardContent className="text-center text-muted-foreground space-y-2">
            <p>Ex-IBM</p>
            <p>Led AI education initiative at Google HQ</p>
            <p>Built production agentic payment systems with stablecoins at 0em Labs</p>
            <p>Delivered 3 successful token launches exceeding $5M+ in total value</p>
            <p className="font-semibold text-foreground pt-2">8× Hackathon Champion</p>
          </CardContent>

          <CardFooter className="flex justify-center space-x-4 pb-6">
            {founderSocials.map(({ name, url }, index) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                className="hover:opacity-80 transition-all"
                aria-label={name}
              >
                {socialIcon(name)}
              </Link>
            ))}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

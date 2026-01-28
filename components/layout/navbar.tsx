"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
    NavigationMenu, NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#work",
    label: "Work",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Web2 Development",
    description: "MVPs, production web apps, mobile apps, and dashboards built with modern stacks.",
  },
  {
    title: "Web3 Development",
    description: "Token launches, trading bots, on chain tools, and agentic AI integrations.",
  },
  {
    title: "End to End Delivery",
    description: "From idea to production deployment with monitoring, docs, and support.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-lg backdrop-blur-md bg-card/70 w-[95%] md:w-[80%] lg:w-[85%] lg:max-w-screen-xl top-6 mx-auto sticky border border-secondary/50 z-40 rounded-full flex justify-between items-center px-4 py-0">
      <Link href="/" className="font-bold flex items-center shrink-0">
          <Image
            src="/Luno-logo.png"
            alt="Luno Labs"
            width={200}
            height={64}
            className="h-16 w-auto relative top-1"
          />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/Luno-logo.png"
                      alt="Luno Labs"
                      width={180}
                      height={56}
                      className="h-12 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base font-semibold"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-3 font-semibold hover:text-primary transition-colors">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" className="font-semibold rounded-full px-6">
          <Link href="#contact">
            Get Started
          </Link>
        </Button>
      </div>
    </header>
  );
};

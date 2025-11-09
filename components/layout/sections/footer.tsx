import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          <div className="col-span-full md:col-span-2">
            <Link href="/" className="flex font-bold items-center mb-4">
              <h3 className="text-2xl font-semibold">
                <span className="text-luno-green-dark">Luno</span>
                <span className="text-luno-green-light">Labs</span>
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Specialist builders for Web2 and Web3. We ship production apps, mobile, token launches, and agentic AI—fast and right.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Navigation</h3>
            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>
            <div>
              <Link href="#work" className="opacity-60 hover:opacity-100">
                Work
              </Link>
            </div>
            <div>
              <Link href="#about" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Luno Labs. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Link
              href="https://x.com"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="GitHub"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

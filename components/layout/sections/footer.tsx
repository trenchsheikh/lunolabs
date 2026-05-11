import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-moss-2 text-cream pt-16 pb-8 px-6 md:px-12 border-t border-cream/10"
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="font-serif text-cream/95 leading-[0.85] tracking-[-0.04em] text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] mb-12 md:mb-16">
          Built with
          <br />
          <span className="italic text-sprout-soft">quiet care.</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-cream/15 text-[13px] text-cream/60">
          <div>
            © {currentYear} Luno Labs ·{" "}
            <em className="font-serif">since 2022</em>
          </div>
          <div className="flex gap-6 md:gap-8">
            <Link href="#" className="hover:text-sprout-soft transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-sprout-soft transition-colors">
              Terms
            </Link>
            <Link
              href="mailto:hello@lunolabs.com"
              className="hover:text-sprout-soft transition-colors"
            >
              hello@lunolabs.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

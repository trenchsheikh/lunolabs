import Image from "next/image";
import Link from "next/link";

type Project = {
  name: string;
  image: string;
  blurb: string;
  impact: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Mayfair Motors",
    image: "/work/mayfair-motors.png",
    blurb: "Luxury rental — full web app & integrated booking.",
    impact: "End-to-end product",
  },
  {
    name: "Lobsmash",
    image: "/work/lobsmash.png",
    blurb: "Padel analytics — algorithms, AI, and product design.",
    impact: "Deep player intelligence",
    href: "https://www.lobsmash.com",
  },
  {
    name: "Kurek Hersi",
    image: "/work/kurek-hersi.png",
    blurb: "Premium brand site — sharp and confident.",
    impact: "Lean collaboration · focused kickoff",
    href: "https://www.kurekhersi.com",
  },
  {
    name: "Asterlite",
    image: "/work/asterlite.png",
    blurb: "Telegram futures bot — high-stakes, high-care build.",
    impact: "$3M+ volume · live product",
  },
  {
    name: "Prompture Group",
    image: "/work/prompture-group.png",
    blurb: "London trades — first serious digital presence.",
    impact: "Digital transformation",
  },
  {
    name: "Valuto",
    image: "/work/valuto.png",
    blurb: "Money skills for young people, wired into schools.",
    impact: "Liverpool schools · 11–18",
  },
  {
    name: "Shariff Sufi Foundation",
    image: "/work/shariff-sufi-foundation.png",
    blurb: "Camden charity — mission-led site on an urgent brief.",
    impact: "Tight brief · delivered clean",
  },
  {
    name: "Omar Technical School",
    image: "/work/omar-technical-school.png",
    blurb: "Elite youth football — booking built for every athlete.",
    impact: "Coach-grade booking",
    href: "https://www.omartechnicalschool.com",
  },
];

function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <article className="h-full flex flex-col rounded-2xl border border-ink/10 bg-card/80 overflow-hidden shadow-[0_1px_0_rgba(11,27,22,0.06)] transition-all duration-300 hover:border-ink/20 hover:shadow-[0_20px_50px_-24px_rgba(11,27,22,0.25)] hover:-translate-y-0.5">
      <div className="relative aspect-[16/11] w-full bg-cream-2">
        <Image
          src={p.image}
          alt={`${p.name} — product screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          priority={p.name === "Mayfair Motors" || p.name === "Lobsmash"}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream/90 to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl md:text-2xl text-moss-2 tracking-[-0.02em] leading-tight">
            {p.name}
          </h3>
          {p.href && (
            <span className="shrink-0 text-sprout text-xs font-semibold tracking-wide opacity-0 translate-y-0.5 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 motion-reduce:transition-none">
              Visit →
            </span>
          )}
        </div>
        <p className="text-[14px] md:text-[15px] text-ink/65 leading-snug line-clamp-2">
          {p.blurb}
        </p>
        <div className="mt-auto pt-1">
          <span className="inline-flex items-center rounded-full border border-ink/12 bg-cream/90 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-moss/80">
            {p.impact}
          </span>
        </div>
      </div>
    </article>
  );

  if (p.href) {
    return (
      <Link
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-sprout focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-2xl"
      >
        {inner}
      </Link>
    );
  }

  return inner;
}

export const SelectedWorkSection = () => {
  return (
    <section
      id="work"
      className="max-w-[1320px] mx-auto px-6 md:px-12 py-24 md:py-36"
    >
      <div className="flex items-center gap-4 mb-8">
        <span className="font-serif italic text-sprout text-lg">iv.</span>
        <span className="text-xs tracking-[0.25em] uppercase text-moss font-semibold">
          Selected work
        </span>
        <span className="flex-1 h-px bg-ink/15" />
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:items-end">
        <h2 className="font-serif text-moss-2 leading-[1.0] tracking-[-0.025em] text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px]">
          Calm craft.{" "}
          <span className="italic text-sprout">Sharp</span> when it counts.
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-ink/70 lg:text-right lg:max-w-none">
          Product, brand, and backend — handled with the same attention to
          detail at every scale — from a tight brief to a full product.
        </p>
      </div>

      <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </section>
  );
};

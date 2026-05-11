const CLIENTS = [
  "LobSmash",
  "Kurek Hersi",
  "Build Fund",
  "Omar Technical School",
  "Valuto",
  "AsterLite",
  "HyperTruth",
];

const Item = () => (
  <span className="font-serif text-2xl text-moss-2 whitespace-nowrap opacity-60">
    {CLIENTS.map((c, i) => (
      <span key={`${c}-${i}`}>
        {c}
        <span className="text-sprout italic mx-8">✦</span>
      </span>
    ))}
  </span>
);

export const SponsorsSection = () => {
  return (
    <section
      id="trusted"
      className="border-y border-ink/10 py-7 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto flex items-center gap-8 md:gap-12">
        <div className="font-serif italic text-base text-moss/70 whitespace-nowrap hidden md:block">
          A few of the people we&apos;ve built for
        </div>
        <div className="flex-1 marquee-mask overflow-hidden">
          <div className="marquee-track flex gap-16">
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </section>
  );
};

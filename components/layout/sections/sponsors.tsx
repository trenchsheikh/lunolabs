const CLIENTS = [
  "LobSmash",
  "Kurek Hersi",
  "Build Fund",
  "Omar Technical School",
  "Valuto",
  "AsterLite",
  "HyperTruth",
];

export const SponsorsSection = () => {
  return (
    <section
      id="trusted"
      className="border-y border-ink/10 py-7 px-6 md:px-12"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <p className="font-serif italic text-base text-moss/70 shrink-0 md:max-w-[200px]">
          A few of the people we&apos;ve built for
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-2 text-center md:text-left">
          {CLIENTS.map((c, i) => (
            <span key={c} className="inline-flex items-center gap-x-2">
              <span className="font-serif text-xl md:text-2xl text-moss-2/70 whitespace-nowrap">
                {c}
              </span>
              {i < CLIENTS.length - 1 ? (
                <span className="text-sprout italic select-none" aria-hidden>
                  ✦
                </span>
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

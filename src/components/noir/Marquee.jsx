const ITEMS = [
  "Lancements de marque",
  "Fashion shows",
  "Expériences immersives",
  "Scénographie",
  "Soirées privées",
  "Conventions",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {ITEMS.map((item, i) => (
      <span key={i} className="flex items-center">
        <span className="whitespace-nowrap px-8 font-display text-2xl font-bold uppercase tracking-tight text-bone/90 lg:text-4xl">
          {item}
        </span>
        <span className="text-xl text-signal">✺</span>
      </span>
    ))}
  </div>
);

export const Marquee = () => (
  <section data-testid="marquee-section" className="overflow-hidden border-y border-line bg-noir py-6 lg:py-8">
    <div className="marquee-track flex w-max">
      <Row />
      <Row />
    </div>
  </section>
);
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { SectionLabel, FadeUp } from "./shared";

const STATS = [
  { value: 120, suffix: "+", label: "Événements produits", testid: "stat-events" },
  { value: 18, suffix: "", label: "Villes", testid: "stat-cities" },
  { value: 42, suffix: "K", label: "Participants", testid: "stat-participants" },
  { value: 96, suffix: "%", label: "Clients récurrents", testid: "stat-recurring" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-signal">{suffix}</span>
    </span>
  );
};

export const Stats = () => (
  <section data-testid="stats-section" className="border-y border-line bg-coal px-6 py-28 sm:px-12 lg:px-20 lg:py-36">
    <FadeUp>
      <SectionLabel index="03" title="Scale" />
    </FadeUp>
    <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <FadeUp key={s.testid} delay={i * 0.1} className="border-t border-line pt-8">
          <div className="flex flex-col items-center text-center">
            <p data-testid={s.testid} className="font-display text-6xl font-extrabold tracking-tighter text-bone sm:text-7xl lg:text-8xl xl:text-[7.5rem]">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke sm:text-xs">
              {s.label}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  </section>
);
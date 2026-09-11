import { SectionLabel, MaskedLines, FadeUp } from "./shared";

const STEPS = [
  { num: "01", title: "Concept", desc: "Trouver l'idée qui mérite d'être vécue." },
  { num: "02", title: "Direction", desc: "Créer l'univers visuel et l'expérience." },
  { num: "03", title: "Production", desc: "Transformer la vision en réalité." },
  { num: "04", title: "Impact", desc: "Créer un moment dont on se souvient." },
];

export const Process = () => (
  <section id="approach" data-testid="process-section" className="border-t border-line px-6 py-32 sm:px-12 lg:px-20 lg:py-44">
    <FadeUp>
      <SectionLabel index="05" title="Approach" />
    </FadeUp>
    <h2 className="mt-14 font-display text-[8vw] font-extrabold uppercase leading-[0.95] tracking-tighter text-bone sm:text-[9vw] lg:text-8xl">
      <MaskedLines delay={0.1} lines={["De l'idée", "à l'impact."]} />
    </h2>

    <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:mt-32 lg:grid-cols-4 lg:gap-8">
      {STEPS.map((s, i) => (
        <FadeUp key={s.num} delay={i * 0.12} className="group border-t border-line pt-8">
          <p className="font-display text-7xl font-extrabold tracking-tighter text-stroke-faint transition-colors duration-500 group-hover:text-signal group-hover:[-webkit-text-stroke:0px] lg:text-8xl">
            {s.num}
          </p>
          <h3 className="mt-8 font-mono text-sm uppercase tracking-[0.3em] text-bone">
            {s.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-smoke">{s.desc}</p>
          <span className="mt-8 block h-px w-0 bg-signal transition-all duration-700 group-hover:w-full" />
        </FadeUp>
      ))}
    </div>
  </section>
);
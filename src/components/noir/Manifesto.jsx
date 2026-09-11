import { SectionLabel, MaskedLines, FadeUp } from "./shared";

const INSERT_IMG =
  "https://images.unsplash.com/photo-1586966145770-503e990fa98f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMGludGVyaW9yJTIwZHJhbWF0aWMlMjBsaWdodGluZyUyMGx1eHVyeSUyMGV2ZW50JTIwaW5zdGFsbGF0aW9uJTIwbmVvbiUyMHllbGxvdyUyMGFtYmVyfGVufDB8fHx8MTc4OTA3MTUxM3ww&ixlib=rb-4.1.0&q=85&w=900";

export const Manifesto = () => (
  <section data-testid="manifesto-section" className="relative px-6 py-32 sm:px-12 lg:px-20 lg:py-48">
    <FadeUp>
      <SectionLabel index="01" title="Manifesto" />
    </FadeUp>

    <h2 className="mt-14 max-w-6xl font-display text-4xl font-bold leading-[1.04] tracking-tight text-bone sm:text-5xl lg:text-7xl">
      <MaskedLines
        delay={0.1}
        lines={[
          "Un événement n'est pas",
          "simplement un moment.",
          "C'est une impression",
          <>qui <span className="text-signal">reste.</span></>,
        ]}
      />
    </h2>

    <div className="mt-20 flex flex-col gap-12 lg:mt-28 lg:flex-row lg:items-end lg:justify-between">
      <FadeUp delay={0.15} className="max-w-xl">
        <p className="text-base leading-relaxed text-smoke sm:text-lg">
          Chez NOIR, nous pensons chaque événement comme une expérience complète.
          De la première idée au dernier détail, nous créons des moments qui attirent
          les regards, provoquent des émotions et restent dans les mémoires.
        </p>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          Studio créatif — Production — Direction artistique
        </p>
      </FadeUp>
      <FadeUp delay={0.25} className="w-full max-w-sm lg:w-80">
        <div className="overflow-hidden">
          <img
            src={INSERT_IMG}
            alt="Installation lumineuse ambrée dans une architecture sombre"
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-105"
            loading="lazy"
          />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
          Installation — Lumière
        </p>
      </FadeUp>
    </div>
  </section>
);
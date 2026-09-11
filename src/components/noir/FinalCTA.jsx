import { ArrowUpRight } from "lucide-react";
import { MaskedLines, FadeUp } from "./shared";

export const FinalCTA = () => (
  <section
    id="contact"
    data-testid="final-cta-section"
    className="relative flex min-h-[90svh] items-center justify-center overflow-hidden border-t border-line px-6 py-40"
  >
    <span
      aria-hidden
      className="text-stroke-faint pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[32vw] font-extrabold uppercase leading-none tracking-tighter opacity-60"
    >
      NOIR
    </span>

    <div className="relative z-10 flex flex-col items-center text-center">
      <FadeUp>
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-signal sm:text-xs">
          NOIR Studio — 2026
        </p>
      </FadeUp>
      <h2 className="mt-10 font-display text-[8vw] font-extrabold uppercase leading-[0.98] tracking-tighter text-bone sm:text-6xl lg:text-7xl">
        <MaskedLines
          delay={0.1}
          lines={[
            "Votre prochain événement",
            "mérite mieux qu'une",
            <>simple <span className="text-signal">soirée.</span></>,
          ]}
        />
      </h2>
      <FadeUp delay={0.3} className="mt-10 max-w-md">
        <p className="text-sm leading-relaxed text-smoke sm:text-base">
          Parlons de ce que nous pourrions créer ensemble.
        </p>
      </FadeUp>
      <FadeUp delay={0.45} className="mt-12">
        <a
          href="mailto:contact@noir.studio"
          data-testid="cta-contact-mail"
          className="group inline-flex items-center gap-4 bg-signal px-10 py-5 font-mono text-xs uppercase tracking-[0.2em] text-noir transition-colors duration-300 hover:bg-bone"
        >
          Créer quelque chose d'inoubliable
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </FadeUp>
    </div>
  </section>
);
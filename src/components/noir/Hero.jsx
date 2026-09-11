import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskedLines, FadeUp } from "./shared";

const HERO_IMG =
  "https://images.unsplash.com/photo-1558620013-a08999547a36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwZXZlbnQlMjBsaWdodGluZyUyMGZhc2hpb24lMjBzaG93JTIwc3RhZ2UlMjBjb25jZXJ0JTIwY3Jvd2QlMjBuaWdodCUyMGFtYmllbnR8ZW58MHx8fHwxNzg5MDcxNTEzfDA&ixlib=rb-4.1.0&q=85&w=2000";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" data-testid="hero-section" className="relative h-[100svh] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img
          src={HERO_IMG}
          alt="Foule en silhouette sous des faisceaux de lumière ambrée"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-noir/60" />
      <div className="absolute inset-0 bg-noir/20" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 sm:px-12 lg:px-20 lg:pb-24"
      >
        <FadeUp delay={2.4} y={20}>
          <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-signal sm:text-xs">
            NOIR Studio · Event Production
          </p>
        </FadeUp>

        <h1 className="font-display text-[8.4vw] font-extrabold uppercase leading-[0.86] tracking-tighter text-bone sm:text-[8.8vw] lg:text-[6.2vw]">
          <MaskedLines
            delay={2.3}
            lines={[
              "Des événements",
              "qui ne s'oublient",
              <>pas<span className="text-signal">.</span></>,
            ]}
          />
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <FadeUp delay={2.9} className="max-w-md">
            <p className="text-sm leading-relaxed text-bone/70 sm:text-base">
              Nous imaginons et produisons des expériences événementielles qui captent
              l'attention, créent de l'émotion et donnent une nouvelle dimension aux marques.
            </p>
          </FadeUp>
          <FadeUp delay={3.05} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-testid="hero-cta-discover"
              className="group inline-flex items-center gap-3 bg-signal px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-noir transition-colors duration-300 hover:bg-bone"
            >
              Découvrir nos projets
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:contact@noir.studio"
              data-testid="hero-cta-contact"
              className="inline-flex items-center border border-bone/40 px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-bone transition-colors duration-300 hover:border-signal hover:text-signal"
            >
              Parler de votre événement
            </a>
          </FadeUp>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-white/10 px-6 py-5 sm:px-12 lg:px-20"
      >
        <FadeUp delay={3.2} y={10}>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/60">
            Paris · Bruxelles · Anvers
          </span>
        </FadeUp>
        <FadeUp delay={3.2} y={10} className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/60">Scroll</span>
          <span className="scroll-line block h-8 w-px bg-signal" />
        </FadeUp>
      </motion.div>
    </section>
  );
};
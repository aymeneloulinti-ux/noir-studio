import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLines, FadeUp } from "./shared";

export const Statement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section
      ref={ref}
      data-testid="statement-section"
      className="relative overflow-hidden bg-noir px-6 py-36 sm:px-12 lg:px-20 lg:py-56"
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-px w-[40vw] -translate-x-1/2 bg-signal/40" />
      <motion.div style={{ x: drift }}>
        <h2 className="font-display text-[10vw] font-extrabold uppercase leading-[0.88] tracking-tighter sm:text-[11vw] lg:text-[10vw]">
          <MaskedLines
            lines={[
              <span key="a" className="text-stroke">No routine.</span>,
              <span key="b" className="text-bone">No ordinary.</span>,
              <span key="c" className="text-signal">NOIR.</span>,
            ]}
          />
        </h2>
      </motion.div>
      <FadeUp delay={0.2} className="mt-16 flex justify-end lg:mt-24">
        <p className="max-w-xl text-base leading-relaxed text-smoke sm:text-lg">
          Nous ne produisons pas simplement des événements. Nous créons des
          expériences dont les gens parlent encore après leur départ.
        </p>
      </FadeUp>
    </section>
  );
};
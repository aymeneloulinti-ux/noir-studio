import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const EASE = [0.76, 0, 0.24, 1];
export const EASE_OUT = [0.16, 1, 0.3, 1];

export const SectionLabel = ({ index, title }) => (
  <div className="flex items-center gap-4">
    <span className="font-mono text-xs tracking-[0.3em] text-signal">{index}</span>
    <span className="h-px w-10 bg-signal/60" />
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-smoke">{title}</span>
  </div>
);

export const MaskedLines = ({ lines, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });
  return (
    <span ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            animate={inView ? { y: "0%" } : { y: "115%" }}
            transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.13 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const FadeUp = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8%" }}
    transition={{ duration: 0.9, ease: EASE_OUT, delay }}
  >
    {children}
  </motion.div>
);
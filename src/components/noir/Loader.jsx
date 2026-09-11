import { motion } from "framer-motion";
import { EASE } from "./shared";

const LETTERS = ["N", "O", "I", "R"];

export const Loader = () => (
  <motion.div
    data-testid="loader"
    className="fixed inset-0 z-[100] flex items-center justify-center bg-noir"
    initial={{ y: "0%" }}
    animate={{ y: "-100%" }}
    transition={{ delay: 1.7, duration: 0.9, ease: EASE }}
  >
    <div className="flex overflow-hidden font-display text-[18vw] font-extrabold uppercase leading-none tracking-tighter text-bone sm:text-[12vw]">
      {LETTERS.map((l, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "115%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.09 }}
        >
          {l}
        </motion.span>
      ))}
      <motion.span
        className="inline-block text-signal"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
      >
        .
      </motion.span>
    </div>
    <motion.p
      className="absolute bottom-10 font-mono text-[10px] uppercase tracking-[0.4em] text-smoke"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      Production événementielle
    </motion.p>
  </motion.div>
);
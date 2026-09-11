import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "./shared";

const LINKS = [
  { label: "Projets", href: "#projects", testid: "nav-link-projects" },
  { label: "Expertise", href: "#expertise", testid: "nav-link-expertise" },
  { label: "Approche", href: "#approach", testid: "nav-link-approach" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: EASE }}
      >
        <div className="flex items-center justify-between px-6 py-6 sm:px-12 lg:px-20">
          <a
            href="#top"
            data-testid="nav-logo"
            className="font-display text-2xl font-extrabold uppercase leading-none tracking-tighter text-white"
          >
            NOIR<span className="text-signal">.</span>
          </a>
          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={l.testid}
                className="group relative font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-signal transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="mailto:contact@noir.studio"
              data-testid="nav-cta-contact"
              className="border border-white/40 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:border-signal hover:text-signal"
            >
              Parler d'un projet
            </a>
          </nav>
          <button
            data-testid="nav-menu-toggle"
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 lg:hidden"
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-px w-7 bg-white" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -3.5 : 0 }} className="block h-px w-7 bg-white" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-noir px-8"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav className="flex flex-col gap-2">
              {LINKS.map((l, i) => (
                <span key={l.href} className="block overflow-hidden">
                  <motion.a
                    href={l.href}
                    data-testid={`mobile-${l.testid}`}
                    onClick={() => setOpen(false)}
                    className="block font-display text-3xl font-extrabold uppercase leading-[1.1] tracking-tighter text-bone sm:text-5xl"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.08 }}
                  >
                    <span className="mr-4 font-mono text-xs text-signal">0{i + 1}</span>
                    {l.label}
                  </motion.a>
                </span>
              ))}
            </nav>
            <motion.div
              className="mt-16 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
                Paris · Bruxelles · Anvers
              </span>
              <a href="mailto:contact@noir.studio" data-testid="mobile-menu-mail" className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">
                contact@noir.studio
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
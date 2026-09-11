import { useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionLabel, MaskedLines, FadeUp, EASE } from "./shared";

const SERVICES = [
  {
    num: "01",
    title: "Brand Events",
    desc: "Lancements de produits, activations de marque et événements presse.",
    tags: ["Lancement", "Activation", "Presse"],
    img: "https://images.unsplash.com/photo-1605467846716-32100974049c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwzfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMGludGVyaW9yJTIwZHJhbWF0aWMlMjBsaWdodGluZyUyMGx1eHVyeSUyMGV2ZW50JTIwaW5zdGFsbGF0aW9uJTIwbmVvbiUyMHllbGxvdyUyMGFtYmVyfGVufDB8fHx8MTc4OTA3MTUxM3ww&ixlib=rb-4.1.0&q=85&w=800",
  },
  {
    num: "02",
    title: "Corporate",
    desc: "Conventions, séminaires, soirées et événements internes.",
    tags: ["Convention", "Séminaire", "Soirée"],
    img: "https://images.unsplash.com/photo-1644786283596-5283bd41892a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwZXZlbnQlMjBsaWdodGluZyUyMGZhc2hpb24lMjBzaG93JTIwc3RhZ2UlMjBjb25jZXJ0JTIwY3Jvd2QlMjBuaWdodCUyMGFtYmllbnR8ZW58MHx8fHwxNzg5MDcxNTEzfDA&ixlib=rb-4.1.0&q=85&w=800",
  },
  {
    num: "03",
    title: "Immersive",
    desc: "Scénographie, lumière, installations et expériences immersives.",
    tags: ["Scénographie", "Lumière", "Installation"],
    img: "https://images.unsplash.com/photo-1688128320295-2e6eae0bf912?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMGludGVyaW9yJTIwZHJhbWF0aWMlMjBsaWdodGluZyUyMGx1eHVyeSUyMGV2ZW50JTIwaW5zdGFsbGF0aW9uJTIwbmVvbiUyMHllbGxvdyUyMGFtYmVyfGVufDB8fHx8MTc4OTA3MTUxM3ww&ixlib=rb-4.1.0&q=85&w=800",
  },
  {
    num: "04",
    title: "Production",
    desc: "Direction artistique, production, coordination et logistique.",
    tags: ["Direction artistique", "Coordination", "Logistique"],
    img: "https://images.unsplash.com/photo-1586966145770-503e990fa98f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxkYXJrJTIwYXJjaGl0ZWN0dXJhbCUyMGludGVyaW9yJTIwZHJhbWF0aWMlMjBsaWdodGluZyUyMGx1eHVyeSUyMGV2ZW50JTIwaW5zdGFsbGF0aW9uJTIwbmVvbiUyMHllbGxvdyUyMGFtYmVyfGVufDB8fHx8MTc4OTA3MTUxM3ww&ixlib=rb-4.1.0&q=85&w=800",
  },
];

export const Services = () => {
  const [open, setOpen] = useState(null);
  const [hovered, setHovered] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 30 });
  const sy = useSpring(y, { stiffness: 250, damping: 30 });
  const sectionRef = useRef(null);

  const onMove = (e) => {
    x.set(e.clientX + 40);
    y.set(e.clientY - 100);
  };

  return (
    <section
      id="expertise"
      ref={sectionRef}
      onMouseMove={onMove}
      data-testid="services-section"
      className="relative px-6 py-32 sm:px-12 lg:px-20 lg:py-44"
    >
      <FadeUp>
        <SectionLabel index="04" title="Expertise" />
      </FadeUp>
      <h2 className="mt-14 font-display text-[8vw] font-extrabold uppercase leading-[0.98] tracking-tighter text-bone sm:text-[7.5vw] lg:text-7xl">
        <MaskedLines
          delay={0.1}
          lines={[
            "Nous créons l'expérience.",
            <span key="s" className="text-stroke">Vous créez l'impact.</span>,
          ]}
        />
      </h2>

      <FadeUp delay={0.15} className="mt-20 lg:mt-28">
        <div className="border-t border-line">
          {SERVICES.map((s, i) => (
            <div key={s.num} className="border-b border-line">
              <button
                data-testid={`service-row-${s.num}`}
                onClick={() => setOpen(open === i ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group flex w-full items-center gap-6 py-8 text-left lg:gap-12 lg:py-10"
              >
                <span className="font-mono text-sm tracking-[0.2em] text-signal transition-transform duration-500 group-hover:translate-x-2">
                  {s.num}
                </span>
                <span className="flex-1 font-display text-3xl font-bold uppercase tracking-tight text-bone transition-all duration-500 group-hover:translate-x-3 group-hover:text-signal sm:text-4xl lg:text-6xl">
                  {s.title}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-bone transition-colors duration-300 group-hover:border-signal group-hover:text-signal"
                >
                  <Plus className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 pb-10 pl-12 pr-4 lg:flex-row lg:items-end lg:justify-between lg:pl-24">
                      <p className="max-w-xl text-base leading-relaxed text-smoke">{s.desc}</p>
                      <div className="flex flex-wrap gap-3">
                        {s.tags.map((t) => (
                          <span key={t} className="border border-line px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-smoke">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeUp>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
        style={{ x: sx, y: sy }}
      >
        <AnimatePresence mode="wait">
          {hovered !== null && (
            <motion.img
              key={hovered}
              src={SERVICES[hovered].img}
              alt=""
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="h-56 w-80 object-cover"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
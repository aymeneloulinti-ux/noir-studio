import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel, MaskedLines, FadeUp } from "./shared";

const PROJECTS = [
  {
    id: "lumen",
    num: "01",
    title: "LUMEN",
    meta: "Lancement de marque · Bruxelles · 2026",
    desc: "Une expérience immersive imaginée pour révéler une nouvelle identité de marque.",
    img: "https://images.unsplash.com/photo-1709887597530-75efb5044326?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbHV4dXJ5JTIwZXZlbnQlMjBsaWdodGluZyUyMGZhc2hpb24lMjBzaG93JTIwc3RhZ2UlMjBjb25jZXJ0JTIwY3Jvd2QlMjBuaWdodCUyMGFtYmllbnR8ZW58MHx8fHwxNzg5MDcxNTEzfDA&ixlib=rb-4.1.0&q=85&w=1600",
    alt: "Public baigné de lumière dans une architecture monumentale",
    wrap: "lg:col-span-7",
    aspect: "aspect-[16/11]",
  },
  {
    id: "after-dark",
    num: "02",
    title: "AFTER DARK",
    meta: "Expérience privée · Paris · 2026",
    desc: "Une soirée conçue comme une expérience sensorielle, de l'entrée au dernier morceau.",
    img: "https://images.unsplash.com/photo-1686626369096-e78d76a1cfd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHw0fHxkYXJrJTIwbHV4dXJ5JTIwZXZlbnQlMjBsaWdodGluZyUyMGZhc2hpb24lMjBzaG93JTIwc3RhZ2UlMjBjb25jZXJ0JTIwY3Jvd2QlMjBuaWdodCUyMGFtYmllbnR8ZW58MHx8fHwxNzg5MDcxNTEzfDA&ixlib=rb-4.1.0&q=85&w=1600",
    alt: "Silhouettes dans une soirée sombre baignée de lumières rouges",
    wrap: "lg:col-span-5 lg:mt-40",
    aspect: "aspect-[4/5]",
  },
  {
    id: "next-2026",
    num: "03",
    title: "NEXT / 2026",
    meta: "Convention internationale · Anvers · 2026",
    desc: "Une convention internationale transformée en véritable spectacle de marque.",
    img: "https://images.unsplash.com/photo-1644786283596-5283bd41892a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwZXZlbnQlMjBsaWdodGluZyUyMGZhc2hpb24lMjBzaG93JTIwc3RhZ2UlMjBjb25jZXJ0JTIwY3Jvd2QlMjBuaWdodCUyMGFtYmllbnR8ZW58MHx8fHwxNzg5MDcxNTEzfDA&ixlib=rb-4.1.0&q=85&w=1600",
    alt: "Scène monumentale avec écran géant lumineux face au public",
    wrap: "lg:col-span-8 lg:col-start-3",
    aspect: "aspect-[16/9]",
  },
];

const ProjectCard = ({ project }) => (
  <FadeUp className={`col-span-1 ${project.wrap}`}>
    <article data-testid={`project-card-${project.id}`} data-cursor className="group cursor-pointer">
      <div className="relative overflow-hidden">
        <motion.img
          src={project.img}
          alt={project.alt}
          loading="lazy"
          className={`${project.aspect} w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]`}
        />
        <div className="pointer-events-none absolute inset-0 bg-noir/20 transition-opacity duration-700 group-hover:opacity-0" />
        <span className="absolute left-5 top-5 font-mono text-xs tracking-[0.3em] text-bone/90">
          {project.num}
        </span>
        <span className="absolute bottom-5 right-5 flex h-14 w-14 translate-y-4 items-center justify-center bg-signal text-noir opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-6 w-6" />
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-4xl font-extrabold uppercase tracking-tighter text-bone transition-colors duration-500 group-hover:text-signal sm:text-5xl lg:text-6xl">
            {project.title}
          </h3>
          <span className="hidden font-mono text-xs tracking-[0.3em] text-signal sm:block">
            {project.num}
          </span>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke sm:text-xs">
          {project.meta}
        </p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-smoke">{project.desc}</p>
      </div>
    </article>
  </FadeUp>
);

export const Projects = () => (
  <section id="projects" data-testid="projects-section" className="px-6 py-32 sm:px-12 lg:px-20 lg:py-44">
    <FadeUp>
      <SectionLabel index="02" title="Selected Work" />
    </FadeUp>
    <h2 className="mt-14 font-display text-[8vw] font-extrabold uppercase leading-[0.95] tracking-tighter text-bone sm:text-[9vw] lg:text-8xl">
      <MaskedLines
        delay={0.1}
        lines={[
          "Des expériences.",
          "Des univers.",
          <span key="s" className="text-stroke">Des souvenirs.</span>,
        ]}
      />
    </h2>
    <div className="mt-20 grid grid-cols-1 gap-16 lg:mt-32 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-40">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  </section>
);
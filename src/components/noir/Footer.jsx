import { ArrowUp } from "lucide-react";

const LINKS = [
  { label: "Projects", href: "#projects", testid: "footer-link-projects" },
  { label: "Expertise", href: "#expertise", testid: "footer-link-expertise" },
  { label: "Approach", href: "#approach", testid: "footer-link-approach" },
  { label: "Contact", href: "#contact", testid: "footer-link-contact" },
];

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-line bg-noir">
    <div className="flex flex-col gap-14 px-6 py-16 sm:px-12 lg:flex-row lg:items-start lg:justify-between lg:px-20 lg:py-20">
      <div>
        <p className="font-display text-4xl font-extrabold uppercase tracking-tighter text-bone">
          NOIR<span className="text-signal">.</span> Studio
        </p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
          Production événementielle & expériences de marque
        </p>
      </div>
      <nav className="flex flex-col gap-4">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-testid={l.testid}
            className="w-fit font-mono text-xs uppercase tracking-[0.25em] text-smoke transition-colors duration-300 hover:text-signal"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="flex flex-col gap-4 lg:text-right">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone">
          Paris · Bruxelles · Anvers
        </p>
        <a
          href="mailto:contact@noir.studio"
          data-testid="footer-mail"
          className="font-mono text-xs tracking-[0.25em] text-smoke transition-colors duration-300 hover:text-signal"
        >
          contact@noir.studio
        </a>
        <a
          href="#top"
          data-testid="footer-back-to-top"
          className="group mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-smoke transition-colors duration-300 hover:text-signal lg:justify-end"
        >
          Retour en haut
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
    <div className="flex flex-col gap-2 border-t border-line px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-20">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">© 2026 NOIR Studio</p>
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-smoke">
        Des événements qui ne s'oublient pas<span className="text-signal">.</span>
      </p>
    </div>
  </footer>
);
import { useEffect } from "react";
import Lenis from "lenis";
import { Loader } from "@/components/noir/Loader";
import { Cursor } from "@/components/noir/Cursor";
import { Nav } from "@/components/noir/Nav";
import { Hero } from "@/components/noir/Hero";
import { Marquee } from "@/components/noir/Marquee";
import { Manifesto } from "@/components/noir/Manifesto";
import { Projects } from "@/components/noir/Projects";
import { Stats } from "@/components/noir/Stats";
import { Services } from "@/components/noir/Services";
import { Statement } from "@/components/noir/Statement";
import { Process } from "@/components/noir/Process";
import { FinalCTA } from "@/components/noir/FinalCTA";
import { Footer } from "@/components/noir/Footer";

const NOISE =
  "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.25, anchors: true });
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-noir text-bone font-body antialiased">
      <Loader />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Projects />
        <Stats />
        <Services />
        <Statement />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-screen"
        style={{ backgroundImage: `url("${NOISE}")` }}
      />
    </div>
  );
}

export default App;
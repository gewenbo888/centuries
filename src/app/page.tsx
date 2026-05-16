import { CENTURIES } from "@/lib/content";
import { LangProvider } from "./components/LangContext";
import { TopBar } from "./components/TopBar";
import { Hero } from "./components/Hero";
import { Timeline } from "./components/Timeline";
import { Thesis } from "./components/Thesis";
import { CenturySection } from "./components/CenturySection";
import { Patterns, Closing, Footer } from "./components/Patterns";

export default function Page() {
  return (
    <LangProvider>
      <div className="grain vignette relative">
        <TopBar />
        <main>
          <Hero />
          <Timeline />
          <Thesis />

          <section id="chapters" className="relative">
            <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-20 sm:py-28 border-t border-parchment/10">
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <span className="font-mono text-[11px] text-ochre tracking-[0.22em] uppercase">§ 03</span>
                  <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-parchment/55">
                    Thirty-One Chapters · 三十一章
                  </p>
                </div>
                <div className="md:col-span-9 max-w-[62ch]">
                  <h2 className="font-display italic text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-parchment">
                    Down the corridor of centuries, one room at a time.
                  </h2>
                </div>
              </div>
            </div>
            {CENTURIES.map((c, i) => (
              <CenturySection
                key={c.id}
                c={c}
                n={i}
                prev={i > 0 ? CENTURIES[i - 1] : null}
                next={i < CENTURIES.length - 1 ? CENTURIES[i + 1] : null}
              />
            ))}
          </section>

          <Patterns />
          <Closing />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
}

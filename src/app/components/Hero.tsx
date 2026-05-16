"use client";

import { useLang } from "./LangContext";
import { HERO, CENTURIES } from "@/lib/content";

export function Hero() {
  const { t, lang } = useLang();

  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-between pt-14 sm:pt-16 overflow-hidden">
      {/* Subtle classical engraving */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full opacity-[0.05] text-ochre">
          <g stroke="currentColor" strokeWidth="0.5" fill="none">
            <circle cx="800" cy="450" r="380"/>
            <circle cx="800" cy="450" r="300"/>
            <circle cx="800" cy="450" r="220"/>
            <line x1="0" y1="450" x2="1600" y2="450"/>
            <line x1="800" y1="0" x2="800" y2="900"/>
            {Array.from({length: 24}).map((_, i) => {
              const a = (i / 24) * Math.PI * 2;
              return <line key={i} x1={800} y1={450} x2={800 + Math.cos(a)*380} y2={450 + Math.sin(a)*380} />
            })}
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1500px] w-full mx-auto px-5 sm:px-8 pt-10 sm:pt-20 flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="h-px w-10 bg-ochre/60" />
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-ochre/85">
            {t(HERO.pre)}
          </span>
        </div>

        <h1 className="font-display font-light text-[15vw] sm:text-[11vw] md:text-[140px] lg:text-[175px] xl:text-[210px] leading-[0.88] tracking-tight text-parchment">
          <span className="italic">{t(HERO.title)}</span>
        </h1>

        <div className="mt-8 sm:mt-10 flex flex-col gap-6 max-w-[60ch]">
          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-bone/95 leading-tight tracking-tight">
            {t(HERO.subtitle)}
          </p>
          <p className="font-sans text-[15px] sm:text-[17px] text-parchment/80 leading-relaxed">
            {t(HERO.lede)}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-3 font-mono text-[12px] tracking-[0.18em] uppercase">
            <a href="#timeline" className="px-4 py-2.5 bg-ochre text-ink font-medium hover:bg-parchment transition-colors">
              {t(HERO.ctaPrimary)} →
            </a>
            <a href="#thesis" className="px-4 py-2.5 border border-parchment/30 text-parchment hover:border-ochre hover:text-ochre transition-colors">
              {t(HERO.ctaSecondary)}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom strip: era markers */}
      <div className="relative w-full border-t border-parchment/10 mt-10 sm:mt-16">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-4 sm:py-5">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-parchment/50 mb-2 flex items-center gap-3">
            <span className="h-px w-5 bg-parchment/30"></span>
            <span>{lang === "zh" ? "三十一个世纪 · 1000 BCE → 2025" : "31 centuries · 1000 BCE → 2025"}</span>
          </div>
          <div className="grid grid-cols-[repeat(31,minmax(0,1fr))] gap-px h-6 sm:h-8">
            {CENTURIES.map((c, i) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                title={`${c.romanCentury} · ${t(c.theme)}`}
                className="h-full cell-hover"
                style={{ background: `${c.color}30`, borderTop: `2px solid ${c.color}` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1 font-mono text-[9px] text-parchment/35 tracking-wider">
            <span>−1000</span>
            <span>0</span>
            <span>+1000</span>
            <span>+2025</span>
          </div>
        </div>
      </div>
    </section>
  );
}

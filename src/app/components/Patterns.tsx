"use client";

import { useLang } from "./LangContext";
import { PATTERNS, CLOSING } from "@/lib/content";

export function Patterns() {
  const { t, lang } = useLang();
  return (
    <section id="patterns" className="relative py-24 sm:py-32 border-t border-parchment/10">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-6 md:gap-12 mb-14">
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] text-ochre tracking-[0.22em] uppercase">§ 04</span>
            <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-parchment/55">
              {lang === "zh" ? "横向规律" : "Cross-Century Patterns"}
            </p>
          </div>
          <div className="md:col-span-9 max-w-[62ch]">
            <h2 className="font-display italic text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-parchment">
              {t(PATTERNS.title)}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-parchment/10">
          {PATTERNS.items.map((p, i) => (
            <div key={i} className="bg-ink p-7 sm:p-9 flex gap-5 sm:gap-6">
              <span className="font-display italic text-5xl sm:text-6xl text-ochre/80 leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-parchment tracking-tight mb-3 leading-tight">
                  {t(p.title)}
                </h3>
                <p className="text-[15px] sm:text-base text-parchment/75 leading-relaxed">
                  {t(p.body)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  const { t, lang } = useLang();
  return (
    <section className="relative py-28 sm:py-40 border-t border-parchment/10 bg-gradient-to-b from-ink to-black">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2 md:col-start-2">
            <span className="font-mono text-[11px] text-ochre tracking-[0.22em] uppercase">§ 05</span>
          </div>
          <div className="md:col-span-8 max-w-[60ch]">
            <h2 className="font-display italic text-3xl sm:text-5xl md:text-6xl text-parchment leading-[1.08] tracking-tight">
              {t(CLOSING.title)}
            </h2>
            <p className="mt-7 text-[16px] sm:text-[18px] text-parchment/80 leading-relaxed">
              {t(CLOSING.body)}
            </p>
            <p className="mt-10 font-mono text-[11px] tracking-[0.22em] uppercase text-ochre">
              {lang === "zh" ? "↗ 你的世纪 · 仍在被书写" : "↗ Your century · still being written"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang } = useLang();
  return (
    <footer className="border-t border-parchment/10 py-12">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-[12px] font-mono tracking-[0.16em] uppercase text-parchment/50">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 32 32" className="w-5 h-5 text-ochre">
            <path d="M8 24 L8 8 L14 8 L14 24 M18 8 L18 24 M18 8 L24 24 M24 8 L24 24" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="square"/>
          </svg>
          <span>The Centuries · {lang === "zh" ? "世纪志" : "A 3,000-Year Atlas"}</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="https://psyverse.fun" target="_blank" className="hover:text-ochre transition-colors">↗ Psyverse</a>
          <a href="https://psyverse.fun/atlas.html" target="_blank" className="hover:text-ochre transition-colors">↗ Atlas</a>
          <a href="https://github.com/gewenbo888/centuries" target="_blank" className="hover:text-ochre transition-colors">↗ Source</a>
        </div>
        <div className="text-parchment/35">{lang === "zh" ? "由 Gewenbo 编纂" : "Curated by Gewenbo"}</div>
      </div>
    </footer>
  );
}

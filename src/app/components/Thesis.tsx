"use client";

import { useLang } from "./LangContext";
import { THESIS } from "@/lib/content";

export function Thesis() {
  const { t, lang } = useLang();
  return (
    <section id="thesis" className="relative py-24 sm:py-32 border-t border-parchment/10 bg-ink2/50">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] text-ochre tracking-[0.22em] uppercase">§ 02</span>
            <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-parchment/55">
              {lang === "zh" ? "论纲" : "Thesis"}
            </p>
          </div>
          <div className="md:col-span-9 max-w-[68ch]">
            <h2 className="font-display italic text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-parchment">
              {t(THESIS.title)}
            </h2>
            <p className="mt-7 text-[17px] sm:text-[19px] text-parchment/85 leading-[1.65] dropcap" style={{ ["--c-gold" as string]: "#c9a96e" }}>
              {t(THESIS.body)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

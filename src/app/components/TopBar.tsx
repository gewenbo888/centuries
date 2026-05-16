"use client";

import { useLang } from "./LangContext";

export function TopBar() {
  const { lang, setLang } = useLang();
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-ink/80 border-b border-parchment/10">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 h-12 sm:h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6 text-ochre group-hover:text-gold transition-colors">
            <path d="M8 24 L8 8 L14 8 L14 24 M18 8 L18 24 M18 8 L24 24 M24 8 L24 24" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="square"/>
          </svg>
          <span className="font-display italic font-medium tracking-tight text-base sm:text-lg text-parchment">
            {lang === "zh" ? "世纪志" : "The Centuries"}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] text-parchment/65 font-mono">
          <a href="#timeline" className="hover:text-ochre transition-colors">{lang === "zh" ? "时间线" : "Timeline"}</a>
          <a href="#thesis" className="hover:text-ochre transition-colors">{lang === "zh" ? "论纲" : "Thesis"}</a>
          <a href="#chapters" className="hover:text-ochre transition-colors">{lang === "zh" ? "三十一章" : "31 Chapters"}</a>
          <a href="#patterns" className="hover:text-ochre transition-colors">{lang === "zh" ? "规律" : "Patterns"}</a>
        </nav>

        <div className="flex items-center gap-1 text-[12px] font-mono">
          <button onClick={() => setLang("en")} className={`px-2 py-1 transition-colors ${lang === "en" ? "text-ochre" : "text-parchment/45 hover:text-parchment/85"}`}>EN</button>
          <span className="text-parchment/20">·</span>
          <button onClick={() => setLang("zh")} className={`px-2 py-1 transition-colors ${lang === "zh" ? "text-ochre" : "text-parchment/45 hover:text-parchment/85"}`}>中文</button>
        </div>
      </div>
    </header>
  );
}

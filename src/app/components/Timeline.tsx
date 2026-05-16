"use client";

import { useState } from "react";
import { useLang } from "./LangContext";
import { CENTURIES, ERAS, type Era } from "@/lib/content";

export function Timeline() {
  const { t, lang } = useLang();
  const [eraFilter, setEraFilter] = useState<Era | null>(null);

  const filtered = eraFilter ? CENTURIES.filter((c) => c.era === eraFilter) : CENTURIES;

  return (
    <section id="timeline" className="relative py-24 sm:py-32 border-t border-parchment/10">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-6 md:gap-12 mb-10">
          <div className="md:col-span-3">
            <span className="font-mono text-[11px] text-ochre tracking-[0.22em] uppercase">§ 01</span>
            <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-parchment/55">
              {lang === "zh" ? "总览" : "The Table"}
            </p>
          </div>
          <div className="md:col-span-9 max-w-[62ch]">
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-light leading-[1.02] tracking-tight text-parchment">
              {lang === "zh" ? "三十一个世纪，一目了然。" : "Thirty-one centuries, at one glance."}
            </h2>
            <p className="mt-5 text-[16px] sm:text-[18px] text-parchment/75 leading-relaxed">
              {lang === "zh"
                ? "每一行是一个世纪。每一个世纪有一个主题事件 —— 一句话能代表那一百年的关键人物、关键技术、关键转折。从大卫王朝到信息时代。"
                : "One row, one century. Each century has a defining theme — one phrase that stands for the people, the technology, and the turning point of that hundred years. From David's kingdom to the Information Age."}
            </p>
          </div>
        </div>

        {/* Era filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <FilterButton active={eraFilter === null} onClick={() => setEraFilter(null)}>
            {lang === "zh" ? `全部 · ${CENTURIES.length}` : `All · ${CENTURIES.length}`}
          </FilterButton>
          {Object.entries(ERAS).map(([key, era]) => (
            <FilterButton
              key={key}
              active={eraFilter === key}
              onClick={() => setEraFilter(key as Era)}
              color={era.color}
            >
              {t(era)}
            </FilterButton>
          ))}
        </div>

        {/* The table */}
        <div className="-mx-5 sm:mx-0 overflow-x-auto">
          <table className="min-w-[760px] w-full text-left font-sans border-collapse">
            <thead>
              <tr className="border-y border-ochre/40 text-ochre">
                <th className="py-3.5 px-4 sm:px-5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium w-[20%]">
                  {lang === "zh" ? "世纪" : "Century"}
                </th>
                <th className="py-3.5 px-4 sm:px-5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium w-[24%]">
                  {lang === "zh" ? "主题事件" : "Theme"}
                </th>
                <th className="py-3.5 px-4 sm:px-5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium hidden sm:table-cell">
                  {lang === "zh" ? "概要" : "Headline"}
                </th>
                <th className="py-3.5 px-4 sm:px-5 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase font-medium w-[14%] hidden md:table-cell">
                  {lang === "zh" ? "区域" : "Region"}
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} className="border-b border-parchment/10 cell-hover">
                  <td className="py-4 px-4 sm:px-5 align-top">
                    <a href={`#${c.id}`} className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] tracking-[0.16em] text-ochre/80 w-12 shrink-0 roman">
                        {c.romanCentury}
                      </span>
                      <span className="font-display text-base sm:text-lg font-medium text-parchment tracking-tight">
                        {t(c.label)}
                      </span>
                    </a>
                  </td>
                  <td className="py-4 px-4 sm:px-5 align-top">
                    <a href={`#${c.id}`} className="block">
                      <span className="font-display italic text-lg sm:text-xl leading-tight" style={{ color: c.color }}>
                        {t(c.theme)}
                      </span>
                    </a>
                  </td>
                  <td className="py-4 px-4 sm:px-5 align-top text-parchment/75 text-[13px] sm:text-[14px] hidden sm:table-cell leading-snug">
                    {t(c.themeShort)}
                  </td>
                  <td className="py-4 px-4 sm:px-5 align-top text-parchment/55 text-[12px] hidden md:table-cell leading-snug">
                    {t(c.region)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 text-parchment/45 font-mono text-[11px] tracking-[0.14em] uppercase">
          {lang === "zh" ? "↑ 点击任一行，跳至该世纪深度长读" : "↑ Click any row to jump to its long-read"}
        </p>
      </div>
    </section>
  );
}

function FilterButton({
  children,
  active,
  onClick,
  color,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 font-mono text-[10px] tracking-[0.18em] uppercase transition-all border ${
        active
          ? "bg-parchment/90 text-ink border-parchment"
          : "text-parchment/65 border-parchment/20 hover:border-parchment/50 hover:text-parchment"
      }`}
      style={active && color ? { background: color, borderColor: color, color: "#0c0908" } : undefined}
    >
      {children}
    </button>
  );
}

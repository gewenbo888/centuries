"use client";

import { useLang } from "./LangContext";
import { type Century, ERAS } from "@/lib/content";

export function CenturySection({ c, n, prev, next }: { c: Century; n: number; prev: Century | null; next: Century | null }) {
  const { t, lang } = useLang();
  const era = ERAS[c.era];

  return (
    <section id={c.id} className="relative border-t border-parchment/10 py-20 sm:py-24 scroll-mt-16">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
        {/* Header row */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-10 sm:mb-14">
          <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-3 items-baseline md:items-start">
            <span
              className="font-display italic text-7xl sm:text-8xl leading-none -mt-2 roman"
              style={{ color: c.color }}
            >
              {c.romanCentury.replace(" BCE", "").replace(" CE", "")}
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ochre/80">
                {c.yearRange}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-parchment/45">
                {t(era)}
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-parchment/40 mt-1">
                {t(c.region)}
              </span>
            </div>
          </div>

          <div className="md:col-span-9">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-parchment/45 mb-2">{t(c.label)}</p>
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-light leading-[0.95] tracking-tight text-parchment">
              {t(c.theme)}
            </h2>
            <p className="mt-4 sm:mt-5 font-display italic text-xl sm:text-2xl text-bone/95 leading-snug max-w-[55ch]">
              {t(c.themeShort)}
            </p>
          </div>
        </div>

        {/* Body + events split */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-14">
          {/* Long-read */}
          <div className="md:col-span-7">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-6 bg-ochre/60" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ochre/80">
                {lang === "zh" ? "长读" : "Long Read"}
              </span>
            </div>
            <p className="text-[16px] sm:text-[17px] text-parchment/85 leading-[1.7]">
              {t(c.body)}
            </p>

            {/* Invented / Ended / Legacy strip */}
            <div className="mt-10 grid sm:grid-cols-3 gap-px bg-parchment/10">
              <Cell
                label={{ en: "Invented", zh: "发明" }}
                body={t(c.invented)}
                color={c.color}
              />
              <Cell
                label={{ en: "Ended", zh: "终结" }}
                body={t(c.ended)}
                color="#a83232"
              />
              <Cell
                label={{ en: "Legacy", zh: "遗产" }}
                body={t(c.legacy)}
                color="#e8dccc"
              />
            </div>

            {/* Figures */}
            {c.figures.length > 0 && (
              <div className="mt-10 hairline pt-6">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-parchment/55 mb-3">
                  {lang === "zh" ? "代表人物" : "Figures"}
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-[14px] sm:text-[15px]">
                  {c.figures.map((f, i) => (
                    <span key={i} className="text-parchment/85 font-display italic">
                      {t(f)}
                      {i < c.figures.length - 1 && <span className="text-parchment/30 ml-5">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Events timeline */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-20">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-ochre/60" />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-ochre/80">
                  {lang === "zh" ? "纪事" : "Events"}
                </span>
              </div>
              <ol className="relative">
                <span
                  className="absolute left-[64px] top-1 bottom-1 w-px"
                  style={{ background: `linear-gradient(to bottom, ${c.color}80, transparent)` }}
                />
                {c.events.map((e, i) => (
                  <li key={i} className="flex items-start gap-4 pb-5 last:pb-0">
                    <span className="font-mono text-[11px] text-parchment/55 w-[60px] shrink-0 pt-0.5 tabular-nums text-right">
                      {e.y}
                    </span>
                    <span
                      className="block w-2 h-2 rounded-full mt-2 shrink-0 ring-2 ring-ink"
                      style={{ background: c.color }}
                    />
                    <span className="text-[14px] sm:text-[15px] text-parchment/85 leading-snug">
                      {lang === "zh" ? e.zh : e.en}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-16 hairline pt-6 flex justify-between gap-4 font-mono text-[11px] tracking-[0.18em] uppercase">
          {prev ? (
            <a href={`#${prev.id}`} className="text-parchment/55 hover:text-ochre transition-colors max-w-[40%]">
              ← {prev.romanCentury} · <span className="font-display italic normal-case text-[14px]" style={{ color: prev.color }}>{t(prev.theme)}</span>
            </a>
          ) : <span />}
          {next ? (
            <a href={`#${next.id}`} className="text-parchment/55 hover:text-ochre transition-colors text-right max-w-[40%]">
              {next.romanCentury} · <span className="font-display italic normal-case text-[14px]" style={{ color: next.color }}>{t(next.theme)}</span> →
            </a>
          ) : <span />}
        </div>
      </div>
    </section>
  );
}

function Cell({
  label,
  body,
  color,
}: {
  label: { en: string; zh: string };
  body: string;
  color: string;
}) {
  const { t } = useLang();
  return (
    <div className="bg-ink p-5">
      <div className="flex items-center gap-2 mb-2.5">
        <span className="h-px w-4" style={{ background: color }} />
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color }}>
          {t(label)}
        </span>
      </div>
      <p className="text-[13px] text-parchment/85 leading-relaxed">{body}</p>
    </div>
  );
}

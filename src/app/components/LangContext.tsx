"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: <T>(b: { en: T; zh: T }) => T };
const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("cn-lang") as Lang)) || null;
    const browser = typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("zh") ? "zh" : "en";
    const initial: Lang = saved ?? (browser as Lang);
    setLangState(initial);
    document.documentElement.lang = initial === "zh" ? "zh-CN" : "en";
    document.documentElement.classList.toggle("zh", initial === "zh");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("cn-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    document.documentElement.classList.toggle("zh", l === "zh");
  };

  const t = <T,>(b: { en: T; zh: T }) => b[lang];

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

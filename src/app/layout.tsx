import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const zh = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-zh",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centuries.psyverse.fun"),
  title: "The Centuries · 世纪志 — Three Thousand Years of Civilization, One Century at a Time",
  description:
    "A bilingual long-read atlas of 31 centuries — from David's Kingdom (10c BCE) to the Information Age (21c). What each century invented, ended, and bequeathed.",
  keywords: [
    "history of civilization",
    "centuries",
    "world history",
    "timeline",
    "Axial Age",
    "Pax Romana",
    "Renaissance",
    "Enlightenment",
    "Industrial Revolution",
    "Information Age",
    "世纪志",
    "文明史",
    "世界史",
    "时间线",
    "轴心时代",
    "罗马和平",
    "文艺复兴",
    "启蒙运动",
    "工业革命",
    "信息时代",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    title: "The Centuries · 世纪志",
    description:
      "Three thousand years of civilization, one century at a time. From David's Kingdom to the Information Age. Bilingual EN · 中文.",
    url: "https://centuries.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Centuries · 世纪志",
    description:
      "Three thousand years of civilization, one century at a time. Bilingual long-read atlas of 31 centuries.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#0c0908" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable} ${zh.variable}`}>
      <body className="bg-ink text-parchment antialiased selection:bg-ochre/30 selection:text-parchment">
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

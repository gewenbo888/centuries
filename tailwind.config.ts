import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0908",
        ink2: "#13100e",
        parchment: "#e8dccc",
        bone: "#cdbfa6",
        sepia: "#a18b6f",
        ochre: "#c9a96e",
        gold: "#d4a85a",
        rust: "#a83232",
        rule: "#2a221c",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        zh: ["var(--font-zh)", "var(--font-display)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;

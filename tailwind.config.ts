import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary green scale
        brand: {
          50: "#edfcf3",
          100: "#d3f8e0",
          200: "#aaf0c8",
          300: "#72e3a8",
          400: "#3acd84",
          500: "#16b56a",
          600: "#0a9a58",
          700: "#097a48",
          800: "#0b613b",
          900: "#0a4f32",
          950: "#052e1d",
        },
        // Deep forest green (headings / strong accents)
        forest: {
          DEFAULT: "#06351f",
          900: "#06351f",
          800: "#0a4429",
        },
        // Soft mint backgrounds
        mint: {
          50: "#f5faf7",
          100: "#eef6f1",
          200: "#e4f1e9",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(6, 53, 31, 0.18)",
        card: "0 1px 2px rgba(16,24,40,0.04), 0 4px 16px -8px rgba(6,53,31,0.10)",
        lift: "0 24px 60px -24px rgba(6, 53, 31, 0.28)",
        glow: "0 10px 30px -8px rgba(22, 181, 106, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

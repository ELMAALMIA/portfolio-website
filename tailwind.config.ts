import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-sora)"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0A548C",
          foreground: "#F9FAFB"
        },
        accent: {
          DEFAULT: "#4C1D95",
          foreground: "#F9FAFB"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(10, 84, 140, 0.35)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;


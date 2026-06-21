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
        heading: ["var(--font-sora)"],
        mono: ["var(--font-jetbrains)"]
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F59E0B",
          foreground: "#0F172A",
          light: "#FBBF24",
          dark: "#D97706"
        },
        accent: {
          DEFAULT: "#3B82F6",
          foreground: "#F9FAFB",
          light: "#60A5FA",
          dark: "#2563EB"
        },
        java: {
          orange: "#F59E0B",
          red: "#EF4444",
          kotlin: "#7C3AED"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(245, 158, 11, 0.2)",
        "glow-accent": "0 0 40px rgba(59, 130, 246, 0.15)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;

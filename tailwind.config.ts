import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#0f172a",
        },
        mercubuana: {
          blue: "#0A2540",
          navy: "#0d2040",
          light: "#EBF3FE",
          accent: "#0066FF",
          sky: "#38bdf8",
        },
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(10, 37, 64, 0.06), 0 2px 6px -1px rgba(10, 37, 64, 0.04)",
        "soft-lg": "0 10px 30px -3px rgba(10, 37, 64, 0.08), 0 4px 12px -2px rgba(10, 37, 64, 0.05)",
        "soft-xl": "0 20px 40px -5px rgba(10, 37, 64, 0.12), 0 8px 16px -3px rgba(10, 37, 64, 0.08)",
        glow: "0 0 25px rgba(37, 99, 235, 0.35)",
        "glow-lg": "0 0 45px rgba(37, 99, 235, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-slow": "pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "accordion-down": "accordionDown 0.2s ease-out",
        "accordion-up": "accordionUp 0.2s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;

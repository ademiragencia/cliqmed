import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#05070A",       // near-black
        panel: "#0A0F14",      // raised panels
        panel2: "#0E141B",
        line: "rgba(255,255,255,0.08)",
        ink: "#EAF2F0",         // primary text
        muted: "#8A9BA0",       // secondary text
        neon: {
          DEFAULT: "#3BF7C4",   // neon mint-green
          soft: "#7CFFDB",
          deep: "#12C79B",
        },
        lime: "#B8FF3B",
        violet: "#7C5CFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 40px rgba(59,247,196,0.35)",
        neonStrong: "0 0 60px rgba(59,247,196,0.55)",
        card: "0 24px 60px -20px rgba(0,0,0,0.7)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        ring: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        aurora: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(6%,-4%) scale(1.1)" },
          "66%": { transform: "translate(-5%,5%) scale(0.95)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
        ring: "ring 2s ease-out infinite",
        blink: "blink 1.4s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

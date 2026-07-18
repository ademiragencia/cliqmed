import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F5F9FC",
        surface: "#FFFFFF",
        ink: "#0A2342",
        muted: "#51617A",
        line: "#DFE9F2",
        blue: {
          DEFAULT: "#2D9CDB",
          dark: "#1E7FB8",
          deep: "#15618F",
        },
        deep: {
          DEFAULT: "#0A2342",
          darker: "#061529",
        },
        amber: "#F2B84B",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(10, 35, 66, 0.06)",
        lift: "0 20px 50px -12px rgba(10, 35, 66, 0.18)",
        glow: "0 8px 40px rgba(45, 156, 219, 0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        ring: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.7)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
        ring: "ring 1.8s ease-out infinite",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

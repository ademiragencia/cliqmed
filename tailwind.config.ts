import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F6FAF9",
        surface: "#FFFFFF",
        ink: "#0A211D",
        muted: "#5C6F6A",
        line: "#E2ECE9",
        teal: {
          DEFAULT: "#00B4A2",
          dark: "#00907F",
          deep: "#007D6F",
        },
        deep: {
          DEFAULT: "#062E28",
          darker: "#04211D",
        },
        amber: "#FFB547",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 20px rgba(10, 33, 29, 0.06)",
        lift: "0 20px 50px -12px rgba(10, 33, 29, 0.18)",
        glow: "0 8px 40px rgba(0, 180, 162, 0.35)",
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

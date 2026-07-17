import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        anthracite: "#0a0a0a",
        flame: "#f0f0f0",
        accent: "#00ffa3",
        spotlight: {
          blue: "#1a3a5c",
          peach: "#ff9a6c",
          violet: "#6b2d8b",
          crimson: "#8b1a2b",
          gold: "#c9a227",
          teal: "#1a6b6b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        whisper: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "orb-1": "orb-drift-1 8s ease-in-out infinite alternate",
        "orb-2": "orb-drift-2 12s ease-in-out infinite alternate",
        "orb-3": "orb-drift-3 10s ease-in-out infinite alternate",
        marquee: "marquee 24s linear infinite",
      },
      keyframes: {
        "orb-drift-1": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(10vw, -8vh, 0)" },
        },
        "orb-drift-2": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-12vw, 10vh, 0)" },
        },
        "orb-drift-3": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(8vw, 12vh, 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

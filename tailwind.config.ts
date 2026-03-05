import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1620",
        fog: "#122231",
        mint: "#3bb56c",
        mintLight: "#6adf9b",
        sky: "#a8d9ff",
        sand: "#f0f6f5",
        glow: "#89f0c0"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 18px 40px rgba(5, 20, 30, 0.35)",
        glow: "0 0 60px rgba(59, 181, 108, 0.25)",
        soft: "0 20px 50px rgba(8, 15, 25, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;

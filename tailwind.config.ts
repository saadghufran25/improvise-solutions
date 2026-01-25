import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050505",
        ink: "#0f0f0f",
        graphite: "#161616",
        smoke: "#1f1f1f",
        silver: "#d9d9d9",
        accent: "#16a34a",
      },
      fontFamily: {
        sans: ['"Clash Grotesk"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 35px rgba(0,0,0,0.28)",
        card: "0 10px 30px rgba(0,0,0,0.22)",
      },
      backgroundImage: {
        "grid-overlay":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "20px 20px",
      },
    },
  },
  plugins: [],
};

export default config;

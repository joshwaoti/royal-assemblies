import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        deep: "var(--deep)",
        navy: "var(--navy)",
        crimson: "var(--crimson)",
        gold: "var(--gold)",
        "gold-lt": "var(--gold-lt)",
        cream: "var(--cream)",
        muted: "var(--muted)",
        panel: "var(--panel)",
        card: "var(--card)"
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        crimson: ["var(--font-crimson)", "serif"]
      },
      boxShadow: {
        royal: "0 24px 80px rgba(0,0,0,0.34)"
      }
    }
  },
  plugins: []
};

export default config;

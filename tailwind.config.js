/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "monospace"],
        display: ["Clash Display", "Space Grotesk", "ui-sans-serif", "sans-serif"],
      },
      colors: {
        ide: {
          bg: "#0d1117",
          panel: "#0f1420",
          panel2: "#111827",
          border: "#1f2937",
          sidebar: "#0b0f17",
          statusbar: "#0969da",
          text: "#e6edf3",
          muted: "#8b949e",
          accent: "#58a6ff",
        },
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-in": "fade-in 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
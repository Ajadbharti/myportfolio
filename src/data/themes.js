// Each theme swaps the accent color + a few background tones.
// Applied as CSS custom properties on <html> — see ThemeContext.
export const themes = [
  {
    id: "ajad-dark",
    name: "Ajad Dark",
    swatch: "#58a6ff",
    vars: {
      "--bg": "#0d1117",
      "--panel": "#0f1420",
      "--sidebar": "#0b0f17",
      "--border": "#1f2937",
      "--accent": "#58a6ff",
      "--accent-2": "#f472b6",
    },
  },
  {
    id: "rose-pine",
    name: "Rosé Pine",
    swatch: "#eb6f92",
    vars: {
      "--bg": "#191724",
      "--panel": "#1f1d2e",
      "--sidebar": "#16141f",
      "--border": "#2a2738",
      "--accent": "#eb6f92",
      "--accent-2": "#c4a7e7",
    },
  },
  {
    id: "tokyo-night",
    name: "Tokyo Night",
    swatch: "#7aa2f7",
    vars: {
      "--bg": "#1a1b26",
      "--panel": "#1f2335",
      "--sidebar": "#16161e",
      "--border": "#2a2e3f",
      "--accent": "#7aa2f7",
      "--accent-2": "#bb9af7",
    },
  },
  {
    id: "catppuccin",
    name: "Catppuccin",
    swatch: "#cba6f7",
    vars: {
      "--bg": "#1e1e2e",
      "--panel": "#24273a",
      "--sidebar": "#181825",
      "--border": "#313244",
      "--accent": "#cba6f7",
      "--accent-2": "#f5c2e7",
    },
  },
  {
    id: "nord",
    name: "Nord",
    swatch: "#88c0d0",
    vars: {
      "--bg": "#2e3440",
      "--panel": "#3b4252",
      "--sidebar": "#242933",
      "--border": "#434c5e",
      "--accent": "#88c0d0",
      "--accent-2": "#81a1c1",
    },
  },
  {
    id: "gruvbox",
    name: "Gruvbox",
    swatch: "#fabd2f",
    vars: {
      "--bg": "#282828",
      "--panel": "#32302f",
      "--sidebar": "#1d2021",
      "--border": "#3c3836",
      "--accent": "#fabd2f",
      "--accent-2": "#fe8019",
    },
  },
];
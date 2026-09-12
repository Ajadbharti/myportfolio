import React, { createContext, useContext, useEffect, useState } from "react";
import { themes } from "./data/themes";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(
    () => localStorage.getItem("portfolio-theme") || "ajad-dark"
  );

  const theme = themes.find((t) => t.id === themeId) || themes[0];

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    localStorage.setItem("portfolio-theme", themeId);
  }, [themeId, theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
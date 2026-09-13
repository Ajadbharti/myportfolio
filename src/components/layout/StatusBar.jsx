import React, { useEffect, useRef, useState } from "react";
import { FiGitBranch, FiRefreshCw, FiAlertTriangle } from "react-icons/fi";
import { VscError, VscHeart } from "react-icons/vsc";
import { files } from "../../data/files";
import { useTheme } from "../../ThemeContext";

export default function StatusBar({
  activeFile,
  onToggleTerminal,
  onOpenCopilot,
}) {
  const file = files.find((f) => f.key === activeFile);
  const { theme, themeId, setThemeId, themes } = useTheme();
  const [time, setTime] = useState(() => formatTime());
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const pickerRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setThemePickerOpen(false);
      }
    }
    if (themePickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [themePickerOpen]);

  return (
    <div className="relative h-6 flex items-center justify-between px-3 text-[11px] bg-[var(--accent)] text-black/90 font-medium select-none">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleTerminal}
          title="Toggle Terminal"
          className="flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          <FiAlertTriangle size={11} /> 0
        </button>
        <button
          type="button"
          onClick={onToggleTerminal}
          title="Toggle Terminal"
          className="flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          <VscError size={11} /> 0
        </button>
        <span className="flex items-center gap-1">
          <FiGitBranch size={11} /> main
        </span>
        <button
          type="button"
          onClick={onToggleTerminal}
          title="Toggle Terminal"
          className="hover:opacity-70 transition-opacity"
        >
          <FiRefreshCw size={11} />
        </button>
        <span className="hidden sm:inline">Ajad's Portfolio</span>
      </div>

      <div className="hidden sm:flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenCopilot}
          title="Open Ajad's Copilot"
          className="hover:opacity-70 transition-opacity"
        >
          Copilot
        </button>
        <span>{file?.lang || "Plain Text"}</span>
        <span>UTF-8</span>
        <span>Prettier</span>

        <div ref={pickerRef} className="relative">
          <button
            type="button"
            onClick={() => setThemePickerOpen((v) => !v)}
            title="Change color theme"
            className="flex items-center gap-1 hover:opacity-70 transition-opacity"
          >
            <VscHeart size={11} /> {theme.name}
          </button>

          {themePickerOpen && (
            <div className="absolute bottom-full right-0 mb-2 w-44 bg-[var(--panel)] border border-[var(--border)] rounded-lg shadow-2xl overflow-hidden z-50 animate-fade-in">
              <div className="px-3 py-2 text-[10px] tracking-widest text-gray-500 font-semibold border-b border-[var(--border)]">
                COLOR THEME
              </div>
              <div className="py-1 max-h-64 overflow-y-auto">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setThemeId(t.id);
                      setThemePickerOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs ${
                      themeId === t.id
                        ? "bg-white/5 text-gray-100"
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: t.swatch }}
                    />
                    {t.name}
                    {themeId === t.id && (
                      <span className="ml-auto text-[var(--accent)]">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <span>{time}</span>
      </div>
    </div>
  );
}

function formatTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
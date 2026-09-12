import React, { useEffect, useRef } from "react";
import { useTheme } from "../../ThemeContext";

const QUICK_ACTIONS = [
  { icon: "🔍", label: "Command Palette", shortcut: "Ctrl+P", action: "palette" },
  { icon: "🖥️", label: "Toggle Terminal", shortcut: "Ctrl+`" },
  { icon: "✨", label: "Copilot Chat", shortcut: "", action: "copilot" },
  { icon: "📄", label: "Download Resume", shortcut: "" },
  { icon: "⛶", label: "Toggle Fullscreen", shortcut: "F11" },
];

const SHORTCUTS = [
  { keys: "Ctrl P", desc: "Go to file (command palette)" },
  { keys: "Ctrl `", desc: "Toggle terminal" },
  { keys: "Ctrl B", desc: "Toggle sidebar" },
  { keys: "Esc", desc: "Close overlay" },
];

export default function SettingsPanel({ onClose, onOpenPalette, onOpenCopilot }) {
  const ref = useRef(null);
  const { theme, themeId, setThemeId, themes } = useTheme();

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute bottom-12 left-12 w-80 max-h-[75vh] overflow-y-auto bg-[var(--panel)] border border-[var(--border)] rounded-lg shadow-2xl z-40 animate-fade-in"
    >
      <div className="px-4 py-3 text-[11px] tracking-widest text-gray-500 font-semibold border-b border-[var(--border)]">
        SETTINGS
      </div>

      <div className="p-4">
        <p className="text-[11px] tracking-widest text-gray-500 font-semibold mb-3">
          🎨 COLOR THEME
        </p>
        <div className="space-y-1 mb-5">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setThemeId(t.id)}
              className={`w-full flex items-center gap-3 px-2.5 py-2 rounded text-sm ${
                themeId === t.id ? "bg-white/5 text-gray-100" : "text-gray-400 hover:bg-white/5"
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-full shrink-0"
                style={{ backgroundColor: t.swatch }}
              />
              {t.name}
              {themeId === t.id && <span className="ml-auto text-[var(--accent)]">✓</span>}
            </button>
          ))}
        </div>

        <p className="text-[11px] tracking-widest text-gray-500 font-semibold mb-3">
          ⚡ QUICK ACTIONS
        </p>
        <div className="space-y-1 mb-5">
          {QUICK_ACTIONS.map((a) => (
            <button
              key={a.label}
              onClick={() => {
                if (a.action === "palette") onOpenPalette();
                if (a.action === "copilot") onOpenCopilot();
              }}
              className="w-full flex items-center gap-3 px-2.5 py-2 rounded text-sm text-gray-300 hover:bg-white/5"
            >
              <span>{a.icon}</span>
              <span className="flex-1 text-left">{a.label}</span>
              {a.shortcut && (
                <kbd className="text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-gray-400">
                  {a.shortcut}
                </kbd>
              )}
            </button>
          ))}
        </div>

        <p className="text-[11px] tracking-widest text-gray-500 font-semibold mb-3">
          ⌨ KEYBOARD SHORTCUTS
        </p>
        <div className="space-y-2 mb-5">
          {SHORTCUTS.map((s) => (
            <div key={s.desc} className="flex items-center justify-between text-xs">
              <kbd className="bg-[var(--border)] px-1.5 py-0.5 rounded text-gray-400">
                {s.keys}
              </kbd>
              <span className="text-gray-500">{s.desc}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-[var(--border)] text-[11px] text-gray-600">
          Portfolio v1.0 · React + Vite + Tailwind
          <br />
          Made with 💙 by Ajad Bharti
        </div>
      </div>
    </div>
  );
}
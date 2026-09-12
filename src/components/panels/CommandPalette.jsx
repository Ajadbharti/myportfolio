import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";
import { files } from "../../data/files";
import FileIcon from "../common/FileIcon";

export default function CommandPalette({ onClose, onOpenFile, onOpenCopilot }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    function handler(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const showCopilotCommand = "open aahana's copilot".includes(query.toLowerCase()) ||
    "open ajad's copilot".includes(query.toLowerCase()) ||
    query.toLowerCase().includes("copilot") ||
    query === "";

  const filteredFiles = useMemo(
    () => files.filter((f) => f.name.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center pt-28 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[var(--panel)] border border-[var(--border)] rounded-lg shadow-2xl overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
          <span className="text-gray-500">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Go to file or run command..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-600"
          />
          <kbd className="text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-gray-400">
            Esc
          </kbd>
        </div>

        {showCopilotCommand && (
          <div className="px-4 pt-3">
            <p className="text-[10px] tracking-widest text-gray-500 mb-1">COMMANDS</p>
            <button
              onClick={() => {
                onOpenCopilot();
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded bg-[var(--accent)]/10 text-[var(--accent)] text-sm mb-2"
            >
              <span className="flex items-center gap-2">
                <HiOutlineSparkles size={14} /> Open Ajad's Copilot
              </span>
              <kbd className="text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-gray-400">
                Ctrl+Shift+C
              </kbd>
            </button>
          </div>
        )}

        <div className="px-4 pb-2">
          <p className="text-[10px] tracking-widest text-gray-500 mb-1">FILES</p>
          <div className="max-h-72 overflow-y-auto">
            {filteredFiles.map((f) => (
              <button
                key={f.key}
                onClick={() => {
                  onOpenFile(f.key);
                  onClose();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded text-sm text-gray-200 hover:bg-white/5"
              >
                <span className="flex items-center gap-2">
                  <FileIcon type={f.type} />
                  {f.name}
                </span>
                <span className="text-xs text-gray-600">{f.folder}/</span>
              </button>
            ))}
            {filteredFiles.length === 0 && (
              <p className="text-sm text-gray-600 px-3 py-4 text-center">No matches</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-[var(--border)] text-[10px] text-gray-600">
          <span>↑↓ navigate · ↵ open · Esc close</span>
          <span>Tip: type "copilot" to open AI chat</span>
        </div>
      </div>
    </div>
  );
}
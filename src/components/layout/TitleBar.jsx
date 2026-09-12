import React from "react";

export default function TitleBar({ onSearchClick }) {
  return (
    <div className="h-9 flex items-center px-4 bg-[var(--panel)] border-b border-[var(--border)] select-none">
      <div className="flex items-center gap-2 w-24">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="flex-1 flex justify-center">
        <button
          onClick={onSearchClick}
          className="flex items-center gap-2 bg-[var(--bg)] border border-[var(--border)] rounded-md px-3 py-1 text-xs text-gray-400 w-[280px] justify-center hover:border-gray-600 transition-colors"
        >
          <span>🔍</span>
          <span>
            ajad-bharti <span className="text-gray-600">:</span> portfolio
          </span>
          <kbd className="ml-2 text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-gray-300">
            Ctrl P
          </kbd>
        </button>
      </div>
      <div className="w-24" />
    </div>
  );
}
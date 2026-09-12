import React from "react";

const ITEMS = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help", "Copilot"];

export default function MenuBar({ onCopilotClick }) {
  return (
    <div className="hidden md:flex h-8 items-center gap-5 px-4 bg-[var(--panel)] border-b border-[var(--border)] text-xs text-gray-400 select-none">
      {ITEMS.map((item) => (
        <button
          key={item}
          onClick={item === "Copilot" ? onCopilotClick : undefined}
          className="hover:text-gray-200 transition-colors"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
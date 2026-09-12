import React from "react";
import { files } from "../../data/files";

export default function TabBar({ openKeys, activeFile, onSelect, onClose }) {
  const openFiles = openKeys.map((k) => files.find((f) => f.key === k)).filter(Boolean);

  return (
    <div className="flex bg-[var(--panel)] border-b border-[var(--border)] overflow-x-auto">
      {openFiles.map((f) => (
        <div
          key={f.key}
          onClick={() => onSelect(f.key)}
          className={`group flex items-center gap-2 px-4 py-2 text-sm border-r border-[var(--border)] cursor-pointer shrink-0 ${
            activeFile === f.key
              ? "bg-[var(--bg)] text-gray-100 border-t-2 border-t-[var(--accent)]"
              : "text-gray-500 hover:text-gray-300 border-t-2 border-t-transparent"
          }`}
        >
          <span className="text-[10px]">{f.icon}</span>
          <span>{f.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(f.key);
            }}
            className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-200 ml-1"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
import React, { useEffect, useRef } from "react";
import { FiGitBranch } from "react-icons/fi";

export default function SourceControlPanel({ onClose }) {
  const ref = useRef(null);

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
      className="absolute top-16 left-12 w-72 bg-[var(--panel)] border border-[var(--border)] rounded-lg shadow-2xl z-40 animate-fade-in overflow-hidden"
    >
      <div className="px-4 py-3 text-[11px] tracking-widest text-gray-500 font-semibold border-b border-[var(--border)]">
        SOURCE CONTROL
      </div>

      <div className="px-4 py-3 flex items-center justify-between border-b border-[var(--border)]">
        <span className="flex items-center gap-2 text-sm text-gray-200 font-medium">
          <FiGitBranch size={14} /> main
        </span>
        <span className="text-xs text-gray-500">↑ 1 commit ahead</span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-[var(--border)] border-b border-[var(--border)]">
        <Stat value="3" label="Modified" color="text-yellow-400" />
        <Stat value="1" label="Added" color="text-emerald-400" />
        <Stat value="0" label="Deleted" color="text-red-400" />
      </div>

      <a
        href="https://github.com/Ajadbharti"
        target="_blank"
        rel="noreferrer"
        className="block px-4 py-3 text-sm text-[var(--accent)] hover:underline"
      >
        View on GitHub ↗
      </a>
    </div>
  );
}

function Stat({ value, label, color }) {
  return (
    <div className="px-3 py-3 text-center">
      <p className={`text-lg font-bold ${color}`}>{value}</p>
      <p className="text-[10px] text-gray-500">{label}</p>
    </div>
  );
}
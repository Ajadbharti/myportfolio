import React, { useEffect, useState } from "react";

const LINES = [
  "$ booting portfolio...",
  "$ loading src/home.tsx",
  "$ connecting to Ajad Bharti's workspace",
  "$ ready.",
];

export default function IntroLoader({ onFinish }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) {
      const t = setTimeout(onFinish, 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 320);
    return () => clearTimeout(t);
  }, [visibleLines, onFinish]);

  return (
    <div className="fixed inset-0 z-[999] bg-[var(--bg)] flex items-center justify-center font-mono">
      <div className="w-[420px] max-w-[90vw]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <p key={i} className="text-sm text-emerald-400 mb-1">
            {line}
          </p>
        ))}
        {visibleLines < LINES.length && (
          <p className="text-sm text-emerald-400 inline-flex items-center gap-1">
            <span className="w-2 h-4 bg-emerald-400 animate-blink" />
          </p>
        )}
      </div>
    </div>
  );
}
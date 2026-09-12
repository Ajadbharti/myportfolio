import React, { useEffect, useState } from "react";
import { FiGitBranch, FiRefreshCw, FiAlertTriangle } from "react-icons/fi";
import { VscError, VscHeart } from "react-icons/vsc";
import { files } from "../../data/files";
import { useTheme } from "../../ThemeContext";

export default function StatusBar({ activeFile }) {
  const file = files.find((f) => f.key === activeFile);
  const { theme } = useTheme();
  const [time, setTime] = useState(() => formatTime());

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-6 flex items-center justify-between px-3 text-[11px] bg-[var(--accent)] text-black/90 font-medium select-none">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <FiAlertTriangle size={11} /> 0
        </span>
        <span className="flex items-center gap-1">
          <VscError size={11} /> 0
        </span>
        <span className="flex items-center gap-1">
          <FiGitBranch size={11} /> main
        </span>
        <FiRefreshCw size={11} />
        <span className="hidden sm:inline">Ajad's Portfolio</span>
      </div>
      <div className="hidden sm:flex items-center gap-3">
        <span>Copilot</span>
        <span>{file?.lang || "Plain Text"}</span>
        <span>UTF-8</span>
        <span>Prettier</span>
        <span className="flex items-center gap-1">
          <VscHeart size={11} /> {theme.name}
        </span>
        <span>{time}</span>
      </div>
    </div>
  );
}

function formatTime() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
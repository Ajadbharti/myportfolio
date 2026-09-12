import React from "react";
import { files } from "../../data/files";

export default function Breadcrumb({ activeFile }) {
  const file = files.find((f) => f.key === activeFile);
  if (!file) return null;

  return (
    <div className="px-4 py-2 text-xs text-gray-500 border-b border-[var(--border)] bg-[var(--bg)] flex items-center gap-1.5">
      <span>ajad-bharti</span>
      <span className="text-gray-700">›</span>
      <span>{file.folder}</span>
      <span className="text-gray-700">›</span>
      <span className="text-gray-300">{file.name}</span>
    </div>
  );
}
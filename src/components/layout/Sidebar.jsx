import React from "react";
import { FiGitBranch } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { files, resumeFile } from "../../data/files";
import FileIcon from "../common/FileIcon";

export default function Sidebar({
  activeFile,
  onOpenFile,
  onOpenCopilot,
}) {
  return (
    <div
      className="
        w-[240px]
        min-w-[240px]
        shrink-0
        bg-[var(--sidebar)]
        border-r
        border-[var(--border)]
        flex
        flex-col
      "
    >
      {/* Sidebar Header */}
      <div
        className="
          px-4
          py-3
          text-[11px]
          tracking-widest
          text-gray-500
          font-semibold
        "
      >
        PORTFOLIO
      </div>

      {/* Files */}
      <div className="flex-1 overflow-y-auto px-1">
        {files.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => onOpenFile(f.key)}
            className={`
              w-full
              text-left
              flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded
              text-sm
              truncate
              transition-colors
              ${
                activeFile === f.key
                  ? "bg-[var(--panel)] text-gray-100"
                  : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              }
            `}
          >
            <FileIcon type={f.type} />

            <span className="truncate">
              {f.name}
            </span>
          </button>
        ))}

        {/* Resume */}
        <button
          type="button"
          className="
            w-full
            text-left
            flex
            items-center
            gap-2
            px-3
            py-1.5
            rounded
            text-sm
            truncate
            text-gray-500
            hover:text-gray-300
            hover:bg-white/5
            transition-colors
          "
        >
          <FileIcon type={resumeFile.type} />

          <span className="truncate">
            {resumeFile.name}
          </span>
        </button>
      </div>

      {/* Copilot */}
      <div className="p-2 border-t border-[var(--border)]">
        <button
          type="button"
          onClick={onOpenCopilot}
          className="
            w-full
            flex
            items-center
            justify-between
            px-3
            py-2
            rounded-md
            bg-[var(--panel)]
            border
            border-[var(--border)]
            hover:border-[var(--accent)]/50
            transition-colors
          "
        >
          <span
            className="
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-gray-200
            "
          >
            <HiOutlineSparkles
              size={14}
              className="text-[var(--accent)]"
            />

            Ajad's Copilot
          </span>

          <span className="text-[10px] text-gray-500">
            AI
          </span>
        </button>
      </div>

      {/* Git Status */}
      <div
        className="
          px-3
          py-2
          border-t
          border-[var(--border)]
          flex
          items-center
          justify-between
          text-[11px]
          text-gray-500
        "
      >
        <span className="flex items-center gap-1.5">
          <FiGitBranch size={12} />
          main
        </span>

        <span className="flex items-center gap-2">
          <span>↑1</span>
          <span className="text-emerald-500">
            +3
          </span>
        </span>
      </div>
    </div>
  );
}
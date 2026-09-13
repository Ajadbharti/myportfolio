import React, { useEffect } from "react";
import { FiGitBranch, FiX, FiSettings } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { files, resumeFile } from "../../data/files";
import FileIcon from "../common/FileIcon";

export default function Sidebar({
  activeFile,
  onOpenFile,
  onOpenCopilot,
}) {
  useEffect(() => {
    function handleMobileExplorer() {
      document.dispatchEvent(
        new CustomEvent("toggle-explorer")
      );
    }

    window.addEventListener(
      "mobile-explorer",
      handleMobileExplorer
    );

    return () => {
      window.removeEventListener(
        "mobile-explorer",
        handleMobileExplorer
      );
    };
  }, []);

  return (
    <div
      className="
        portfolio-sidebar
        w-[240px]
        min-w-[240px]
        shrink-0
        min-h-0
        bg-[var(--sidebar)]
        border-r
        border-[var(--border)]
        flex
        flex-col
        overflow-hidden
      "
    >
      {/* =====================================================
          DESKTOP HEADER
      ====================================================== */}

      <div
        className="
          hidden
          md:flex
          px-4
          py-3
          items-center
          justify-between
          text-[11px]
          tracking-widest
          text-gray-500
          font-semibold
          shrink-0
        "
      >
        <span>PORTFOLIO</span>
      </div>

      {/* =====================================================
          MOBILE HEADER
      ====================================================== */}

      <div
        className="
          flex
          md:hidden
          items-center
          justify-between
          px-4
          py-3
          border-b
          border-[var(--border)]
          shrink-0
        "
      >
        <span className="text-xs tracking-[0.2em] text-gray-400">
          EXPLORER
        </span>

        <div className="flex items-center gap-4">
          <FiSettings
            size={16}
            className="text-gray-500"
          />

          <button
            type="button"
            aria-label="Close Explorer"
            onClick={() => {
              document.dispatchEvent(
                new CustomEvent("close-explorer")
              );
            }}
            className="
              text-gray-500
              hover:text-gray-200
            "
          >
            <FiX size={17} />
          </button>
        </div>
      </div>

      {/* =====================================================
          FOLDER
      ====================================================== */}

      <div
        className="
          px-4
          py-2.5
          bg-white/[0.025]
          border-b
          border-[var(--border)]
          text-[11px]
          tracking-[0.15em]
          text-gray-500
          font-semibold
          shrink-0
        "
      >
        <span className="mr-2">📁</span>
        <span className="hidden md:inline">
          PORTFOLIO
        </span>
        <span className="md:hidden">
          AJAD-BHARTI
        </span>
      </div>

      {/* =====================================================
          FILE LIST
      ====================================================== */}

      <div
        className="
          flex-1
          min-h-0
          overflow-y-auto
          overflow-x-hidden
          px-1
          py-1
        "
      >
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
              gap-2.5
              px-3
              py-2
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

            {activeFile === f.key && (
              <span className="ml-auto w-1 h-1 rounded-full bg-[var(--accent)] shrink-0" />
            )}
          </button>
        ))}

        <button
          type="button"
          className="
            w-full
            text-left
            flex
            items-center
            gap-2.5
            px-3
            py-2
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

      {/* =====================================================
          COPILOT
      ====================================================== */}

      <div className="p-3 border-t border-[var(--border)] shrink-0">
        <button
          type="button"
          onClick={onOpenCopilot}
          className="
            w-full
            flex
            items-center
            justify-between
            px-3
            py-2.5
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

      {/* =====================================================
          GIT
      ====================================================== */}

      <div
        className="
          px-3
          py-2.5
          border-t
          border-[var(--border)]
          flex
          items-center
          justify-between
          text-[11px]
          text-gray-500
          shrink-0
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
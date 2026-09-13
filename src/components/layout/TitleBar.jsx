import React, { useState } from "react";
import {
  FiSearch,
  FiX,
  FiMinus,
  FiMaximize2,
} from "react-icons/fi";

export default function TitleBar({
  onSearchClick,
  onClose,
  onMinimize,
  onMaximize,
}) {
  const [isFullscreen, setIsFullscreen] =
    useState(false);

  // =========================================================
  // CLOSE
  // =========================================================

  function handleClose() {
    if (onClose) {
      onClose();
      return;
    }

    window.dispatchEvent(
      new CustomEvent("portfolio-close")
    );
  }

  // =========================================================
  // MINIMIZE
  // =========================================================

  function handleMinimize() {
    if (onMinimize) {
      onMinimize();
      return;
    }

    window.dispatchEvent(
      new CustomEvent("portfolio-minimize")
    );
  }

  // =========================================================
  // MAXIMIZE / FULLSCREEN
  // =========================================================

  async function handleMaximize() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);

        if (onMaximize) {
          onMaximize(true);
        }
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);

        if (onMaximize) {
          onMaximize(false);
        }
      }
    } catch (error) {
      console.error(
        "Fullscreen error:",
        error
      );
    }
  }

  return (
    <header
      className="
        portfolio-titlebar
        h-9
        min-h-9
        w-full
        flex
        items-center
        gap-2
        px-4
        bg-[var(--panel)]
        border-b
        border-[var(--border)]
        select-none
        overflow-hidden
      "
    >
      {/* =====================================================
          WINDOW CONTROLS
      ====================================================== */}

      <div
        className="
          flex
          items-center
          gap-2
          w-24
          min-w-24
          shrink-0
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          title="Close"
          aria-label="Close"
          className="
            group
            w-3.5
            h-3.5
            rounded-full
            bg-[#ff5f56]
            flex
            items-center
            justify-center
            hover:brightness-110
            transition-all
            cursor-pointer
          "
        >
          <FiX
            size={8}
            strokeWidth={3}
            className="
              opacity-0
              group-hover:opacity-100
              text-[#7a1712]
              transition-opacity
            "
          />
        </button>

        {/* Minimize */}
        <button
          type="button"
          onClick={handleMinimize}
          title="Minimize"
          aria-label="Minimize"
          className="
            group
            w-3.5
            h-3.5
            rounded-full
            bg-[#ffbd2e]
            flex
            items-center
            justify-center
            hover:brightness-110
            transition-all
            cursor-pointer
          "
        >
          <FiMinus
            size={8}
            strokeWidth={3}
            className="
              opacity-0
              group-hover:opacity-100
              text-[#795b00]
              transition-opacity
            "
          />
        </button>

        {/* Maximize */}
        <button
          type="button"
          onClick={handleMaximize}
          title={
            isFullscreen
              ? "Restore"
              : "Maximize"
          }
          aria-label={
            isFullscreen
              ? "Restore"
              : "Maximize"
          }
          className="
            group
            w-3.5
            h-3.5
            rounded-full
            bg-[#27c93f]
            flex
            items-center
            justify-center
            hover:brightness-110
            transition-all
            cursor-pointer
          "
        >
          <FiMaximize2
            size={8}
            strokeWidth={3}
            className="
              opacity-0
              group-hover:opacity-100
              text-[#075c16]
              transition-opacity
            "
          />
        </button>
      </div>

      {/* =====================================================
          SEARCH
      ====================================================== */}

      <div
        className="
          flex-1
          min-w-0
          flex
          justify-center
        "
      >
        <button
          type="button"
          onClick={onSearchClick}
          className="
            flex
            items-center
            gap-2
            bg-[var(--bg)]
            border
            border-[var(--border)]
            rounded-md
            px-3
            py-1
            text-xs
            text-gray-400
            w-[280px]
            max-w-full
            sm:max-w-[45vw]
            shrink-0
            justify-center
            hover:border-gray-600
            transition-colors
          "
        >
          <FiSearch
            size={13}
            className="text-gray-500 shrink-0"
          />

          <span className="truncate">
            <span className="hidden xs:inline">
              ajad-bharti{" "}
              <span className="text-gray-600">
                :
              </span>{" "}
            </span>
            portfolio
          </span>

          <kbd
            className="
              hidden
              sm:inline-block
              ml-1
              text-[10px]
              bg-[var(--border)]
              px-1.5
              py-0.5
              rounded
              text-gray-300
              shrink-0
            "
          >
            Ctrl P
          </kbd>
        </button>
      </div>

      {/* Right spacer */}
      <div className="w-24 min-w-24 shrink-0 hidden sm:block" />
    </header>
  );
}
import React, { useState } from "react";
import {
  FiSearch,
  FiX,
  FiMinus,
  FiMaximize2,
  FiMenu,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function TitleBar({
  onSearchClick,
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // =========================================================
  // MAXIMIZE / FULLSCREEN
  // =========================================================

  async function handleMaximize() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  }

  // =========================================================
  // CLOSE
  // =========================================================

  function handleClose() {
    window.dispatchEvent(
      new CustomEvent("portfolio-close")
    );
  }

  // =========================================================
  // MINIMIZE
  // =========================================================

  function handleMinimize() {
    window.dispatchEvent(
      new CustomEvent("portfolio-minimize")
    );
  }

  return (
    <div
      className="
        h-9
        min-h-9
        w-full
        bg-[var(--panel)]
        border-b
        border-[var(--border)]
        select-none
      "
    >
      {/* =====================================================
          DESKTOP TITLE BAR
      ====================================================== */}

      <div className="hidden md:flex h-full items-center px-4">

        {/* ===================================================
            MAC TRAFFIC LIGHTS
        ==================================================== */}

        <div
          className="
            flex
            items-center
            gap-2
            w-24
            shrink-0
          "
        >
          {/* RED / CLOSE */}

          <button
            type="button"
            onClick={handleClose}
            title="Close"
            aria-label="Close"
            className="
              group
              relative
              w-[14px]
              h-[14px]
              rounded-full
              bg-[#ff5f57]
              flex
              items-center
              justify-center
              transition-all
              duration-150
              hover:brightness-110
              hover:scale-105
            "
          >
            <FiX
              size={9}
              strokeWidth={3}
              className="
                absolute
                text-[#4d0000]
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-150
              "
            />
          </button>

          {/* YELLOW / MINIMIZE */}

          <button
            type="button"
            onClick={handleMinimize}
            title="Minimize"
            aria-label="Minimize"
            className="
              group
              relative
              w-[14px]
              h-[14px]
              rounded-full
              bg-[#febc2e]
              flex
              items-center
              justify-center
              transition-all
              duration-150
              hover:brightness-110
              hover:scale-105
            "
          >
            <FiMinus
              size={9}
              strokeWidth={3}
              className="
                absolute
                text-[#5c4300]
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-150
              "
            />
          </button>

          {/* GREEN / MAXIMIZE */}

          <button
            type="button"
            onClick={handleMaximize}
            title={
              isFullscreen
                ? "Exit Fullscreen"
                : "Fullscreen"
            }
            aria-label={
              isFullscreen
                ? "Exit Fullscreen"
                : "Fullscreen"
            }
            className="
              group
              relative
              w-[14px]
              h-[14px]
              rounded-full
              bg-[#28c840]
              flex
              items-center
              justify-center
              transition-all
              duration-150
              hover:brightness-110
              hover:scale-105
            "
          >
            <FiMaximize2
              size={8}
              strokeWidth={3}
              className="
                absolute
                text-[#064d12]
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-150
              "
            />
          </button>
        </div>

        {/* ===================================================
            SEARCH BAR
        ==================================================== */}

        <div className="flex-1 flex justify-center min-w-0">
          <button
            type="button"
            onClick={onSearchClick}
            className="
              flex
              items-center
              justify-center
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
              hover:border-gray-600
              transition-colors
            "
          >
            <FiSearch
              size={13}
              className="text-gray-500 shrink-0"
            />

            <span className="truncate">
              ajad-bharti{" "}
              <span className="text-gray-600">
                :
              </span>{" "}
              portfolio
            </span>

            <kbd
              className="
                ml-2
                shrink-0
                text-[10px]
                bg-[var(--border)]
                px-1.5
                py-0.5
                rounded
                text-gray-300
              "
            >
              Ctrl P
            </kbd>
          </button>
        </div>

        {/* Right spacing */}

        <div className="w-24 shrink-0" />
      </div>

      {/* =====================================================
          MOBILE TITLE BAR
      ====================================================== */}

      <div
        className="
          flex
          md:hidden
          h-full
          items-center
          px-2
          gap-2
        "
      >
        {/* Explorer */}

        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("mobile-explorer")
            );
          }}
          aria-label="Explorer"
          title="Explorer"
          className="
            w-8
            h-8
            shrink-0
            flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-200
            transition-colors
          "
        >
          <FiMenu size={19} />
        </button>

        {/* Breadcrumb */}

        <div className="flex-1 min-w-0">
          <div
            className="
              flex
              items-center
              gap-1.5
              text-xs
              min-w-0
            "
          >
            <span className="text-gray-600">
              ~/
            </span>

            <span className="text-gray-300 truncate">
              home
            </span>
          </div>
        </div>

        {/* Copilot */}

        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("mobile-copilot")
            );
          }}
          aria-label="Copilot"
          title="Copilot"
          className="
            w-8
            h-8
            shrink-0
            rounded
            bg-white/5
            border
            border-[var(--border)]
            flex
            items-center
            justify-center
            text-gray-300
            hover:text-[var(--accent)]
            hover:border-[var(--accent)]/40
            transition-colors
          "
        >
          <HiOutlineSparkles size={17} />
        </button>

        {/* Search */}

        <button
          type="button"
          onClick={onSearchClick}
          aria-label="Search"
          title="Search"
          className="
            w-8
            h-8
            shrink-0
            rounded
            bg-white/5
            border
            border-[var(--border)]
            flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-200
            hover:border-gray-500
            transition-colors
          "
        >
          <FiSearch size={16} />
        </button>
      </div>
    </div>
  );
}
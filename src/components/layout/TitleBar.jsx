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

  function handleClose() {
    window.dispatchEvent(
      new CustomEvent("portfolio-close")
    );
  }

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
        bg-[var(--panel)]
        border-b
        border-[var(--border)]
        select-none
      "
    >
      {/* ================= DESKTOP ================= */}

      <div className="hidden md:flex h-full items-center px-4">
        <div className="flex items-center gap-2 w-24 shrink-0">
          <button
            type="button"
            onClick={handleClose}
            title="Close"
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"
          />

          <button
            type="button"
            onClick={handleMinimize}
            title="Minimize"
            className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-300"
          />

          <button
            type="button"
            onClick={handleMaximize}
            title="Fullscreen"
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"
          />
        </div>

        <div className="flex-1 flex justify-center">
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
              justify-center
              hover:border-gray-600
            "
          >
            <FiSearch
              size={13}
              className="text-gray-500"
            />

            <span>
              ajad-bharti{" "}
              <span className="text-gray-600">
                :
              </span>{" "}
              portfolio
            </span>

            <kbd className="ml-2 text-[10px] bg-[var(--border)] px-1.5 py-0.5 rounded text-gray-300">
              Ctrl P
            </kbd>
          </button>
        </div>

        <div className="w-24 shrink-0" />
      </div>

      {/* ================= MOBILE ================= */}

      <div className="flex md:hidden h-full items-center px-3 gap-3">
        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("mobile-explorer")
            );
          }}
          aria-label="Explorer"
          className="
            text-gray-400
            hover:text-gray-200
            shrink-0
          "
        >
          <FiMenu size={19} />
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500">
              ~/
            </span>

            <span className="text-gray-300 truncate">
              home
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent("mobile-copilot")
            );
          }}
          aria-label="Copilot"
          className="
            w-8
            h-8
            rounded
            bg-white/5
            border
            border-[var(--border)]
            flex
            items-center
            justify-center
            text-gray-300
            hover:text-[var(--accent)]
            shrink-0
          "
        >
          <HiOutlineSparkles size={17} />
        </button>

        <button
          type="button"
          onClick={onSearchClick}
          aria-label="Search"
          className="
            w-8
            h-8
            rounded
            bg-white/5
            border
            border-[var(--border)]
            flex
            items-center
            justify-center
            text-gray-400
            hover:text-gray-200
            shrink-0
          "
        >
          <FiSearch size={16} />
        </button>
      </div>
    </div>
  );
}
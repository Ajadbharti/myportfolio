import React, { useEffect, useRef } from "react";
import {
  FiDroplet,
  FiZap,
  FiSearch,
  FiTerminal,
  FiDownload,
  FiMaximize,
  FiCheck,
  FiCommand,
  FiMonitor,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { useTheme } from "../../ThemeContext";

const QUICK_ACTIONS = [
  {
    Icon: FiSearch,
    label: "Command Palette",
    shortcut: "Ctrl+P",
    action: "palette",
  },
  {
    Icon: FiTerminal,
    label: "Toggle Terminal",
    shortcut: "Ctrl+`",
    action: "terminal",
  },
  {
    Icon: HiOutlineSparkles,
    label: "Copilot Chat",
    shortcut: "",
    action: "copilot",
  },
  {
    Icon: FiDownload,
    label: "Download Resume",
    shortcut: "",
    action: "resume",
  },
  {
    Icon: FiMaximize,
    label: "Toggle Fullscreen",
    shortcut: "F11",
    action: "fullscreen",
  },
];

const SHORTCUTS = [
  {
    keys: "Ctrl P",
    desc: "Go to file (command palette)",
  },
  {
    keys: "Ctrl `",
    desc: "Toggle terminal",
  },
  {
    keys: "Ctrl B",
    desc: "Toggle sidebar",
  },
  {
    keys: "Esc",
    desc: "Close overlay",
  },
  {
    keys: "↑ / ↓",
    desc: "Terminal history",
  },
];

export default function SettingsPanel({
  onClose,
  onOpenPalette,
  onOpenCopilot,
  onToggleTerminal,
  onToggleSidebar,
}) {
  const ref = useRef(null);

  const {
    themeId,
    setThemeId,
    themes,
  } = useTheme();

  // =========================================================
  // CLOSE WHEN CLICKING OUTSIDE
  // =========================================================

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        onClose();
      }
    }

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [onClose]);

  // =========================================================
  // CLOSE WITH ESC
  // =========================================================

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [onClose]);

  // =========================================================
  // FULLSCREEN
  // =========================================================

  async function toggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error(
        "Fullscreen error:",
        error
      );
    }
  }

  // =========================================================
  // DOWNLOAD RESUME
  // =========================================================

  function downloadResume() {
    const link = document.createElement("a");

    link.href = "/Ajad_Bharti_Resume.pdf";
    link.download = "Ajad_Bharti_Resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // =========================================================
  // QUICK ACTION HANDLER
  // =========================================================

  function handleQuickAction(action) {
    switch (action) {
      case "palette":
        if (onOpenPalette) {
          onOpenPalette();
        }
        break;

      case "terminal":
        if (onToggleTerminal) {
          onToggleTerminal();
        }
        break;

      case "copilot":
        if (onOpenCopilot) {
          onOpenCopilot();
        }
        break;

      case "resume":
        downloadResume();
        break;

      case "fullscreen":
        toggleFullscreen();
        break;

      default:
        break;
    }
  }

  // =========================================================
  // GITHUB PROFILE / REPOSITORY
  // =========================================================

  function openGitHub() {
    window.open(
      "https://github.com/Ajadbharti/myportfolio",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <div
      ref={ref}
      className="
        absolute
        bottom-12
        left-12
        w-[360px]
        max-w-[calc(100vw-80px)]
        max-h-[75vh]
        overflow-y-auto
        bg-[var(--panel)]
        border
        border-[var(--border)]
        rounded-lg
        shadow-2xl
        z-50
        animate-fade-in
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          px-4
          py-3
          text-[11px]
          tracking-[0.18em]
          text-gray-500
          font-semibold
          border-b
          border-[var(--border)]
        "
      >
        SETTINGS
      </div>

      <div className="p-4">

        {/* ===================================================
            COLOR THEME
        ==================================================== */}

        <p
          className="
            flex
            items-center
            gap-2
            text-[11px]
            tracking-[0.16em]
            text-gray-500
            font-semibold
            mb-3
          "
        >
          <FiDroplet
            size={13}
            className="text-[var(--accent)]"
          />

          COLOR THEME
        </p>

        <div className="space-y-1 mb-5">
          {themes?.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => setThemeId(theme.id)}
              className={`
                w-full
                flex
                items-center
                gap-3
                px-2.5
                py-2
                rounded-md
                text-sm
                transition-all
                ${
                  themeId === theme.id
                    ? "bg-white/[0.07] text-gray-100"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]"
                }
              `}
            >
              <span
                className="
                  w-5
                  h-5
                  rounded-full
                  shrink-0
                  border
                  border-white/10
                "
                style={{
                  backgroundColor: theme.swatch,
                }}
              />

              <span className="flex-1 text-left">
                {theme.name}
              </span>

              {themeId === theme.id && (
                <FiCheck
                  size={15}
                  className="text-[var(--accent)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="border-t border-[var(--border)] mb-5" />

        {/* ===================================================
            QUICK ACTIONS
        ==================================================== */}

        <p
          className="
            flex
            items-center
            gap-2
            text-[11px]
            tracking-[0.16em]
            text-gray-500
            font-semibold
            mb-3
          "
        >
          <FiZap
            size={13}
            className="text-yellow-400"
          />

          QUICK ACTIONS
        </p>

        <div className="space-y-1 mb-5">
          {QUICK_ACTIONS.map((item) => {
            const Icon = item.Icon;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() =>
                  handleQuickAction(item.action)
                }
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-2.5
                  py-2.5
                  rounded-md
                  text-sm
                  text-gray-300
                  hover:text-gray-100
                  hover:bg-white/[0.05]
                  transition-colors
                "
              >
                <Icon
                  size={15}
                  className="text-gray-400 shrink-0"
                />

                <span className="flex-1 text-left">
                  {item.label}
                </span>

                {item.shortcut && (
                  <kbd
                    className="
                      text-[10px]
                      bg-[var(--border)]
                      border
                      border-white/5
                      px-1.5
                      py-0.5
                      rounded
                      text-gray-500
                    "
                  >
                    {item.shortcut}
                  </kbd>
                )}
              </button>
            );
          })}
        </div>

        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="border-t border-[var(--border)] mb-5" />

        {/* ===================================================
            KEYBOARD SHORTCUTS
        ==================================================== */}

        <p
          className="
            flex
            items-center
            gap-2
            text-[11px]
            tracking-[0.16em]
            text-gray-500
            font-semibold
            mb-3
          "
        >
          <FiCommand size={13} />

          KEYBOARD SHORTCUTS
        </p>

        <div className="space-y-2.5 mb-5">
          {SHORTCUTS.map((shortcut) => (
            <div
              key={shortcut.desc}
              className="
                flex
                items-center
                justify-between
                gap-3
                text-xs
              "
            >
              <kbd
                className="
                  bg-[var(--border)]
                  border
                  border-white/5
                  px-2
                  py-1
                  rounded
                  text-gray-300
                  shrink-0
                  font-mono
                "
              >
                {shortcut.keys}
              </kbd>

              <span
                className="
                  text-gray-500
                  text-right
                  truncate
                "
              >
                {shortcut.desc}
              </span>
            </div>
          ))}
        </div>

        {/* ===================================================
            FOOTER
        ==================================================== */}

        <div
  className="
    pt-3
    border-t
    border-[var(--border)]
    text-[11px]
    leading-relaxed
    text-gray-600
  "
>
  <div>
    Portfolio v1.0 · React + Vite + Tailwind
  </div>

  <div className="mt-1">
    Made by{" "}
    <button
      type="button"
      onClick={() =>
        window.open(
          "https://github.com/Ajadbharti/myportfolio",
          "_blank",
          "noopener,noreferrer"
        )
      }
      className="
        text-sky-400
        hover:text-sky-300
        hover:underline
        transition-colors
        cursor-pointer
      "
    >
      Ajad Bharti
    </button>
  </div>
</div>




      </div>
    </div>
  );
}
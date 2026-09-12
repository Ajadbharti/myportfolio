import React, { useEffect, useRef, useState } from "react";
import {
  FiSearch,
  FiSidebar,
  FiTerminal,
  FiMaximize,
  FiZoomIn,
  FiZoomOut,
  FiRotateCcw,
  FiPlay,
  FiHelpCircle,
  FiGithub,
  FiInfo,
  FiCommand,
  FiFile,
  FiEdit3,
  FiNavigation,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const MENU_ITEMS = [
  "File",
  "Edit",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
  "Copilot",
];

export default function MenuBar({
  onOpenPalette,
  onToggleSidebar,
  onToggleTerminal,
  onOpenCopilot,
  onFullscreen,
  onZoomIn,
  onZoomOut,
  onResetZoom,
  onOpenFile,
  onOpenSettings,
}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
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
  }, []);

  // Close dropdown with Escape
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setActiveMenu(null);
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
  }, []);

  function handleMenuClick(item) {
    if (item === "Copilot") {
      setActiveMenu(null);
      onOpenCopilot?.();
      return;
    }

    setActiveMenu((current) =>
      current === item ? null : item
    );
  }

  function runAction(action) {
    setActiveMenu(null);

    switch (action) {
      case "palette":
        onOpenPalette?.();
        break;

      case "sidebar":
        onToggleSidebar?.();
        break;

      case "terminal":
        onToggleTerminal?.();
        break;

      case "copilot":
        onOpenCopilot?.();
        break;

      case "fullscreen":
        onFullscreen?.();
        break;

      case "zoom-in":
        onZoomIn?.();
        break;

      case "zoom-out":
        onZoomOut?.();
        break;

      case "zoom-reset":
        onResetZoom?.();
        break;

      case "settings":
        onOpenSettings?.();
        break;

      case "github":
        window.open(
          "https://github.com/Ajadbharti/myportfolio",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case "about":
        alert(
          "Ajad Bharti Portfolio\n\nReact + Vite + Tailwind"
        );
        break;

      case "find":
        window.dispatchEvent(
          new CustomEvent("open-find")
        );
        break;

      case "select-all":
        document.execCommand("selectAll");
        break;

      case "copy":
        document.execCommand("copy");
        break;

      case "run-last":
        window.dispatchEvent(
          new CustomEvent("run-last-command")
        );
        break;

      default:
        break;
    }
  }

  const menus = {
    File: [
      {
        label: "Go to File...",
        shortcut: "Ctrl+P",
        icon: FiSearch,
        action: "palette",
      },
    ],

    Edit: [
      {
        label: "Find...",
        shortcut: "Ctrl+F",
        icon: FiSearch,
        action: "find",
      },
      {
        label: "Select All",
        shortcut: "Ctrl+A",
        icon: FiEdit3,
        action: "select-all",
      },
      {
        label: "Copy",
        shortcut: "Ctrl+C",
        action: "copy",
      },
    ],

    View: [
      {
        label: "Command Palette",
        shortcut: "Ctrl+P",
        icon: FiCommand,
        action: "palette",
      },
      {
        label: "Toggle Sidebar",
        shortcut: "Ctrl+B",
        icon: FiSidebar,
        action: "sidebar",
      },
      {
        label: "Toggle Terminal",
        shortcut: "Ctrl+`",
        icon: FiTerminal,
        action: "terminal",
      },
      {
        label: "Toggle Copilot",
        shortcut: "Ctrl+Shift+C",
        icon: HiOutlineSparkles,
        action: "copilot",
      },
      {
        label: "Enter Full Screen",
        shortcut: "F11",
        icon: FiMaximize,
        action: "fullscreen",
      },
      {
        divider: true,
      },
      {
        label: "Zoom In",
        shortcut: "Ctrl++",
        icon: FiZoomIn,
        action: "zoom-in",
      },
      {
        label: "Zoom Out",
        shortcut: "Ctrl+-",
        icon: FiZoomOut,
        action: "zoom-out",
      },
      {
        label: "Reset Zoom",
        shortcut: "Ctrl+0",
        icon: FiRotateCcw,
        action: "zoom-reset",
      },
    ],

    Go: [
      {
        label: "Go to File...",
        shortcut: "Ctrl+P",
        icon: FiSearch,
        action: "palette",
      },
      {
        divider: true,
      },
      {
        label: "home.tsx",
        icon: FiFile,
        action: "home",
      },
      {
        label: "about.html",
        icon: FiFile,
        action: "about",
      },
      {
        label: "projects.js",
        icon: FiFile,
        action: "projects",
      },
      {
        label: "skills.json",
        icon: FiFile,
        action: "skills",
      },
      {
        label: "experience.ts",
        icon: FiFile,
        action: "experience",
      },
      {
        label: "contact.css",
        icon: FiFile,
        action: "contact",
      },
      {
        label: "README.md",
        icon: FiFile,
        action: "readme",
      },
    ],

    Run: [
      {
        label: "Start Terminal",
        shortcut: "Ctrl+`",
        icon: FiTerminal,
        action: "terminal",
      },
      {
        label: "Run Last Command",
        icon: FiPlay,
        action: "run-last",
      },
    ],

    Terminal: [
      {
        label: "New Terminal",
        shortcut: "Ctrl+`",
        icon: FiTerminal,
        action: "terminal",
      },
      {
        label: "Toggle Terminal",
        shortcut: "Ctrl+`",
        icon: FiTerminal,
        action: "terminal",
      },
    ],

    Help: [
      {
        label: "Command Palette",
        shortcut: "Ctrl+P",
        icon: FiCommand,
        action: "palette",
      },
      {
        label: "Keyboard Shortcuts",
        shortcut: "Ctrl+K Ctrl+S",
        icon: FiHelpCircle,
        action: "settings",
      },
      {
        divider: true,
      },
      {
        label: "GitHub ↗",
        icon: FiGithub,
        action: "github",
      },
      {
        label: "About Ajad Bharti",
        icon: FiInfo,
        action: "about",
      },
    ],
  };

  function executeMenuItem(item) {
    const fileActions = [
      "home",
      "about",
      "projects",
      "skills",
      "experience",
      "contact",
      "readme",
    ];

    if (fileActions.includes(item.action)) {
      onOpenFile?.(item.action);
      setActiveMenu(null);
      return;
    }

    runAction(item.action);
  }

  return (
    <div
      ref={menuRef}
      className="
        hidden
        md:flex
        h-8
        items-center
        gap-1
        px-3
        bg-[var(--panel)]
        border-b
        border-[var(--border)]
        text-xs
        text-gray-400
        select-none
        relative
        z-[60]
      "
    >
      {MENU_ITEMS.map((item) => {
        const isOpen = activeMenu === item;
        const menu = menus[item];

        return (
          <div
            key={item}
            className="relative h-full flex items-center"
          >
            <button
              type="button"
              onClick={() => handleMenuClick(item)}
              className={`
                h-7
                px-2
                rounded-sm
                transition-colors
                ${
                  isOpen
                    ? "bg-white/[0.08] text-gray-100"
                    : "hover:bg-white/[0.05] hover:text-gray-200"
                }
              `}
            >
              {item}
            </button>

            {isOpen && menu && (
              <div
                className="
                  absolute
                  top-8
                  left-0
                  min-w-[275px]
                  py-1
                  bg-[var(--panel)]
                  border
                  border-[var(--border)]
                  rounded-md
                  shadow-2xl
                  overflow-hidden
                "
              >
                {menu.map((entry, index) => {
                  if (entry.divider) {
                    return (
                      <div
                        key={`divider-${index}`}
                        className="
                          h-px
                          bg-[var(--border)]
                          my-1
                        "
                      />
                    );
                  }

                  const Icon = entry.icon;

                  return (
                    <button
                      key={`${entry.label}-${index}`}
                      type="button"
                      onClick={() =>
                        executeMenuItem(entry)
                      }
                      className="
                        w-full
                        min-h-[36px]
                        px-3
                        flex
                        items-center
                        gap-3
                        text-left
                        text-sm
                        text-gray-300
                        hover:bg-white/[0.07]
                        hover:text-gray-100
                        transition-colors
                      "
                    >
                      <span
                        className="
                          w-5
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        {Icon && (
                          <Icon
                            size={15}
                            className="text-gray-400"
                          />
                        )}
                      </span>

                      <span className="flex-1 whitespace-nowrap">
                        {entry.label}
                      </span>

                      {entry.shortcut && (
                        <kbd
                          className="
                            text-[10px]
                            text-gray-500
                            whitespace-nowrap
                          "
                        >
                          {entry.shortcut}
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
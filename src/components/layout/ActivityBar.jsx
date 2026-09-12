import React from "react";
import {
  FiFolder,
  FiSearch,
  FiGitBranch,
  FiGrid,
  FiSettings,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

const ICON_BTN =
  "w-full h-11 flex items-center justify-center text-lg cursor-pointer transition-colors relative";

export default function ActivityBar({
  active,
  onSelect,
  onSettingsClick,
}) {
  const items = [
    {
      key: "explorer",
      Icon: FiFolder,
      title: "Explorer",
    },
    {
      key: "search",
      Icon: FiSearch,
      title: "Search",
    },
    {
      key: "source-control",
      Icon: FiGitBranch,
      title: "Source Control",
    },
    {
      key: "extensions",
      Icon: FiGrid,
      title: "Extensions",
    },
    {
      key: "copilot",
      Icon: HiOutlineSparkles,
      title: "Copilot",
    },
  ];

  return (
    <div
      className="
        w-12
        shrink-0
        bg-[var(--sidebar)]
        border-r
        border-[var(--border)]
        flex
        flex-col
        justify-between
        items-center
        py-2
      "
    >
      <div className="w-full flex flex-col items-center">
        {items.map((item) => {
          const Icon = item.Icon;

          return (
            <button
              key={item.key}
              type="button"
              title={item.title}
              aria-label={item.title}
              onClick={() => onSelect(item.key)}
              className={`${ICON_BTN} ${
                active === item.key
                  ? "text-[var(--accent)]"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {active === item.key && (
                <span
                  className="
                    absolute
                    left-0
                    top-1.5
                    bottom-1.5
                    w-0.5
                    bg-[var(--accent)]
                    rounded-r
                  "
                />
              )}

              <Icon size={19} />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        title="Settings"
        aria-label="Settings"
        onClick={onSettingsClick}
        className={`${ICON_BTN} text-gray-500 hover:text-gray-300`}
      >
        <FiSettings size={19} />
      </button>
    </div>
  );
}
import React from "react";

const ICON_BTN =
  "w-full h-11 flex items-center justify-center text-lg cursor-pointer transition-colors relative";

export default function ActivityBar({ active, onSelect, onSettingsClick }) {
  const items = [
    { key: "explorer", icon: "📁", title: "Explorer" },
    { key: "search", icon: "🔍", title: "Search" },
    { key: "source-control", icon: "🌿", title: "Source Control" },
    { key: "extensions", icon: "🧩", title: "Extensions" },
    { key: "copilot", icon: "✨", title: "Copilot" },
  ];

  return (
    <div className="w-12 bg-[var(--sidebar)] border-r border-[var(--border)] flex flex-col justify-between items-center py-2">
      <div className="w-full flex flex-col items-center">
        {items.map((item) => (
          <button
            key={item.key}
            title={item.title}
            onClick={() => onSelect(item.key)}
            className={`${ICON_BTN} ${
              active === item.key
                ? "text-[var(--accent)]"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {active === item.key && (
              <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-[var(--accent)] rounded-r" />
            )}
            {item.icon}
          </button>
        ))}
      </div>
      <button
        title="Settings"
        onClick={onSettingsClick}
        className={`${ICON_BTN} text-gray-500 hover:text-gray-300`}
      >
        ⚙️
      </button>
    </div>
  );
}
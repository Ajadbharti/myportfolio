import React from "react";

const ICONS = {
  github: "🐙",
  linkedin: "💼",
  mail: "✉️",
  medium: "📝",
  leetcode: "🧩",
  youtube: "▶️",
  instagram: "📷",
  twitter: "🐦",
};

export default function SocialLink({ name, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 border border-[var(--border)] rounded-md px-3 py-2 text-sm text-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
    >
      <span>{ICONS[icon] || "🔗"}</span>
      {name}
    </a>
  );
}
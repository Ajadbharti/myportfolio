import React from "react";
import { profile } from "../data/profile";

const STACK = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript"],
  "Frontend:": ["React.js", "Tailwind CSS", "Vite", "HTML5", "CSS3"],
  "Backend:": ["Node.js", "Express.js", "MongoDB", "MySQL", "REST API", "JWT"],
  "CS Core:": ["DSA", "DBMS", "Operating Systems"],
};

const BADGES = [
  { label: "Python", color: "#3776ab", icon: "🐍" },
  { label: "JavaScript", color: "#f7df1e", icon: "🟨" },
  { label: "React", color: "#61dafb", icon: "⚛️" },
  { label: "Node.js", color: "#339933", icon: "🟢" },
  { label: "MongoDB", color: "#47a248", icon: "🍃" },
];

export default function Readme() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <h1 className="font-display text-5xl font-bold text-gray-100 mb-2">{profile.name}</h1>
      <p className="text-sm text-gray-400 mb-4">
        {profile.role} · B.Tech CSE Student · {profile.location}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-[var(--border)]">
        {BADGES.map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded border"
            style={{ borderColor: b.color + "55", color: b.color }}
          >
            {b.icon} {b.label}
          </span>
        ))}
      </div>

      <h2 className="font-display text-xl font-bold text-gray-100 mb-3 flex items-center gap-2">
        💜 About
      </h2>
      <p className="text-gray-300 leading-relaxed mb-4">{profile.bio}</p>
      <ul className="space-y-2 mb-10 text-sm text-gray-400">
        {profile.aboutBullets.map((b) => (
          <li key={b.text} className="flex items-start gap-2">
            <span>{b.icon}</span>
            <span>{b.text}</span>
          </li>
        ))}
      </ul>

      <h2 className="font-display text-xl font-bold text-gray-100 mb-4">Stack</h2>
      <div className="space-y-3">
        {Object.entries(STACK).map(([label, items]) => (
          <div key={label} className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 w-24 shrink-0">{label}</span>
            {items.map((item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-1 rounded border border-[var(--border)] text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
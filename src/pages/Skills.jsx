import React from "react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <p className="text-sm text-emerald-400 font-mono mb-4">
        // skills.json — tech stack & tools I actually use
      </p>
      <h1 className="font-display text-5xl font-bold text-gray-100 mb-2">Skills</h1>
      <p className="text-sm text-gray-500 mb-10 font-mono">
        {'{ "status": "always_learning", "passion": "immeasurable" }'}
      </p>

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xs tracking-widest text-gray-400 font-bold mb-5">
              {cat.title.toUpperCase()}
            </h2>
            <div className="space-y-4">
              {cat.skills.map((s) => (
                <SkillRow key={s.name} name={s.name} level={s.level} color={cat.color} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillRow({ name, level, color }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-300 w-36 shrink-0">{name}</span>
      <div className="flex-1 h-[3px] bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="skill-fill h-full rounded-full"
          style={{ width: `${level}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs w-9 text-right shrink-0" style={{ color }}>
        {level}%
      </span>
    </div>
  );
}
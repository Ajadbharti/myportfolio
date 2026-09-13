import React from "react";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <div
      className="
        w-full
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        py-6
        sm:py-8
        animate-fade-in
      "
    >
      {/* =================================================
          HEADER
      ================================================== */}

      <p className="text-xs sm:text-sm text-emerald-400 font-mono mb-3 sm:mb-4 leading-relaxed">
        // skills.json — tech stack & tools I actually use
      </p>

      <h1
        className="
          font-display
          text-4xl
          sm:text-5xl
          font-bold
          text-gray-100
          mb-1
        "
      >
        Skills
      </h1>

      <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 font-mono break-words">
        {'{ "status": "always_learning", "passion": "immeasurable" }'}
      </p>

      {/* =================================================
          CATEGORIES
      ================================================== */}

      <div className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-12 gap-y-8 sm:gap-y-10">
        {skillCategories.map((cat) => (
          <div key={cat.title}>
            <h2 className="text-xs tracking-widest text-gray-400 font-bold mb-4 sm:mb-5">
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
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-xs sm:text-sm text-gray-300 w-24 sm:w-32 md:w-36 shrink-0 truncate">
        {name}
      </span>
      <div className="flex-1 min-w-0 h-[3px] bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="skill-fill h-full rounded-full"
          style={{ width: `${level}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-[11px] sm:text-xs w-8 sm:w-9 text-right shrink-0" style={{ color }}>
        {level}%
      </span>
    </div>
  );
}
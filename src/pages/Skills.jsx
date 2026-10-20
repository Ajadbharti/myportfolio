import React, { useEffect, useState } from "react";
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
        {skillCategories.map((cat) => {
          const bars = cat.skills.filter((s) => typeof s.level === "number");
          const tags = cat.skills.filter((s) => typeof s.level !== "number");

          return (
            <div key={cat.title} className="min-w-0">
              <h2
                className="
                  flex
                  items-center
                  justify-between
                  text-xs
                  tracking-widest
                  text-amber-400/90
                  font-bold
                  mb-3
                  pb-2
                  border-b
                  border-[var(--border)]
                "
              >
                <span>{cat.title.toUpperCase()}</span>
                <span className="font-normal tracking-normal text-gray-600">
                  {cat.skills.length}
                </span>
              </h2>

              {bars.length > 0 && (
                <div className="space-y-4 mt-4">
                  {bars.map((s, i) => (
                    <SkillRow
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      color={cat.color}
                      delay={i * 90}
                    />
                  ))}
                </div>
              )}

              {tags.length > 0 && (
                <div className={`flex flex-wrap gap-2 ${bars.length > 0 ? "mt-5" : "mt-4"}`}>
                  {tags.map((s) => (
                    <span
                      key={s.name}
                      className="
                        flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        px-3
                        py-1.5
                        text-xs
                        sm:text-sm
                        text-gray-200
                        bg-white/[0.02]
                        transition-colors
                        hover:bg-white/[0.06]
                      "
                      style={{ borderColor: `${cat.color}55` }}
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      {s.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillRow({ name, level, color, delay }) {
  // Bars start empty and grow to their level when the page opens.
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => setWidth(level), 150 + delay);
    return () => clearTimeout(id);
  }, [level, delay]);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-xs sm:text-sm text-gray-300 w-24 sm:w-32 md:w-36 shrink-0 truncate">
        {name}
      </span>

      <div className="flex-1 min-w-0 h-[3px] bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="skill-fill h-full rounded-full"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>

      <span
        className="text-[11px] sm:text-xs w-8 sm:w-9 text-right shrink-0"
        style={{ color }}
      >
        {level}%
      </span>
    </div>
  );
}
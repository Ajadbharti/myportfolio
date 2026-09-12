import React from "react";
import { FiActivity, FiSun, FiSliders } from "react-icons/fi";

const ICONS = {
  fitness: FiActivity,
  eco: FiSun,
  tools: FiSliders,
};

export default function ProjectCard({ project }) {
  const Icon = ICONS[project.icon] || FiSliders;

  return (
    <div className="card-lift border border-[var(--border)] rounded-lg p-5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-[var(--accent)]/40 flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <span className="w-9 h-9 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          <Icon size={18} className="text-[var(--accent)]" />
        </span>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] border border-[var(--border)] rounded px-2 py-1 text-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] border border-[var(--accent)] rounded px-2 py-1 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className={`text-[11px] tracking-wide font-semibold mb-2 ${project.categoryColor}`}>
        {project.category}
      </p>
      <h3 className="font-display text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-4">{project.description}</p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-1 rounded border border-[var(--border)] text-gray-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
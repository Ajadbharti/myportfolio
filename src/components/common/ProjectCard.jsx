import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-5 bg-[var(--panel)]/40 hover:border-[var(--accent)]/40 transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl">{project.icon}</span>
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
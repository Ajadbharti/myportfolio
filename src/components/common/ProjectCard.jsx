
import React, { useState } from "react";
import {
  FiActivity, FiSun, FiSliders, FiMessageCircle,
  FiShoppingBag, FiMusic, FiGithub, FiGlobe,
  FiArrowUpRight, FiCode, FiLayers,
  FiChevronLeft, FiChevronRight,
} from "react-icons/fi";

const ICONS = {
  fitness: FiActivity,
  eco: FiSun,
  tools: FiSliders,
  chat: FiMessageCircle,
  delivery: FiShoppingBag,
  music: FiMusic,
  portfolio: FiCode,
  store: FiShoppingBag,
  multithreading: FiLayers,
};

export default function ProjectCard({ project }) {
  const Icon = ICONS[project.icon] || FiCode;
  const [activeImage, setActiveImage] = useState(0);
  const screenshots = (project.screenshots || []).filter(Boolean);
  const hasScreenshots = screenshots.length > 0;

  const moveImage = (direction) => {
    setActiveImage((current) =>
      (current + direction + screenshots.length) % screenshots.length
    );
  };

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#24404D] bg-[#0D1117]/95 transition-all duration-300 hover:-translate-y-1 hover:border-[#58A6FF]/60 hover:shadow-xl hover:shadow-blue-500/[0.06]">
      {/* Screenshot slider */}
      <div className="relative m-2.5 mb-0 h-[145px] overflow-hidden rounded-xl border border-[#263640] bg-[#111923] sm:h-[155px]">
        {hasScreenshots ? (
          <img
            key={screenshots[activeImage]}
            src={screenshots[activeImage]}
            alt={`${project.title} screenshot ${activeImage + 1}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#101B28] via-[#0D1117] to-[#14283D]">
            <Icon size={30} className="text-[#58A6FF]" />
            <span className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
              {project.title}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />

        <span className="absolute right-2 top-2 rounded-full border border-white/30 bg-black/65 px-3 py-1 text-[10px] text-white backdrop-blur">
          Hover ›
        </span>

        {screenshots.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => moveImage(-1)}
              aria-label={`Previous ${project.title} screenshot`}
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/65 text-white hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              <FiChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() => moveImage(1)}
              aria-label={`Next ${project.title} screenshot`}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/65 text-white hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              <FiChevronRight size={16} />
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-2 py-1">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-current={activeImage === index ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all ${
                    activeImage === index
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <h2 className="text-lg font-bold leading-snug text-gray-100 transition-colors group-hover:text-[#58A6FF]">
          {project.title}
        </h2>

        <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
          <span className={`rounded-full border border-current/30 px-2.5 py-1 text-[10px] ${project.categoryColor || "text-emerald-400"}`}>
            <span className="mr-1">●</span>
            {project.category}
          </span>

          <span className="rounded-full border border-[#58A6FF]/50 bg-[#58A6FF]/10 px-2.5 py-1 text-[10px] text-[#58A6FF]">
            {project.status}
          </span>

          {project.date && (
            <span className="ml-auto text-[10px] text-gray-500">
              {project.date}
            </span>
          )}
        </div>

        <p className="mt-2.5 text-xs leading-[1.65] text-gray-400">
          {project.description}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {(project.tech || []).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#30363D] px-2.5 py-1 text-[10px] text-gray-300 transition-colors hover:border-[#58A6FF]/50 hover:text-[#58A6FF]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#38434D] px-4 py-1.5 text-xs text-gray-100 transition hover:border-[#58A6FF] hover:text-[#58A6FF]"
            >
              <FiGithub size={14} />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#58A6FF] px-4 py-1.5 text-xs text-[#58A6FF] transition hover:bg-[#58A6FF]/10"
            >
              <FiGlobe size={14} />
              Live
              <FiArrowUpRight size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

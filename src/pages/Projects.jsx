
import React, { useMemo, useState } from "react";
import { FiFolder } from "react-icons/fi";
import { projects } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

const FILTERS = ["All", "Full Stack", "Frontend", "Tools", "Other"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="w-full animate-fade-in px-4 py-7 sm:px-6 sm:py-9 lg:px-10 xl:px-12">
      {/* Heading */}
      <div className="mb-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-2 font-mono text-xs text-emerald-400 sm:text-sm">
            // projects.js : things I've built &amp; shipped
          </p>

          <h1 className="font-display text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Projects<span className="text-[#58A6FF]">.</span>
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            A collection of products, experiments, and ideas brought to life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex max-w-full flex-wrap gap-1.5 rounded-xl border border-[#243746] bg-[#0D1117] p-1.5">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-3.5 py-2 text-xs transition-all ${
                activeFilter === filter
                  ? "bg-[#58A6FF] font-semibold text-[#08111F] shadow-md shadow-blue-500/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <div className="mb-3 flex items-center gap-2 font-mono text-xs text-gray-500">
        <FiFolder className="text-[#58A6FF]" />
        {String(filteredProjects.length).padStart(2, "0")} PROJECTS
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

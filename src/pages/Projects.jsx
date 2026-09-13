import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

export default function Projects() {
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
        // projects.js : things I've built &amp; shipped
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
        Projects
      </h1>

      <p className="text-xs sm:text-sm text-gray-500 mb-8 sm:mb-10 font-mono break-words">
        const projects = [ ...shipped, ...building ]
      </p>

      {/* =================================================
          GRID
      ================================================== */}

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
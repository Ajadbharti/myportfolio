import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/common/ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <p className="text-sm text-emerald-400 font-mono mb-4">
        // projects.js : things I've built & shipped
      </p>
      <h1 className="font-display text-5xl font-bold text-gray-100 mb-2">Projects</h1>
      <p className="text-sm text-gray-500 mb-10 font-mono">
        const projects = [ ...shipped, ...building ]
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
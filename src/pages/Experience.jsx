import React from "react";
import { experience } from "../data/experience";
import TimelineItem from "../components/common/TimelineItem";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <p className="text-sm text-emerald-400 font-mono mb-4">
        // experience.ts - professional journey
      </p>
      <h1 className="font-display text-5xl font-bold text-gray-100 mb-2">Experience</h1>
      <p className="text-sm text-gray-500 mb-10 font-mono">
        interface Career extends Timeline {"{}"}
      </p>

      {experience.length === 0 ? (
        <div className="border border-dashed border-[var(--border)] rounded-lg p-10 text-center">
          <p className="text-4xl mb-3">🚀</p>
          <h3 className="font-display text-xl font-bold text-gray-100 mb-2">
            Open to opportunities
          </h3>
          <p className="text-sm text-gray-400 max-w-md mx-auto">
            I haven't started my first internship yet, but I'm actively building projects and
            looking for a role where I can contribute as a Full Stack MERN Developer. Reach out on
            the Contact page — I'd love to talk!
          </p>
        </div>
      ) : (
        <div>
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.role + exp.company}
              dateRange={exp.dateRange}
              title={exp.role}
              subtitle={`@ ${exp.company}`}
              description={exp.description}
              tech={exp.tech}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
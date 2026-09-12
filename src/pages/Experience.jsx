import React from "react";
import { FiCompass } from "react-icons/fi";
import { experience } from "../data/experience";
import TimelineItem from "../components/common/TimelineItem";

export default function Experience() {
  return (
    <div
      className="
        w-full
        px-8
        sm:px-10
        lg:px-12
        py-8
        animate-fade-in
      "
    >
      {/* =================================================
          HEADER
      ================================================== */}

      <p className="text-sm text-emerald-400 font-mono mb-3">
        // experience.ts - professional journey
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
        Experience
      </h1>

      <p
        className="
          text-sm
          text-gray-500
          mb-7
          font-mono
        "
      >
        interface Career extends Timeline {"{}"}
      </p>

      {/* =================================================
          EXPERIENCE
      ================================================== */}

      {experience.length === 0 ? (
        <div
          className="
            border
            border-dashed
            border-[var(--border)]
            rounded-lg
            px-6
            py-10
            flex
            flex-col
            items-center
            text-center
          "
        >
          <FiCompass
            size={34}
            className="text-[var(--accent)] mb-3"
          />

          <h3
            className="
              font-display
              text-xl
              font-bold
              text-gray-100
              mb-2
            "
          >
            Open to opportunities
          </h3>

          <p
            className="
              text-sm
              text-gray-400
              max-w-xl
              leading-relaxed
            "
          >
            I haven't started my first internship yet, but I'm
            actively building projects and looking for a role
            where I can contribute as a Full Stack MERN
            Developer. Reach out on the Contact page — I'd love
            to talk!
          </p>
        </div>
      ) : (
        <div className="w-full">
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
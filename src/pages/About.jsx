import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { profile } from "../data/profile";
import { education } from "../data/education";
import BulletIcon from "../components/common/BulletIcon";

export default function About() {
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
        {"<!-- about.html - " + profile.name + " -->"}
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
        About Me
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        // who I am · what I do · where I build
      </p>

      {/* =================================================
          INTRODUCTION
      ================================================== */}

      <div
        className="
          card-lift
          border
          border-[var(--border)]
          rounded-lg
          px-6
          py-5
          mb-5
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      >
        <p
          className="
            text-gray-300
            leading-relaxed
            text-[15px]
          "
        >
          Hi! I'm{" "}
          <span className="font-semibold text-gray-100">
            {profile.name}
          </span>
          ,{" "}
          {profile.bio.slice(
            profile.bio.indexOf(",") + 1
          )}
        </p>
      </div>

      {/* =================================================
          CURRENT FOCUS
      ================================================== */}

      <div
        className="
          card-lift
          border
          border-[var(--border)]
          rounded-lg
          px-6
          py-5
          mb-6
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      >
        <h2
          className="
            text-xs
            tracking-widest
            text-emerald-400
            font-bold
            mb-4
          "
        >
          CURRENT FOCUS
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {profile.aboutBullets.map((b) => (
            <div
              key={b.text}
              className="
                flex
                items-start
                gap-2.5
                text-sm
                text-gray-300
              "
            >
              <BulletIcon
                icon={b.icon}
                className="
                  text-[var(--accent)]
                  mt-0.5
                  shrink-0
                "
              />

              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* =================================================
          EDUCATION
      ================================================== */}

      <h2
        className="
          text-xs
          tracking-widest
          text-emerald-400
          font-bold
          mb-3
        "
      >
        EDUCATION
      </h2>

      <div className="space-y-3">
        {education.map((e) => (
          <div
            key={e.school}
            className="
              card-lift
              border
              border-[var(--border)]
              rounded-lg
              px-6
              py-5
              bg-gradient-to-b
              from-white/[0.03]
              to-transparent
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-start
                justify-between
                gap-2
                mb-1
              "
            >
              <h3
                className="
                  font-display
                  text-lg
                  font-bold
                  text-gray-100
                  flex
                  items-center
                  gap-2
                "
              >
                <FiBookOpen
                  size={16}
                  className="text-[var(--accent)]"
                />

                {e.school}
              </h3>

              <span className="text-sm text-gray-500">
                {e.dateRange}
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-1">
              {e.status}
            </p>

            <p
              className="
                text-sm
                text-[var(--accent)]
                font-medium
                mb-1
              "
            >
              {e.degree}
            </p>

            <p className="text-sm text-gray-400">
              {e.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
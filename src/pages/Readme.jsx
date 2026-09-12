import React from "react";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { profile } from "../data/profile";
import BulletIcon from "../components/common/BulletIcon";

const STACK = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript"],
  "Frontend:": [
    "React.js",
    "Tailwind CSS",
    "Vite",
    "HTML5",
    "CSS3",
  ],
  "Backend:": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "REST API",
    "JWT",
  ],
  "CS Core:": [
    "DSA",
    "DBMS",
    "Operating Systems",
  ],
};

const BADGES = [
  {
    label: "Python",
    color: "#3776ab",
    Icon: FaPython,
  },
  {
    label: "JavaScript",
    color: "#f7df1e",
    Icon: SiJavascript,
  },
  {
    label: "React",
    color: "#61dafb",
    Icon: FaReact,
  },
  {
    label: "Node.js",
    color: "#339933",
    Icon: FaNodeJs,
  },
  {
    label: "MongoDB",
    color: "#47a248",
    Icon: SiMongodb,
  },
];

export default function Readme() {
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
        {profile.name}
      </h1>

      <p
        className="
          text-sm
          text-gray-400
          mb-5
        "
      >
        {profile.role} · B.Tech CSE Student ·{" "}
        {profile.location}
      </p>

      {/* =================================================
          TECHNOLOGY BADGES
      ================================================== */}

      <div
        className="
          flex
          flex-wrap
          gap-2
          mb-6
          pb-6
          border-b
          border-[var(--border)]
        "
      >
        {BADGES.map((b) => {
          const Icon = b.Icon;

          return (
            <span
              key={b.label}
              className="
                flex
                items-center
                gap-1.5
                text-xs
                px-3
                py-1.5
                rounded
                border
              "
              style={{
                borderColor: b.color + "55",
                color: b.color,
              }}
            >
              <Icon size={12} />
              {b.label}
            </span>
          );
        })}
      </div>

      {/* =================================================
          ABOUT
      ================================================== */}

      <h2
        className="
          font-display
          text-xl
          font-bold
          text-gray-100
          mb-3
          flex
          items-center
          gap-2
        "
      >
        <FiHeart
          size={16}
          className="text-[var(--accent-2)]"
        />

        About
      </h2>

      <p
        className="
          text-gray-300
          leading-relaxed
          text-[15px]
          mb-3
        "
      >
        {profile.bio}
      </p>

      <ul
        className="
          space-y-2
          mb-7
          text-sm
          text-gray-400
        "
      >
        {profile.aboutBullets.map((b) => (
          <li
            key={b.text}
            className="
              flex
              items-start
              gap-2.5
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
          </li>
        ))}
      </ul>

      {/* =================================================
          STACK
      ================================================== */}

      <h2
        className="
          font-display
          text-xl
          font-bold
          text-gray-100
          mb-3
        "
      >
        Stack
      </h2>

      <div className="space-y-2.5">
        {Object.entries(STACK).map(
          ([label, items]) => (
            <div
              key={label}
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span
                className="
                  text-sm
                  text-gray-500
                  w-24
                  shrink-0
                "
              >
                {label}
              </span>

              {items.map((item) => (
                <span
                  key={item}
                  className="
                    text-xs
                    px-2.5
                    py-1
                    rounded
                    border
                    border-[var(--border)]
                    text-gray-300
                    hover:border-gray-500
                    transition-colors
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { profile } from "../data/profile";
import StatCard from "../components/common/StatCard";
import SocialLink from "../components/common/SocialLink";

const BADGE_COLORS = {
  emerald: "text-emerald-400",
  pink: "text-pink-400",
  blue: "text-blue-400",
  violet: "text-violet-400",
};

export default function Home({ onNavigate }) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const full = profile.typingLine;

    let i = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      if (!deleting) {
        i++;

        setTyped(full.slice(0, i));

        if (i >= full.length) {
          deleting = true;

          timeoutId = setTimeout(tick, 1800);
          return;
        }

        timeoutId = setTimeout(tick, 55);
      } else {
        i--;

        setTyped(full.slice(0, i));

        if (i <= 0) {
          deleting = false;

          timeoutId = setTimeout(tick, 500);
          return;
        }

        timeoutId = setTimeout(tick, 30);
      }
    }

    timeoutId = setTimeout(tick, 55);

    return () => clearTimeout(timeoutId);
  }, []);

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
          HELLO
      ================================================== */}

      <p
        className="
          text-sm
          text-emerald-400
          font-mono
          mb-5
        "
      >
        // hello world !! Welcome to my portfolio
      </p>

      {/* =================================================
          NAME
      ================================================== */}

      <h1
        className="
          font-display
          text-6xl
          sm:text-7xl
          lg:text-8xl
          font-bold
          leading-[0.9]
          tracking-tight
          mb-7
        "
      >
        <span className="block text-gray-100">
          {profile.firstName}
        </span>

        <span className="block text-[var(--accent-2)]">
          {profile.lastName}
        </span>
      </h1>

      {/* =================================================
          BADGES
      ================================================== */}

      <div className="flex flex-wrap gap-2 mb-5">
        {profile.badges.map((b) => (
          <span
            key={b.label}
            className={`
              flex
              items-center
              gap-1.5
              text-xs
              px-3
              py-1.5
              rounded-full
              border
              border-[var(--border)]
              bg-white/[0.02]
              ${BADGE_COLORS[b.color] || "text-gray-300"}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />

            {b.label}
          </span>
        ))}
      </div>

      {/* =================================================
          TYPING LINE
      ================================================== */}

      <p
        className="
          text-sm
          text-gray-400
          mb-8
          min-h-5
          font-mono
        "
      >
        {typed}

        <span
          className="
            inline-block
            w-1.5
            h-4
            bg-[var(--accent)]
            ml-0.5
            align-middle
            animate-blink
          "
        />
      </p>

      {/* =================================================
          INTRO
      ================================================== */}

      <p
        className="
          text-lg
          sm:text-xl
          text-gray-300
          leading-relaxed
          mb-8
          max-w-4xl
        "
      >
        I live at the crossroads of{" "}
        <span
          className="
            text-[var(--accent)]
            font-semibold
          "
        >
          frontend craft
        </span>
        ,{" "}
        <span
          className="
            text-[var(--accent)]
            font-semibold
          "
        >
          backend systems
        </span>
        , and{" "}
        <span
          className="
            text-[var(--accent)]
            font-semibold
          "
        >
          clean architecture
        </span>
        . I build systems that are genuinely{" "}
        <span className="text-gray-100 font-semibold">
          reliable
        </span>{" "}
        and{" "}
        <span className="text-gray-100 font-semibold">
          scalable
        </span>
        .
      </p>

      {/* =================================================
          BUTTONS
      ================================================== */}

      <div className="flex flex-wrap gap-3 mb-8">
        {/* Projects */}

        <button
          type="button"
          onClick={() => onNavigate("projects")}
          className="
            flex
            items-center
            gap-2
            bg-[var(--accent)]
            text-black
            font-semibold
            px-5
            py-2.5
            rounded-md
            text-sm
            hover:opacity-90
            hover:-translate-y-0.5
            transition-all
            btn-glow
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7h6l2 2h10v10H3z" />
          </svg>

          Projects
        </button>

        {/* About */}

        <button
          type="button"
          onClick={() => onNavigate("about")}
          className="
            flex
            items-center
            gap-2
            border
            border-[var(--border)]
            bg-white/[0.02]
            px-5
            py-2.5
            rounded-md
            text-sm
            text-gray-200
            hover:border-gray-500
            hover:-translate-y-0.5
            transition-all
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="3" />
            <path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" />
          </svg>

          About Me
        </button>

        {/* Contact */}

        <button
          type="button"
          onClick={() => onNavigate("contact")}
          className="
            flex
            items-center
            gap-2
            border
            border-[var(--border)]
            bg-white/[0.02]
            px-5
            py-2.5
            rounded-md
            text-sm
            text-gray-200
            hover:border-gray-500
            hover:-translate-y-0.5
            transition-all
          "
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>

          Contact
        </button>
      </div>

      {/* =================================================
          STATS
      ================================================== */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          border
          border-[var(--border)]
          rounded-lg
          overflow-hidden
          divide-y
          sm:divide-y-0
          sm:divide-x
          divide-[var(--border)]
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      >
        {profile.stats.map((s) => (
          <StatCard
            key={s.label}
            value={s.value}
            label={s.label}
          />
        ))}
      </div>

      {/* =================================================
          SOCIALS
      ================================================== */}

      <div className="flex flex-wrap gap-3 mt-6">
        {profile.socials.map((s) => (
          <SocialLink
            key={s.name}
            {...s}
          />
        ))}
      </div>
    </div>
  );
}
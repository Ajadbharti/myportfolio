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
        home-page
        w-full
        min-h-full
        px-4
        py-6
        sm:px-6
        sm:py-8
        md:px-8
        lg:px-10
        xl:px-12
        animate-fade-in
      "
    >
      {/* =================================================
          HELLO + NAME + PHOTO
      ================================================== */}

      <div
        className="
          flex
          flex-col-reverse
          sm:flex-row
          sm:items-start
          sm:justify-between
          gap-6
          sm:gap-8
          mb-5
          sm:mb-7
        "
      >
        <div className="min-w-0 flex-1">
          <p
            className="
              text-xs
              sm:text-sm
              text-emerald-400
              font-mono
              mb-4
              sm:mb-5
              leading-relaxed
            "
          >
            // hello world !! Welcome to my portfolio
          </p>

          <h1
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              leading-[0.9]
              tracking-tight
            "
          >
            <span className="block text-gray-100">
              {profile.firstName}
            </span>

            <span className="block text-[var(--accent-2)]">
              {profile.lastName}
            </span>
          </h1>
        </div>

        {/* Profile photo — put your image at public/profile.png */}
        <div
          className="
            group
            relative
            shrink-0
            self-center
            sm:self-start
            w-36
            h-44
            sm:w-48
            sm:h-64
            md:w-56
            md:h-72
            sm:-translate-x-12
            md:-translate-x-16
            mr-2
            sm:mr-4
            md:mr-6
            rounded-2xl
            overflow-hidden
            border
            border-[var(--border)]
            cursor-pointer
          "
        >
          <img
            src="/profile.png"
            alt={profile.name}
            className="
              w-full
              h-full
              object-cover
              object-top
              bg-[var(--panel)]
              grayscale
              contrast-125
              transition-transform
              duration-500
              group-hover:scale-110
            "
            onError={(e) => {
              e.currentTarget.parentElement.style.display = "none";
            }}
          />

          {/* Cyan duotone tint — appears on hover */}
          <div
            className="
              absolute
              inset-0
              bg-cyan-400
              mix-blend-color
              opacity-0
              group-hover:opacity-60
              transition-opacity
              duration-400
            "
          />

          {/* Subtle dark vignette so the floating tags stay readable */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-black/20
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-400
            "
          />

          {/* Glowing connector dot */}
          <span
            className="
              absolute
              left-[38%]
              top-[58%]
              w-2.5
              h-2.5
              rounded-full
              bg-cyan-300
              opacity-0
              scale-0
              group-hover:opacity-100
              group-hover:scale-100
              transition-all
              duration-500
              shadow-[0_0_10px_3px_rgba(34,211,238,0.7)]
            "
          />

          {/* Floating terminal tag — top right */}
          <div
            className="
              absolute
              top-3
              right-3
              flex
              items-center
              gap-1.5
              px-2.5
              py-1
              rounded-full
              bg-black/70
              border
              border-cyan-400/40
              backdrop-blur-sm
              text-[10px]
              sm:text-[11px]
              font-mono
              text-cyan-300
              opacity-0
              -translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-400
              delay-75
              whitespace-nowrap
            "
          >
            <span className="text-cyan-400">{">"}</span> npm run dev
          </div>

          {/* Floating terminal tag — bottom left */}
          <div
            className="
              absolute
              bottom-3
              left-3
              flex
              items-center
              gap-1.5
              px-2.5
              py-1
              rounded-full
              bg-black/70
              border
              border-cyan-400/40
              backdrop-blur-sm
              text-[10px]
              sm:text-[11px]
              font-mono
              text-cyan-300
              opacity-0
              translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-400
              delay-150
              whitespace-nowrap
            "
          >
            <span className="text-cyan-400">{">"}</span> const dev = true
          </div>
        </div>
      </div>

      {/* =================================================
          BADGES
      ================================================== */}

      <div
        className="
          flex
          flex-wrap
          gap-2
          mb-5
          max-w-full
        "
      >
        {profile.badges.map((b) => (
          <span
            key={b.label}
            className={`
              inline-flex
              items-center
              gap-1.5
              text-[11px]
              sm:text-xs
              px-2.5
              sm:px-3
              py-1.5
              rounded-full
              border
              border-[var(--border)]
              bg-white/[0.02]
              whitespace-nowrap
              ${BADGE_COLORS[b.color] || "text-gray-300"}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />

            {b.label}
          </span>
        ))}
      </div>

      {/* =================================================
          TYPING LINE
      ================================================== */}

      <p
        className="
          text-xs
          sm:text-sm
          text-gray-400
          mb-6
          sm:mb-8
          min-h-5
          font-mono
          leading-relaxed
          break-words
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
          text-base
          sm:text-lg
          lg:text-xl
          text-gray-300
          leading-7
          sm:leading-relaxed
          mb-6
          sm:mb-8
          w-full
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

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-2.5
          sm:gap-3
          mb-7
          sm:mb-8
        "
      >
        {/* Projects */}

        <button
          type="button"
          onClick={() => onNavigate("projects")}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            min-h-10
            px-4
            sm:px-5
            py-2.5
            rounded-md
            text-xs
            sm:text-sm
            bg-[var(--accent)]
            text-black
            font-semibold
            hover:opacity-90
            hover:-translate-y-0.5
            transition-all
            btn-glow
            whitespace-nowrap
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
            aria-hidden="true"
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
            inline-flex
            items-center
            justify-center
            gap-2
            min-h-10
            px-4
            sm:px-5
            py-2.5
            rounded-md
            text-xs
            sm:text-sm
            border
            border-[var(--border)]
            bg-white/[0.02]
            text-gray-200
            hover:border-gray-500
            hover:-translate-y-0.5
            transition-all
            whitespace-nowrap
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
            aria-hidden="true"
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
            inline-flex
            items-center
            justify-center
            gap-2
            min-h-10
            px-4
            sm:px-5
            py-2.5
            rounded-md
            text-xs
            sm:text-sm
            border
            border-[var(--border)]
            bg-white/[0.02]
            text-gray-200
            hover:border-gray-500
            hover:-translate-y-0.5
            transition-all
            whitespace-nowrap
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
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
            />
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
          grid
          grid-cols-2
          w-full
          border
          border-[var(--border)]
          rounded-lg
          overflow-hidden
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
        "
      >
        {profile.stats.map((s, index) => (
          <div
            key={s.label}
            className={`
              min-w-0
              ${
                index % 2 === 0
                  ? "border-r"
                  : ""
              }
              ${
                index < profile.stats.length - 2
                  ? "border-b"
                  : ""
              }
              border-[var(--border)]
            `}
          >
            <StatCard
              value={s.value}
              label={s.label}
            />
          </div>
        ))}
      </div>

      {/* =================================================
          SOCIALS
      ================================================== */}

      <div
        className="
          flex
          flex-wrap
          gap-2
          sm:gap-3
          mt-5
          sm:mt-6
          pb-2
        "
      >
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
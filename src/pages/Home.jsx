import React, { useEffect, useState } from "react";
import { FiFolder, FiUser, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";
import { home } from "../data/home";
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

  // Typewriter: type a line, pause, erase it, then move to the next line.
  useEffect(() => {
    const lines = home.typingLines;
    if (!lines || lines.length === 0) return undefined;

    let lineIdx = 0;
    let i = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const full = lines[lineIdx];

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
          lineIdx = (lineIdx + 1) % lines.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }

        timeoutId = setTimeout(tick, 28);
      }
    }

    timeoutId = setTimeout(tick, 400);

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
            sm:-translate-x-16
            md:-translate-x-24
            mr-2
            sm:mr-4
            md:mr-6
            rounded-2xl
            overflow-hidden
            bg-[var(--panel)]
            shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]
            transition-all
            duration-500
            ease-out
            hover:-translate-y-1.5
            hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.95)]
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
              grayscale
              contrast-125
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
            onError={(e) => {
              e.currentTarget.parentElement.style.display = "none";
            }}
          />

          {/* Soft dark vignette: the photo's colour never changes */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/55
              via-transparent
              to-black/25
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
            "
          />

          {/* Light sheen that sweeps across once on hover */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              w-1/3
              -translate-x-full
              -skew-x-12
              bg-gradient-to-r
              from-transparent
              via-white/15
              to-transparent
              transition-none
              group-hover:translate-x-[400%]
              group-hover:transition-transform
              group-hover:duration-1000
              group-hover:ease-out
            "
          />

          {/* Glass edge */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              ring-1
              ring-inset
              ring-white/10
              transition-all
              duration-500
              group-hover:ring-white/30
            "
          />

          {/* Viewfinder corners (same style as the cursor) */}
          {[
            "top-2 left-2 border-t border-l rounded-tl-md",
            "top-2 right-2 border-t border-r rounded-tr-md",
            "bottom-2 left-2 border-b border-l rounded-bl-md",
            "bottom-2 right-2 border-b border-r rounded-br-md",
          ].map((pos) => (
            <span
              key={pos}
              className={`
                pointer-events-none
                absolute
                h-4
                w-4
                border-white/70
                opacity-0
                scale-75
                transition-all
                duration-500
                ease-out
                group-hover:opacity-100
                group-hover:scale-100
                ${pos}
              `}
            />
          ))}

          {/* Floating terminal tag — top right */}
          <div
            className="
              absolute
              top-5
              right-5
              sm:top-6
              sm:right-6
              flex
              items-center
              gap-1.5
              px-2.5
              py-1
              rounded-full
              bg-black/60
              border
              border-white/20
              backdrop-blur-sm
              text-[10px]
              sm:text-[11px]
              font-mono
              text-gray-100
              opacity-0
              -translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
              delay-75
              whitespace-nowrap
            "
          >
            <span className="text-gray-400">{">"}</span> npm run dev
          </div>

          {/* Floating terminal tag — bottom left */}
          <div
            className="
              absolute
              bottom-5
              left-5
              sm:bottom-6
              sm:left-6
              flex
              items-center
              gap-1.5
              px-2.5
              py-1
              rounded-full
              bg-black/60
              border
              border-white/20
              backdrop-blur-sm
              text-[10px]
              sm:text-[11px]
              font-mono
              text-gray-100
              opacity-0
              translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all
              duration-500
              delay-150
              whitespace-nowrap
            "
          >
            <span className="text-gray-400">{">"}</span> const dev = true
          </div>
        </div>
      </div>

      {/* =================================================
          BADGES
      ================================================== */}

      <div className="flex flex-wrap gap-2 mb-5">
        {home.badges.map((b) => (
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
              bg-white/[0.03]
              ${BADGE_COLORS[b.color] || "text-gray-300"}
            `}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {b.label}
          </span>
        ))}
      </div>

      {/* =================================================
          TYPEWRITER
      ================================================== */}

      <p className="text-sm text-gray-400 mb-6 min-h-[1.5rem]">
        {typed}
        <span className="inline-block w-1.5 h-4 bg-[var(--accent)] ml-0.5 align-middle animate-blink" />
      </p>

      {/* =================================================
          INTRO (from CV)
      ================================================== */}

      <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 max-w-3xl">
        {home.intro.map((seg, i) =>
          seg.h ? (
            <span key={i} className="text-[var(--accent)] font-semibold">
              {seg.t}
            </span>
          ) : (
            <span key={i}>{seg.t}</span>
          )
        )}
      </p>

      <p className="text-xs sm:text-sm text-emerald-400 font-mono mb-8 leading-relaxed">
        // currently building: {home.currentlyBuilding}
      </p>

      {/* =================================================
          BUTTONS
      ================================================== */}

      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => onNavigate("projects")}
          className="btn-glow flex items-center gap-2 bg-[var(--accent)] text-black font-semibold px-5 py-2.5 rounded-md text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          <FiFolder size={15} /> Projects
        </button>

        <button
          onClick={() => onNavigate("about")}
          className="flex items-center gap-2 border border-[var(--border)] bg-white/[0.02] px-5 py-2.5 rounded-md text-sm text-gray-200 hover:border-gray-500 hover:-translate-y-0.5 transition-all"
        >
          <FiUser size={15} /> About Me
        </button>

        <button
          onClick={() => onNavigate("contact")}
          className="flex items-center gap-2 border border-[var(--border)] bg-white/[0.02] px-5 py-2.5 rounded-md text-sm text-gray-200 hover:border-gray-500 hover:-translate-y-0.5 transition-all"
        >
          <FiMail size={15} /> Contact
        </button>
      </div>

      {/* =================================================
          STATS (from CV)
      ================================================== */}

      <div className="flex flex-col sm:flex-row border border-[var(--border)] rounded-lg overflow-hidden mb-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)] bg-gradient-to-b from-white/[0.03] to-transparent">
        {home.stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      {/* =================================================
          SOCIALS
      ================================================== */}

      <div className="flex flex-wrap gap-3">
        {profile.socials.map((s) => (
          <SocialLink key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
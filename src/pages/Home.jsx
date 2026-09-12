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
    let i = 0;
    const full = profile.typingLine;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <p className="text-sm text-emerald-400 font-mono mb-6">
        // hello world !! Welcome to my portfolio
      </p>

      <h1 className="font-display text-5xl sm:text-6xl font-bold leading-[1.05] mb-6">
        <span className="text-gray-100">{profile.firstName}</span>
        <br />
        <span className="text-[var(--accent-2)]">{profile.lastName}</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-5">
        {profile.badges.map((b) => (
          <span
            key={b.label}
            className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[var(--border)] ${
              BADGE_COLORS[b.color] || "text-gray-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {b.label}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-400 mb-6 h-5">
        {typed}
        <span className="inline-block w-1.5 h-4 bg-[var(--accent)] ml-0.5 align-middle animate-blink" />
      </p>

      <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
        I live at the crossroads of{" "}
        <span className="text-[var(--accent)] font-semibold">frontend craft</span>,{" "}
        <span className="text-[var(--accent)] font-semibold">backend systems</span>, and{" "}
        <span className="text-[var(--accent)] font-semibold">clean architecture</span>. I build
        systems that are genuinely <span className="text-gray-100 font-semibold">reliable</span>{" "}
        and <span className="text-gray-100 font-semibold">scalable</span>.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        <button
          onClick={() => onNavigate("projects")}
          className="flex items-center gap-2 bg-[var(--accent)] text-black font-semibold px-5 py-2.5 rounded-md text-sm hover:opacity-90 transition-opacity"
        >
          📁 Projects
        </button>
        <button
          onClick={() => onNavigate("about")}
          className="flex items-center gap-2 border border-[var(--border)] px-5 py-2.5 rounded-md text-sm text-gray-200 hover:border-gray-500 transition-colors"
        >
          👤 About Me
        </button>
        <button
          onClick={() => onNavigate("contact")}
          className="flex items-center gap-2 border border-[var(--border)] px-5 py-2.5 rounded-md text-sm text-gray-200 hover:border-gray-500 transition-colors"
        >
          ✉ Contact
        </button>
      </div>

      <div className="flex flex-col sm:flex-row border border-[var(--border)] mb-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
        {profile.stats.map((s) => (
          <StatCard key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {profile.socials.map((s) => (
          <SocialLink key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
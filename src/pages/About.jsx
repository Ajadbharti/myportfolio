import React from "react";
import { profile } from "../data/profile";
import { education } from "../data/education";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <p className="text-sm text-emerald-400 font-mono mb-4">
        {"<!-- about.html - " + profile.name + " -->"}
      </p>
      <h1 className="font-display text-5xl font-bold text-gray-100 mb-2">About Me</h1>
      <p className="text-sm text-gray-500 mb-8">// who I am · what I do · where I build</p>

      <div className="border border-[var(--border)] rounded-lg p-6 mb-6 bg-[var(--panel)]/40">
        <p className="text-gray-300 leading-relaxed">
          Hi! I'm <span className="font-semibold text-gray-100">{profile.name}</span>, {profile.bio.slice(profile.bio.indexOf(",") + 1)}
        </p>
      </div>

      <div className="border border-[var(--border)] rounded-lg p-6 mb-6 bg-[var(--panel)]/40">
        <h2 className="text-xs tracking-widest text-emerald-400 font-bold mb-4">CURRENT FOCUS</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {profile.aboutBullets.map((b) => (
            <div key={b.text} className="flex items-start gap-2 text-sm text-gray-300">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xs tracking-widest text-emerald-400 font-bold mb-4">EDUCATION</h2>
      <div className="space-y-4">
        {education.map((e) => (
          <div
            key={e.school}
            className="border border-[var(--border)] rounded-lg p-6 bg-[var(--panel)]/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="font-display text-lg font-bold text-gray-100">
                🎓 {e.school}
              </h3>
              <span className="text-sm text-gray-500">{e.dateRange}</span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{e.status}</p>
            <p className="text-sm text-[var(--accent)] font-medium mb-1">{e.degree}</p>
            <p className="text-sm text-gray-400">{e.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ICONS = {
  github: { Icon: FaGithub, color: "#e6edf3" },
  linkedin: { Icon: FaLinkedin, color: "#0A66C2" },
  mail: { Icon: FaEnvelope, color: "#34d399" },
  medium: { Icon: FaMedium, color: "#e6edf3" },
  leetcode: { Icon: SiLeetcode, color: "#FFA116" },
  instagram: { Icon: FaInstagram, color: "#E4405F" },
  youtube: { Icon: FaYoutube, color: "#FF0000" },
};

export default function SocialLink({ name, url, icon }) {
  const entry = ICONS[icon];
  const Icon = entry?.Icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 border border-[var(--border)] bg-white/[0.02] rounded-md px-3 py-2 text-sm text-gray-300 hover:border-[var(--accent)] hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all font-mono"
    >
      {Icon ? <Icon style={{ color: entry.color }} size={16} /> : <span>🔗</span>}
      {name}
    </a>
  );
}
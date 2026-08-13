import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiC,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import { AiOutlineCluster } from "react-icons/ai";
import { PiCpuBold } from "react-icons/pi";

// ========================================
// SKILLS DATA
// ========================================

const categories = [
  {
    title: "Languages",
    items: [
      {
        name: "C",
        icon: SiC,
        color: "#A8B9CC",
        bg: "rgba(168,185,204,0.12)",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        bg: "rgba(0,89,156,0.12)",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#f89820",
        bg: "rgba(248,152,32,0.12)",
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
        bg: "rgba(55,118,171,0.12)",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        bg: "rgba(247,223,30,0.12)",
      },
    ],
  },

  {
    title: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E44D26",
        bg: "rgba(228,77,38,0.12)",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
        bg: "rgba(21,114,182,0.12)",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "#61DAFB",
        bg: "rgba(97,218,251,0.12)",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        bg: "rgba(56,189,248,0.12)",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#BD34FE",
        bg: "rgba(189,52,254,0.12)",
      },
    ],
  },

  {
    title: "Backend & Database",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#68A063",
        bg: "rgba(104,160,99,0.12)",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#ffffff",
        bg: "rgba(255,255,255,0.08)",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        bg: "rgba(71,162,72,0.12)",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        bg: "rgba(68,121,161,0.12)",
      },
      {
        name: "REST API",
        icon: TbApi,
        color: "#F97316",
        bg: "rgba(249,115,22,0.12)",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "#FB015B",
        bg: "rgba(251,1,91,0.12)",
      },
    ],
  },

  {
    title: "Core Fundamentals",
    items: [
      {
        name: "Data Structures",
        icon: AiOutlineCluster,
        color: "#22D3EE",
        bg: "rgba(34,211,238,0.12)",
      },
      {
        name: "Algorithms",
        icon: AiOutlineCluster,
        color: "#A78BFA",
        bg: "rgba(167,139,250,0.12)",
      },
      {
        name: "DBMS",
        icon: SiMysql,
        color: "#4479A1",
        bg: "rgba(68,121,161,0.12)",
      },
      {
        name: "Operating Systems",
        icon: PiCpuBold,
        color: "#FACC15",
        bg: "rgba(250,204,21,0.12)",
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        bg: "rgba(240,80,50,0.12)",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#ffffff",
        bg: "rgba(255,255,255,0.08)",
      },
      {
        name: "VS Code",
        icon: VscVscode,
        color: "#007ACC",
        bg: "rgba(0,122,204,0.12)",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        bg: "rgba(255,108,55,0.12)",
      },
    ],
  },
];

// ========================================
// BACKGROUND DOTS
// ========================================

function ScatterDots() {
  const dots = [
    { top: "8%", left: "12%", size: 3, tint: false },
    { top: "18%", left: "82%", size: 3, tint: true },
    { top: "30%", left: "25%", size: 6, tint: false },
    { top: "38%", left: "72%", size: 3, tint: true },
    { top: "50%", left: "8%", size: 3, tint: false },
    { top: "58%", left: "90%", size: 6, tint: true },
    { top: "68%", left: "30%", size: 3, tint: false },
    { top: "78%", left: "78%", size: 3, tint: true },
    { top: "88%", left: "15%", size: 6, tint: false },
    { top: "92%", left: "65%", size: 3, tint: true },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((dot, index) => (
        <span
          key={index}
          className={`absolute rounded-full ${
            dot.tint ? "bg-violet-400/70" : "bg-white/25"
          }`}
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
        />
      ))}
    </div>
  );
}

// ========================================
// SKILL PILL
// ========================================

function SkillPill({ item, dark }) {
  const Icon = item.icon;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300 ${
        dark
          ? "border-white/10 bg-white/[0.02] hover:border-violet-400/40 hover:bg-white/[0.05]"
          : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-md"
      }`}
    >
      {/* Icon */}
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: item.bg }}
      >
        <Icon size={18} color={item.color} />
      </span>

      {/* Name */}
      <span
        className={`text-sm font-medium ${
          dark ? "text-slate-200" : "text-slate-700"
        }`}
      >
        {item.name}
      </span>
    </motion.div>
  );
}

// ========================================
// CATEGORY CARD
// ========================================

function CategoryCard({ category, dark, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className={`group relative overflow-hidden rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
        dark
          ? "border-white/10 bg-white/[0.015] hover:border-violet-400/20 hover:bg-white/[0.025]"
          : "border-slate-200 bg-slate-50 hover:border-violet-200 hover:shadow-lg"
      }`}
    >
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-600/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

      {/* Category Title */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />

        <h3
          className={`text-2xl font-bold ${
            dark ? "text-slate-200" : "text-slate-800"
          }`}
        >
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
        {category.items.map((item) => (
          <SkillPill
            key={`${category.title}-${item.name}`}
            item={item}
            dark={dark}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ========================================
// MAIN SKILLS COMPONENT
// ========================================

function Skills() {
  const { dark } = useTheme();

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-24 transition-colors duration-300 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Dark Background */}
      {dark && <ScatterDots />}

      {/* Purple Glow */}
      {dark && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full bg-violet-700/10 blur-[130px]" />
        </div>
      )}

      {/* Main Content */}
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
            My Expertise
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mx-auto mt-4 max-w-2xl leading-relaxed ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A collection of technologies, tools, and core concepts I use
            to build modern, scalable, and user-focused applications.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              category={category}
              dark={dark}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mx-auto mt-10 max-w-3xl rounded-2xl border p-5 text-center ${
            dark
              ? "border-white/10 bg-white/[0.02]"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <p
            className={`text-sm ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Always learning • Always building • Always improving
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
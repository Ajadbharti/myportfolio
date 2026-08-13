import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaDumbbell,
  FaLeaf,
  FaCalculator,
} from "react-icons/fa";

import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
} from "react-icons/si";

// ========================================
// PROJECT DATA
// ========================================

const projects = [
  {
    id: 1,
    title: "FitForge",
    subtitle: "Gym & Fitness Website",
    description:
      "A modern and responsive fitness website designed to provide users with an engaging platform for workouts, fitness information, and a better gym experience.",
    icon: FaDumbbell,
    iconColor: "#f97316",
    category: "Web Development",

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
    ],

    github: "#",
    live: "#",

    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },

  {
    id: 2,
    title: "EcoCalendar",
    subtitle: "Environment Calendar",
    description:
      "An interactive environment-focused calendar that highlights important environmental days and helps users stay aware of sustainability and environmental activities.",
    icon: FaLeaf,
    iconColor: "#22c55e",
    category: "Environmental Technology",

    technologies: [
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E44D26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],

    github: "#",
    live: "#",

    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
  },

  {
    id: 3,
    title: "MultiSimulator",
    subtitle: "Multi-Purpose Simulator",
    description:
      "A collection of useful simulation and calculation tools built into a single platform with a clean interface and easy-to-use experience.",
    icon: FaCalculator,
    iconColor: "#a855f7",
    category: "Utility Application",

    technologies: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
      },
    ],

    github: "#",
    live: "#",

    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
];

// ========================================
// PROJECT CARD
// ========================================

function ProjectCard({ project, index, dark }) {
  const Icon = project.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
        dark
          ? "border-white/10 bg-white/[0.025] hover:border-violet-400/30 hover:bg-white/[0.04]"
          : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-2xl"
      }`}
    >
      {/* Project Preview */}
      <div
        className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {/* Background Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125"
          style={{
            backgroundColor: `${project.iconColor}20`,
          }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        {/* Project Icon */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 3 }}
          transition={{ duration: 0.3 }}
          className={`absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border backdrop-blur-xl ${
            dark
              ? "border-white/10 bg-black/30"
              : "border-white/60 bg-white/70"
          }`}
        >
          <Icon
            size={42}
            style={{
              color: project.iconColor,
            }}
          />
        </motion.div>

        {/* Category */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Number */}
        <div className="absolute right-5 top-5">
          <span className="text-sm font-bold text-white/40">
            0{project.id}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 sm:p-7">
        {/* Title */}
        <div className="mb-4">
          <h3
            className={`text-2xl font-bold tracking-tight ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            {project.title}
          </h3>

          <p
            className={`mt-1 text-sm font-medium ${
              dark ? "text-violet-400" : "text-violet-600"
            }`}
          >
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          className={`mb-6 text-sm leading-7 ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const TechIcon = tech.icon;

            return (
              <span
                key={tech.name}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium ${
                  dark
                    ? "border-white/10 bg-white/[0.03] text-slate-300"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                <TechIcon size={14} color={tech.color} />
                {tech.name}
              </span>
            );
          })}
        </div>

        {/* Divider */}
        <div
          className={`mb-5 h-px ${
            dark ? "bg-white/10" : "bg-slate-200"
          }`}
        />

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
              dark
                ? "border-white/10 bg-white/[0.03] text-slate-200 hover:border-violet-400/30 hover:bg-violet-500/10"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-violet-300 hover:bg-violet-50"
            }`}
          >
            <FaGithub
              size={17}
              className="transition-transform duration-300 group-hover/btn:scale-110"
            />
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-600/30"
          >
            Live Demo
            <FaExternalLinkAlt
              size={13}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-violet-600/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

// ========================================
// MAIN PROJECTS COMPONENT
// ========================================

function Projects() {
  const { dark } = useTheme();

  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 transition-colors duration-300 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Background Effects */}
      {dark && (
        <>
          <div className="pointer-events-none absolute left-1/4 top-20 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />

          <div className="pointer-events-none absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />

          <div className="pointer-events-none absolute left-[8%] top-[20%] h-1.5 w-1.5 rounded-full bg-violet-400/60" />

          <div className="pointer-events-none absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-violet-400/50" />

          <div className="pointer-events-none absolute bottom-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-blue-400/50" />
        </>
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center gap-2"
          >
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
              Projects
            </span>

            <span className="h-px w-8 bg-violet-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Work
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A selection of projects where I turn ideas into
            functional, responsive, and user-focused digital
            experiences.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              dark={dark}
            />
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p
            className={`text-sm ${
              dark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
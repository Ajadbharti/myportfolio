import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Lovely Professional University",
    duration: "2024 - 2028",
    status: "current",
    link: null,
    description:
      "Currently pursuing an undergraduate program in Computer Science & Engineering with a focus on software development, modern web technologies, and system design.",
  },
  {
    degree: "Higher Secondary Education, Science (PCM)",
    college: "J.S College",
    duration: "May 2021 - Jun 2023",
    status: null,
    link: "https://jansahkaricollege.com/",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary Education",
    college: "MDJ Public School",
    duration: "March 2020 - April 2021",
    status: null,
    link: null,
    description:
      "Completed secondary education with involvement in academic and extracurricular activities.",
  },
];

function Education() {
  const { dark } = useTheme();

  return (
    <section
      id="education"
      className={`relative overflow-hidden py-28 transition-colors duration-300 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Violet Glow */}
        <div
          className={`absolute -left-48 top-20 h-[420px] w-[420px] rounded-full blur-[150px] ${
            dark
              ? "bg-violet-700/[0.06]"
              : "bg-violet-500/[0.035]"
          }`}
        />

        {/* Indigo Glow */}
        <div
          className={`absolute -right-48 bottom-10 h-[420px] w-[420px] rounded-full blur-[150px] ${
            dark
              ? "bg-indigo-600/[0.05]"
              : "bg-indigo-500/[0.025]"
          }`}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Small Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-500">
              Education
            </span>

            <span className="h-px w-8 bg-violet-500" />
          </div>

          {/* Heading */}

          <h2
            className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            Academic{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p
            className={`mx-auto mt-5 max-w-xl text-base leading-7 ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            A timeline of my academic background, learning,
            and continuous growth in technology.
          </p>
        </motion.div>

        {/* ===================================================
            EDUCATION TIMELINE
        =================================================== */}

        <div className="relative">

          {/* Timeline Line */}

          <div
            className={`absolute bottom-8 left-[27px] top-8 w-px ${
              dark
                ? "bg-gradient-to-b from-violet-500/60 via-white/10 to-transparent"
                : "bg-gradient-to-b from-violet-500/50 via-slate-200 to-transparent"
            }`}
          />

          <div className="space-y-7">

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="relative pl-[68px]"
              >
                {/* =================================================
                    TIMELINE DOT
                ================================================= */}

                <div
                  className={`absolute left-0 top-8 flex h-[55px] w-[55px] items-center justify-center rounded-2xl border ${
                    dark
                      ? "border-violet-400/20 bg-[#0b0c12] shadow-[0_0_30px_rgba(139,92,246,0.10)]"
                      : "border-violet-200 bg-white shadow-sm"
                  }`}
                >
                  <FaGraduationCap
                    className={`text-xl ${
                      dark
                        ? "text-violet-400"
                        : "text-violet-600"
                    }`}
                  />
                </div>

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className={`group relative overflow-hidden rounded-[1.5rem] border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    dark
                      ? "border-white/[0.08] bg-white/[0.025] hover:border-violet-400/25 hover:bg-white/[0.04]"
                      : "border-slate-200 bg-slate-50/70 hover:border-violet-300 hover:bg-white hover:shadow-lg"
                  }`}
                >
                  {/* Top Accent */}

                  <div
                    className={`absolute left-0 top-0 h-full w-[2px] ${
                      item.status === "current"
                        ? "bg-gradient-to-b from-emerald-400 via-violet-500 to-transparent"
                        : "bg-gradient-to-b from-violet-500/70 to-transparent"
                    }`}
                  />

                  {/* Top Row */}

                  <div className="flex flex-wrap items-start justify-between gap-4">

                    <div className="min-w-0 flex-1">

                      {/* Degree */}

                      <div className="flex flex-wrap items-center gap-3">
                        <h3
                          className={`text-xl font-bold tracking-tight sm:text-2xl ${
                            dark
                              ? "text-white"
                              : "text-slate-900"
                          }`}
                        >
                          {item.degree}
                        </h3>

                        {/* Current Badge */}

                        {item.status === "current" && (
                          <span
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                              dark
                                ? "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-400"
                                : "border-emerald-200 bg-emerald-50 text-emerald-600"
                            }`}
                          >
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                            Currently Studying
                          </span>
                        )}
                      </div>

                      {/* College */}

                      <div className="mt-3 flex flex-wrap items-center gap-3">

                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                              dark
                                ? "text-violet-400 hover:text-violet-300"
                                : "text-violet-600 hover:text-violet-700"
                            }`}
                          >
                            {item.college}

                            <FaArrowUpRightFromSquare
                              size={10}
                              className="opacity-60"
                            />
                          </a>
                        ) : (
                          <span
                            className={`text-sm font-semibold ${
                              dark
                                ? "text-violet-400"
                                : "text-violet-600"
                            }`}
                          >
                            {item.college}
                          </span>
                        )}

                        <span
                          className={`hidden h-1 w-1 rounded-full sm:block ${
                            dark
                              ? "bg-slate-600"
                              : "bg-slate-300"
                          }`}
                        />

                        <span
                          className={`text-xs font-medium ${
                            dark
                              ? "text-slate-500"
                              : "text-slate-500"
                          }`}
                        >
                          {item.duration}
                        </span>
                      </div>
                    </div>

                    {/* Number */}

                    <span
                      className={`hidden text-4xl font-black sm:block ${
                        dark
                          ? "text-white/[0.04]"
                          : "text-slate-900/[0.04]"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Divider */}

                  <div
                    className={`my-5 h-px ${
                      dark
                        ? "bg-white/[0.06]"
                        : "bg-slate-200"
                    }`}
                  />

                  {/* Description */}

                  <p
                    className={`max-w-4xl text-sm leading-7 ${
                      dark
                        ? "text-slate-400"
                        : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Bottom Accent */}

                  <div
                    className={`mt-5 h-px w-0 transition-all duration-500 group-hover:w-20 ${
                      dark
                        ? "bg-violet-500"
                        : "bg-violet-500"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================================================
            BOTTOM NOTE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mx-auto mt-14 max-w-2xl text-center text-xs leading-6 ${
            dark ? "text-slate-600" : "text-slate-400"
          }`}
        >
          Learning never stops — every stage of the journey
          is another step toward becoming a better developer.
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
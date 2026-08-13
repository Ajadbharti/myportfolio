import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaMapMarkerAlt,
  FaArrowRight,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function About() {
  const { dark } = useTheme();

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-24 transition-colors duration-300 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* ========================================
          BACKGROUND EFFECTS
      ======================================== */}

      {dark && (
        <>
          {/* Purple Glow */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-700/10 blur-[130px]" />

          {/* Blue Glow */}
          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

          {/* Small Dots */}
          <div className="pointer-events-none absolute left-[10%] top-[20%] h-1.5 w-1.5 rounded-full bg-violet-400/70" />

          <div className="pointer-events-none absolute right-[15%] top-[35%] h-2 w-2 rounded-full bg-cyan-400/60" />

          <div className="pointer-events-none absolute bottom-[20%] left-[20%] h-1.5 w-1.5 rounded-full bg-fuchsia-400/60" />
        </>
      )}

      {/* ========================================
          MAIN CONTAINER
      ======================================== */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* ========================================
              LEFT SIDE - PROFILE CARD
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Outer Glow */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-violet-600/20 via-cyan-500/20 to-fuchsia-500/20 blur-3xl" />

              {/* Profile Card */}
              <div
                className={`relative w-[320px] rounded-[2rem] border p-2 shadow-2xl sm:w-[370px] ${
                  dark
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Inner Card */}
                <div
                  className={`relative overflow-hidden rounded-[1.6rem] ${
                    dark
                      ? "bg-[#0b0c12]"
                      : "bg-slate-50"
                  }`}
                >

                  {/* Top Gradient */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-violet-600/20 via-cyan-500/10 to-fuchsia-500/20 blur-2xl" />

                  {/* Developer Badge */}
                  <div className="absolute left-5 top-5 z-10">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-md ${
                        dark
                          ? "border-white/10 bg-black/30 text-slate-200"
                          : "border-slate-200 bg-white/80 text-slate-700"
                      }`}
                    >
                      <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                      Available for Opportunities
                    </span>
                  </div>

                  {/* Profile Visual */}
                  <div className="flex h-[350px] items-center justify-center pt-8">

                    {/* Gradient Circle */}
                    <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-cyan-400 to-fuchsia-500 p-[2px] shadow-2xl shadow-violet-500/20">

                      <div
                        className={`flex h-full w-full items-center justify-center rounded-full text-8xl ${
                          dark
                            ? "bg-[#080910]"
                            : "bg-white"
                        }`}
                      >
                        👨‍💻
                      </div>

                      {/* Floating Dot */}
                      <div className="absolute -right-2 top-10 h-5 w-5 rounded-full border-4 border-[#080910] bg-cyan-400" />

                      <div className="absolute -bottom-1 left-8 h-4 w-4 rounded-full border-2 border-[#080910] bg-violet-400" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="px-6 pb-7 text-center">

                    <h3
                      className={`text-2xl font-bold ${
                        dark
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      Ajad Bharti
                    </h3>

                    <p className="mt-1 text-sm font-medium text-violet-500">
                      Full Stack MERN Developer
                    </p>

                    <div
                      className={`mx-auto mt-5 h-px w-24 ${
                        dark
                          ? "bg-white/10"
                          : "bg-slate-200"
                      }`}
                    />

                    {/* Mini Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div>
                        <p className="text-lg font-bold text-violet-500">
                          20+
                        </p>
                        <p
                          className={`text-[11px] ${
                            dark
                              ? "text-slate-500"
                              : "text-slate-500"
                          }`}
                        >
                          Projects
                        </p>
                      </div>

                      <div
                        className={`border-x ${
                          dark
                            ? "border-white/10"
                            : "border-slate-200"
                        }`}
                      >
                        <p className="text-lg font-bold text-cyan-500">
                          100%
                        </p>
                        <p
                          className={`text-[11px] ${
                            dark
                              ? "text-slate-500"
                              : "text-slate-500"
                          }`}
                        >
                          Dedication
                        </p>
                      </div>

                      <div>
                        <p className="text-lg font-bold text-fuchsia-500">
                          24/7
                        </p>
                        <p
                          className={`text-[11px] ${
                            dark
                              ? "text-slate-500"
                              : "text-slate-500"
                          }`}
                        >
                          Learning
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -bottom-5 -right-5 rounded-2xl border px-4 py-3 shadow-xl backdrop-blur-xl ${
                  dark
                    ? "border-white/10 bg-[#10111a]/90"
                    : "border-slate-200 bg-white/90"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-lg">
                    ⚡
                  </div>

                  <div>
                    <p
                      className={`text-xs ${
                        dark
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      Focus
                    </p>

                    <p className="text-sm font-bold">
                      Full Stack
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================
              RIGHT SIDE - CONTENT
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            {/* Small Heading */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-5 inline-flex items-center gap-3"
            >
              <span className="h-px w-10 bg-violet-500" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
                About Me
              </span>
            </motion.div>

            {/* Main Heading */}
            <h2
              className={`text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl ${
                dark
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Turning Ideas Into{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
                dark
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              I'm{" "}
              <span
                className={`font-semibold ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                Ajad Bharti
              </span>
              , a B.Tech Computer Science student and
              passionate Full Stack MERN Developer who
              enjoys building modern, responsive, and
              scalable web applications.
            </p>

            <p
              className={`mt-4 max-w-2xl text-base leading-8 ${
                dark
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              I love turning real-world problems into
              practical digital solutions using clean
              interfaces, reliable backend systems, and
              modern technologies. I'm constantly learning,
              experimenting, and improving my development
              skills.
            </p>

            {/* ========================================
                INFO CARDS
            ======================================== */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              {/* Education */}
              <div
                className={`group rounded-2xl border p-4 transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.02] hover:border-violet-400/30 hover:bg-white/[0.04]"
                    : "border-slate-200 bg-slate-50 hover:border-violet-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <FaGraduationCap className="mb-3 text-xl text-violet-500 transition-transform duration-300 group-hover:scale-110" />

                <p
                  className={`text-xs ${
                    dark
                      ? "text-slate-500"
                      : "text-slate-500"
                  }`}
                >
                  Education
                </p>

                <p className="mt-1 text-sm font-semibold">
                  B.Tech CSE
                </p>
              </div>

              {/* Development */}
              <div
                className={`group rounded-2xl border p-4 transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-white/[0.04]"
                    : "border-slate-200 bg-slate-50 hover:border-cyan-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <FaCode className="mb-3 text-xl text-cyan-500 transition-transform duration-300 group-hover:scale-110" />

                <p
                  className={`text-xs ${
                    dark
                      ? "text-slate-500"
                      : "text-slate-500"
                  }`}
                >
                  Specialization
                </p>

                <p className="mt-1 text-sm font-semibold">
                  MERN Stack
                </p>
              </div>

              {/* Location */}
              <div
                className={`group rounded-2xl border p-4 transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.02] hover:border-fuchsia-400/30 hover:bg-white/[0.04]"
                    : "border-slate-200 bg-slate-50 hover:border-fuchsia-300 hover:bg-white hover:shadow-md"
                }`}
              >
                <FaMapMarkerAlt className="mb-3 text-xl text-fuchsia-500 transition-transform duration-300 group-hover:scale-110" />

                <p
                  className={`text-xs ${
                    dark
                      ? "text-slate-500"
                      : "text-slate-500"
                  }`}
                >
                  Location
                </p>

                <p className="mt-1 text-sm font-semibold">
                  India
                </p>
              </div>

            </div>

            {/* ========================================
                HIGHLIGHTS
            ======================================== */}

            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-emerald-500" />

                <span
                  className={`text-sm ${
                    dark
                      ? "text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  Building responsive and user-focused
                  applications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-emerald-500" />

                <span
                  className={`text-sm ${
                    dark
                      ? "text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  Exploring modern web technologies
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="shrink-0 text-emerald-500" />

                <span
                  className={`text-sm ${
                    dark
                      ? "text-slate-300"
                      : "text-slate-700"
                  }`}
                >
                  Focused on continuous learning and growth
                </span>
              </div>

            </div>

            {/* ========================================
                BUTTONS
            ======================================== */}

            <div className="mt-9 flex flex-wrap gap-4">

              {/* Resume */}
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-600/30"
              >
                <FaDownload
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />

                Download Resume
              </a>

              {/* Explore Projects */}
              <a
                href="#projects"
                className={`group inline-flex items-center gap-3 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] text-slate-200 hover:border-violet-400/30 hover:bg-white/[0.05]"
                    : "border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:shadow-md"
                }`}
              >
                Explore Projects

                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
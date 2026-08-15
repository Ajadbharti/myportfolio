import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaArrowRight,
  FaRocket,
  FaCode,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function Experience() {
  const { dark } = useTheme();

  return (
    <section
      id="experience"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Violet Glow */}
        <div
          className={`absolute -left-40 top-20 h-96 w-96 rounded-full blur-[140px] ${
            dark
              ? "bg-violet-700/10"
              : "bg-violet-500/[0.06]"
          }`}
        />

        {/* Cyan Glow */}
        <div
          className={`absolute -right-40 bottom-10 h-96 w-96 rounded-full blur-[140px] ${
            dark
              ? "bg-cyan-500/10"
              : "bg-cyan-500/[0.05]"
          }`}
        />

        {/* Small Dots */}
        <div
          className={`absolute left-[12%] top-[30%] h-1.5 w-1.5 rounded-full ${
            dark ? "bg-violet-400/50" : "bg-violet-500/30"
          }`}
        />

        <div
          className={`absolute right-[18%] top-[22%] h-2 w-2 rounded-full ${
            dark ? "bg-cyan-400/50" : "bg-cyan-500/30"
          }`}
        />

        <div
          className={`absolute bottom-[20%] left-[25%] h-1.5 w-1.5 rounded-full ${
            dark ? "bg-fuchsia-400/50" : "bg-fuchsia-500/30"
          }`}
        />
      </div>

      {/* ========================================
          MAIN CONTAINER
      ======================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* ========================================
            HEADING
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          {/* Small Label */}
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-500" />

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-violet-500">
              Experience
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-violet-500" />
          </div>

          {/* Heading */}
          <h2
            className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            My Professional{" "}
            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
              dark
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Every journey starts somewhere. I'm currently
            building my skills, projects, and experience for
            what's next.
          </p>
        </motion.div>

        {/* ========================================
            COMING SOON CARD
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl"
        >
          <div
            className={`group relative overflow-hidden rounded-[2rem] border p-[1px] ${
              dark
                ? "border-white/10 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20"
                : "border-slate-200 bg-gradient-to-br from-violet-500/10 via-white to-cyan-500/10"
            }`}
          >
            {/* Inner Card */}
            <div
              className={`relative overflow-hidden rounded-[2rem] px-7 py-12 sm:px-12 ${
                dark
                  ? "bg-[#090b14]"
                  : "bg-slate-50/90"
              }`}
            >

              {/* ========================================
                  DECORATIVE ORBS
              ======================================== */}

              <motion.div
                animate={{
                  x: [0, 25, 0],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-violet-600/10
                  blur-[80px]
                "
              />

              <motion.div
                animate={{
                  x: [0, -20, 0],
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-cyan-500/10
                  blur-[80px]
                "
              />

              {/* ========================================
                  TOP STATUS
              ======================================== */}

              <div className="relative z-10 flex justify-center">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-xl ${
                    dark
                      ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-300"
                      : "border-emerald-500/20 bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  OPEN TO OPPORTUNITIES
                </div>
              </div>

              {/* ========================================
                  ICON
              ======================================== */}

              <div className="relative z-10 mt-8 flex justify-center">
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    from-violet-600
                    via-indigo-600
                    to-cyan-500
                    shadow-2xl
                    shadow-violet-600/20
                  "
                >
                  <FaBriefcase
                    className="text-white"
                    size={30}
                  />

                  {/* Small Rocket */}
                  <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#101522] shadow-xl">
                    <FaRocket
                      size={12}
                      className="text-cyan-400"
                    />
                  </div>
                </motion.div>
              </div>

              {/* ========================================
                  MAIN MESSAGE
              ======================================== */}

              <div className="relative z-10 mx-auto mt-8 max-w-2xl text-center">

                <h3
                  className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
                    dark
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  Professional Experience{" "}
                  <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                    Coming Soon
                  </span>
                </h3>

                <p
                  className={`mx-auto mt-5 max-w-xl text-base leading-8 sm:text-lg ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  I'm currently focused on learning, building
                  real-world projects, and growing as a
                  Full Stack Developer. My professional
                  experience section will grow with the
                  opportunities ahead.
                </p>
              </div>

              {/* ========================================
                  JOURNEY INDICATOR
              ======================================== */}

              <div className="relative z-10 mx-auto mt-10 max-w-xl">

                <div className="flex items-center gap-4">

                  {/* Start */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg">
                      <FaCode size={15} />
                    </div>

                    <span
                      className={`mt-2 text-[10px] font-semibold uppercase tracking-wider ${
                        dark
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      Learning
                    </span>
                  </div>

                  {/* Line */}
                  <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-slate-700/20">
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        inset-y-0
                        left-0
                        w-1/2
                        rounded-full
                        bg-gradient-to-r
                        from-transparent
                        via-violet-500
                        to-cyan-400
                      "
                    />
                  </div>

                  {/* Future */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.08, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-dashed
                        border-violet-400/50
                        bg-violet-500/10
                      "
                    >
                      <FaRocket
                        size={15}
                        className="text-violet-400"
                      />
                    </motion.div>

                    <span
                      className={`mt-2 text-[10px] font-semibold uppercase tracking-wider ${
                        dark
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      What's Next
                    </span>
                  </div>
                </div>
              </div>

              {/* ========================================
                  BOTTOM MESSAGE
              ======================================== */}

              <div className="relative z-10 mt-10 flex justify-center">
                <div
                  className={`rounded-xl border px-5 py-3 text-sm ${
                    dark
                      ? "border-white/10 bg-white/[0.025] text-slate-400"
                      : "border-slate-200 bg-white text-slate-600"
                  }`}
                >
                  <span className="font-semibold text-violet-500">
                    Currently building.
                  </span>{" "}
                  The next chapter is loading...
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Experience;
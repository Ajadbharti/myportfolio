import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";

// ⚠️ Agar tumhari photo ka filename different hai,
// sirf is line mein filename change karna.
import profileImage from "../../assets/images/profile.png";

function Hero() {
  const { dark } = useTheme();

  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mailto:azadbharati802223@gmail.com",
      label: "Email",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Ajadbharti",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/ajad62bharti/",
      label: "LinkedIn",
    },
    {
      icon: SiX,
      href: "#",
      label: "X",
    },
    {
      icon: FaFileAlt,
      href: "#",
      label: "Resume",
    },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        dark
          ? "bg-[#03060b] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Cyan glow */}
        <div className="absolute left-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Violet glow */}
        <div className="absolute right-[-150px] top-[20%] h-[550px] w-[550px] rounded-full bg-violet-600/10 blur-[150px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

        {/* Small dots */}
        <div className="absolute left-[8%] top-[35%] h-1 w-1 rounded-full bg-white/50" />
        <div className="absolute left-[28%] top-[20%] h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute left-[45%] top-[70%] h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute right-[20%] top-[30%] h-1 w-1 rounded-full bg-white/40" />
        <div className="absolute right-[8%] top-[65%] h-1 w-1 rounded-full bg-white/30" />
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

          {/* =====================================
              LEFT SIDE
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Name */}
            <h1 className="text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Ajad
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Bharti
              </span>
            </h1>

            {/* Role */}
            <p
              className={`mt-8 text-sm font-semibold tracking-[0.32em] ${
                dark
                  ? "text-slate-500"
                  : "text-slate-500"
              }`}
            >
              FULL-STACK&nbsp;&nbsp;·&nbsp;&nbsp;MERN&nbsp;&nbsp;·&nbsp;&nbsp;DEVELOPER
            </p>

            {/* Description */}
            <p
              className={`mt-8 max-w-2xl text-lg leading-9 sm:text-xl ${
                dark
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Building{" "}
              <span
                className={`font-bold ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                scalable web systems
              </span>{" "}
              at the intersection of full-stack engineering
              and modern development — from responsive
              interfaces to robust backend APIs.
            </p>

            {/* Builder */}
            <div className="mt-12">
              <span className="bg-gradient-to-r from-yellow-400 via-lime-400 to-emerald-400 bg-clip-text text-6xl font-extrabold text-transparent sm:text-7xl">
                BUILDER
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                      dark
                        ? "border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
                        : "border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-500"
                    }`}
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* =====================================
              RIGHT SIDE - PROFILE
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            {/* =================================
                HOVER WRAPPER
            ================================= */}

            <div className="group relative">

              {/* Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[380px]
                  w-[380px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-500/10
                  blur-[100px]
                  transition-all
                  duration-700
                  ease-out
                  group-hover:scale-125
                  group-hover:bg-cyan-500/20
                "
              />

              {/* =================================
                  PHOTO FRAME
              ================================= */}

              <div
                className={`
                  relative
                  flex
                  h-[520px]
                  w-[420px]
                  items-end
                  justify-center
                  overflow-visible
                  rounded-[2.5rem]
                  border
                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:-translate-y-2
                  ${
                    dark
                      ? "border-white/10 bg-white/[0.015]"
                      : "border-slate-200 bg-slate-50"
                  }
                `}
              >

                {/* Inner Frame */}
                <div
                  className={`
                    absolute
                    inset-4
                    overflow-hidden
                    rounded-[2rem]
                    ${
                      dark
                        ? "bg-[#071014]"
                        : "bg-slate-200"
                    }
                  `}
                >

                  {/* =================================
                      PHOTO

                      NORMAL = SMALL
                      HOVER = BIG
                  ================================= */}

                  <img
                    src={profileImage}
                    alt="Ajad Bharti"
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      z-10

                      /* NORMAL SIZE */
                      h-[350px]
                      w-auto
                      max-w-[90%]

                      -translate-x-1/2
                      object-contain

                      /* SMOOTH HOVER */
                      transition-transform
                      duration-700
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      /* HOVER = BIG */
                      group-hover:scale-[1.18]
                    "
                  />

                  {/* Image bottom gradient */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      z-20
                      bg-gradient-to-t
                      from-black/30
                      via-transparent
                      to-transparent
                    "
                  />
                </div>

                {/* =================================
                    FLOATING LABELS

                    HIDDEN → HOVER
                ================================= */}

                {/* React Node */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-[-16px]
                    z-30

                    translate-y-3
                    opacity-0

                    rounded-full
                    border
                    border-cyan-400/30
                    bg-[#071014]/90
                    px-4
                    py-2

                    text-xs
                    font-bold
                    tracking-wide
                    text-cyan-400

                    shadow-xl
                    backdrop-blur-xl

                    transition-all
                    duration-500
                    ease-out

                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  REACT · NODE.JS
                </div>

                {/* Builder */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-18px]
                    top-10
                    z-30

                    translate-x-5
                    opacity-0

                    rounded-full
                    bg-emerald-500
                    px-4
                    py-2

                    text-xs
                    font-bold
                    text-slate-950

                    shadow-xl

                    transition-all
                    duration-500
                    ease-out

                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  0 → 1 BUILDER
                </div>

                {/* Full Stack */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-18px]
                    left-1/2
                    z-30

                    -translate-x-1/2
                    translate-y-5
                    opacity-0

                    whitespace-nowrap
                    rounded-full
                    border
                    border-violet-400/30
                    bg-[#11152a]/95
                    px-6
                    py-3

                    text-sm
                    font-bold
                    text-white

                    shadow-2xl
                    backdrop-blur-xl

                    transition-all
                    duration-500
                    ease-out

                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  🚀 Full Stack Developer
                </div>

                {/* Express */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-[-14px]
                    right-3
                    z-30

                    translate-x-5
                    opacity-0

                    text-xs
                    font-bold
                    text-violet-400

                    transition-all
                    delay-100
                    duration-500
                    ease-out

                    group-hover:translate-x-0
                    group-hover:opacity-100
                  "
                >
                  EXPRESS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
import { motion } from "framer-motion";
import { useState } from "react";

/* =====================================================
   GREETING
===================================================== */

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Good morning'
  if (hour >= 12 && hour < 17) return 'Good afternoon'
  if (hour >= 17 && hour < 21) return 'Good evening'
  return 'Good night'
}

/* =====================================================
   INTERACTIVE NAME
===================================================== */

function InteractiveName({ text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="relative inline-block cursor-default select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* OUTLINE */}
      <span
        className="
          block
          whitespace-nowrap
          text-[4.2rem]
          font-semibold
          leading-[0.95]
          tracking-[-0.055em]
          text-transparent
          [-webkit-text-stroke:2px_rgba(255,255,255,0.85)]
          sm:text-[5.5rem]
          md:text-[6.5rem]
          lg:text-[7rem]
          xl:text-[7.5rem]
        "
      >
        {text}
      </span>

      {/* SLOW "BUS START" FILL ON HOVER */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          whitespace-nowrap
          bg-white
          bg-clip-text
          text-[4.2rem]
          font-semibold
          leading-[0.95]
          tracking-[-0.055em]
          text-transparent
          drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]
          sm:text-[5.5rem]
          md:text-[6.5rem]
          lg:text-[7rem]
          xl:text-[7.5rem]
        "
        style={{
          clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          WebkitClipPath: isHovered
            ? "inset(0 0% 0 0)"
            : "inset(0 100% 0 0)",
          transition: isHovered
            ? "clip-path 2.2s cubic-bezier(0.16, 0.4, 0.2, 1)"
            : "clip-path 0.5s ease-out",
          WebkitTransition: isHovered
            ? "-webkit-clip-path 2.2s cubic-bezier(0.16, 0.4, 0.2, 1)"
            : "-webkit-clip-path 0.5s ease-out",
        }}
      >
        {text}
      </span>
    </span>
  );
}

/* =====================================================
   SOCIAL ICONS
===================================================== */

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="currentColor"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="currentColor"
  >
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[19px] w-[19px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M12 3v11" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4 20h16" />
  </svg>
);

/* =====================================================
   SOCIAL BUTTON
===================================================== */

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="
        group
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        text-white/45
        transition-all
        duration-300
        hover:bg-white/[0.06]
        hover:text-cyan-400
      "
    >
      {children}

      {/* Tooltip */}
      <span
        className="
          pointer-events-none
          absolute
          -top-9
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          rounded-md
          border
          border-white/10
          bg-[#111]
          px-2
          py-1
          text-[10px]
          text-white
          opacity-0
          transition-all
          duration-200
          group-hover:-translate-y-1
          group-hover:opacity-100
        "
      >
        {label}
      </span>
    </a>
  );
}

/* =====================================================
   HERO
===================================================== */

function Hero() {
  const [greeting] = useState(getGreeting());

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.20]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Left Cyan Glow */}
        <div
          className="
            absolute
            -left-48
            top-[35%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/[0.025]
            blur-[150px]
          "
        />

        {/* Right Cyan Glow */}
        <div
          className="
            absolute
            -right-48
            top-[15%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-cyan-400/[0.02]
            blur-[160px]
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            bottom-[-300px]
            left-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.02]
            blur-[160px]
          "
        />

        {/* Ambient Dots */}
        <span
          className="
            absolute
            left-[7%]
            top-[64%]
            h-2
            w-2
            rounded-full
            bg-white/80
            shadow-[0_0_20px_rgba(255,255,255,0.35)]
          "
        />

        <span
          className="
            absolute
            right-[20%]
            top-[30%]
            h-1.5
            w-1.5
            rounded-full
            bg-cyan-400/50
          "
        />

        <span
          className="
            absolute
            left-[35%]
            top-[18%]
            h-1
            w-1
            rounded-full
            bg-white/30
          "
        />

        <span
          className="
            absolute
            right-[8%]
            bottom-[18%]
            h-1
            w-1
            rounded-full
            bg-cyan-400/40
          "
        />
      </div>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-24
          lg:px-12
        "
      >
        <div
          className="
            flex
            w-full
            flex-col-reverse
            items-center
            gap-14
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-10
          "
        >

          <div className="max-w-[720px]">

            {/* =================================================
                GREETING
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <span
                className="
                  font-mono
                  text-sm
                  tracking-[0.16em]
                  text-cyan-400
                  sm:text-base
                "
              >
                {greeting} —
              </span>
            </motion.div>

            {/* =================================================
                NAME
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="mt-5"
            >
              <InteractiveName text="Ajad Bharti" />
            </motion.div>

            {/* =================================================
                ROLE
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-7
                text-xl
                font-bold
                tracking-[-0.02em]
                text-white
                sm:text-2xl
              "
            >
              Full-Stack Developer
            </motion.p>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              className="
                mt-6
                max-w-[850px]
                text-base
                leading-8
                tracking-[-0.01em]
                text-white/55
                sm:text-lg
                sm:leading-9
              "
            >
              I love building things that actually work —
              clean code, functional apps, and real solutions
              to real problems. I'm not here to write code that
              just runs; I build things that reduce friction,
              cut the noise, and make life easier for the people
              using them.
            </motion.p>

            {/* =================================================
                SHORT LINE
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="
                mt-8
                text-sm
                italic
                tracking-wide
                text-white/45
                sm:text-base
              "
            >
              Clean code. Functional apps. Less pain points.
              That's the whole vibe.
            </motion.p>

            {/* =================================================
                ACTIONS
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-5
              "
            >

              {/* =================================================
                  RESUME
              ================================================= */}

              <a
                href="/cv/Ajad-Bharti-CV.pdf"
                download="Ajad-Bharti-CV.pdf"
                className="
                  group
                  inline-flex
                  h-[54px]
                  items-center
                  gap-3
                  bg-cyan-500
                  px-7
                  font-mono
                  text-sm
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-cyan-400
                  hover:shadow-[0_12px_35px_rgba(34,211,238,0.18)]
                "
              >
                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                >
                  <DownloadIcon />
                </span>

                Resume
              </a>

              {/* =================================================
                  SOCIAL PILL
              ================================================= */}

              <div
                className="
                  flex
                  h-[64px]
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-cyan-400/30
                  bg-[#090909]/80
                  px-2
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/50
                "
              >

                {/* LinkedIn */}

                <SocialButton
                  href="https://www.linkedin.com/in/ajad62bharti/"
                  label="LinkedIn"
                >
                  <LinkedinIcon />
                </SocialButton>

                {/* Email */}

                <SocialButton
                  href="mailto:azadbharati802223@gmail.com"
                  label="Email"
                >
                  <EmailIcon />
                </SocialButton>

                {/* GitHub */}

                <SocialButton
                  href="https://github.com/Ajadbharti"
                  label="GitHub"
                >
                  <GithubIcon />
                </SocialButton>

                {/* X */}

                <SocialButton href="#" label="X">
                  <span className="text-xl font-light">
                    𝕏
                  </span>
                </SocialButton>

                {/* LeetCode */}

                <SocialButton href="#" label="LeetCode">
                  <span className="text-xl">
                    ‹
                  </span>
                </SocialButton>

                {/* Discord */}

                <SocialButton href="#" label="Discord">
                  <span className="text-lg">
                    ◉
                  </span>
                </SocialButton>

              </div>
            </motion.div>

            {/* =================================================
                BOTTOM LINE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="
                mt-12
                h-px
                max-w-[760px]
                origin-left
                bg-gradient-to-r
                from-cyan-400/35
                via-white/10
                to-transparent
              "
            />

            {/* Tech Stack */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-3
                font-mono
                text-xs
                text-white/30
              "
            >
              <span>React</span>

              <span className="text-cyan-400/50">
                •
              </span>

              <span>Node.js</span>

              <span className="text-cyan-400/50">
                •
              </span>

              <span>Express</span>

              <span className="text-cyan-400/50">
                •
              </span>

              <span>MongoDB</span>

              <span className="text-cyan-400/50">
                •
              </span>

              <span>JavaScript</span>
            </div>

          </div>

          {/* =================================================
              PHOTO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="
              relative
              shrink-0
            "
          >
            <div
              className="
                relative
                h-[260px]
                w-[260px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                sm:h-[320px]
                sm:w-[320px]
                lg:h-[380px]
                lg:w-[380px]
              "
            >
              <img
  src="/images/profile.png"
  alt="Ajad Bharti"
  className="h-full w-full object-cover"
/>
            </div>

            {/* Glow behind photo */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                -z-10
                rounded-3xl
                bg-cyan-400/10
                blur-3xl
              "
            />
          </motion.div>

        </div>
      </div>

      {/* =================================================
          SCROLL INDICATOR
      ================================================= */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <div
          className="
            flex
            h-9
            w-5
            items-start
            justify-center
            rounded-full
            border
            border-white/15
            p-1
          "
        >
          <motion.span
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
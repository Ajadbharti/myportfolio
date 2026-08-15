import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../../context/ThemeContext";
import BookMeetingModal from "../common/BookMeetingModal";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);

  const { dark, setDark } = useTheme();

  // ========================================
  // SCROLL DETECTION
  // ========================================

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 35);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ========================================
  // SMOOTH NAVIGATION
  // ========================================

  const handleNavigation = (e, href) => {
    e.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    const offset = 90;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <header
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          transition-all
          duration-300
          ease-out
          ${
            scrolled
              ? "px-4 pt-3"
              : "px-0 pt-0"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            items-center
            justify-between
            border
            transition-all
            duration-300
            ease-out
            ${
              scrolled
                ? `
                  max-w-6xl
                  rounded-full
                  px-5
                  py-3
                  lg:px-8
                `
                : `
                  w-full
                  rounded-none
                  px-6
                  py-5
                  lg:px-10
                `
            }
            ${
              dark
                ? `
                  border-white/10
                  bg-[#0B1224]/95
                  text-white
                  ${
                    scrolled
                      ? "shadow-[0_12px_40px_rgba(0,0,0,0.30)]"
                      : ""
                  }
                `
                : `
                  border-slate-200
                  bg-[#F7F8FC]/95
                  text-slate-900
                  ${
                    scrolled
                      ? "shadow-[0_12px_40px_rgba(15,23,42,0.12)]"
                      : ""
                  }
                `
            }
          `}
        >
          {/* =====================================
              LOGO
          ===================================== */}

          <a
            href="#home"
            onClick={(e) =>
              handleNavigation(e, "#home")
            }
            className="
              shrink-0
              text-3xl
              font-extrabold
              tracking-tight
            "
          >
            <span className="text-blue-500">
              A
            </span>
            jad
            <span className="text-cyan-400">
              .
            </span>
          </a>

          {/* =====================================
              DESKTOP MENU
          ===================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) =>
                  handleNavigation(
                    e,
                    link.href
                  )
                }
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  ${
                    dark
                      ? "text-slate-300 hover:bg-indigo-500/15 hover:text-indigo-300"
                      : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* =====================================
              RIGHT SIDE
          ===================================== */}

          <div className="flex shrink-0 items-center gap-3">

            {/* Dark Mode */}

            <div
              className={`
                flex
                items-center
                justify-center
                rounded-full
                p-2
                ${
                  dark
                    ? "border border-white/10 bg-white/[0.05]"
                    : "border border-slate-200 bg-white"
                }
              `}
            >
              <DarkModeSwitch
                checked={dark}
                onChange={setDark}
                size={20}
              />
            </div>

            {/* Book Meeting */}

            <button
              type="button"
              onClick={() =>
                setMeetingOpen(true)
              }
              className="
                hidden
                md:inline-flex
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-600
                via-indigo-500
                to-violet-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_10px_30px_rgba(79,70,229,0.30)]
                active:translate-y-0
              "
            >
              Book a Meeting
            </button>

            {/* Mobile Menu */}

            <button
              type="button"
              onClick={() =>
                setOpen((prev) => !prev)
              }
              aria-label="Toggle menu"
              className={`
                rounded-full
                p-2
                lg:hidden
                ${
                  dark
                    ? "bg-white/[0.06] text-white"
                    : "bg-slate-100 text-slate-900"
                }
              `}
            >
              {open ? (
                <HiX size={27} />
              ) : (
                <HiMenuAlt3 size={27} />
              )}
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                mx-4
                mt-3
                overflow-hidden
                rounded-3xl
                border
                lg:hidden
                ${
                  dark
                    ? "border-white/10 bg-[#0B1224] shadow-2xl"
                    : "border-slate-200 bg-[#F7F8FC] shadow-xl"
                }
              `}
            >
              <nav className="flex flex-col p-4">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        link.href
                      )
                    }
                    className={`
                      rounded-xl
                      px-5
                      py-3
                      text-center
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        dark
                          ? "text-slate-300 hover:bg-indigo-500/15 hover:text-indigo-300"
                          : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    setMeetingOpen(true);
                  }}
                  className="
                    mt-4
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-500
                    to-violet-600
                    py-3
                    font-semibold
                    text-white
                    transition-transform
                    duration-200
                    hover:scale-[1.02]
                  "
                >
                  📅 Schedule a Meeting
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================
            MEETING MODAL
        ========================================= */}

        <BookMeetingModal
          isOpen={meetingOpen}
          onClose={() =>
            setMeetingOpen(false)
          }
        />
      </header>
    </>
  );
}

export default Navbar;
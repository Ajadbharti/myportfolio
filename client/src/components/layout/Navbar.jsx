import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <header className="fixed left-0 right-0 top-0 z-50">
        <motion.div
          layout
          initial={false}
          animate={{
            width: scrolled ? "calc(100% - 32px)" : "100%",
            maxWidth: scrolled ? "1152px" : "100%",
            y: scrolled ? 16 : 0,
            borderRadius: scrolled ? 999 : 0,
          }}
          transition={{
            layout: {
              type: "spring",
              stiffness: 260,
              damping: 28,
              mass: 0.7,
            },
            default: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className={`
            mx-auto flex items-center justify-between
            border
            px-6 lg:px-10
            ${
              scrolled
                ? "py-3"
                : "py-5"
            }
            ${
              dark
                ? "border-white/10 bg-[#0F172A]/85 text-white backdrop-blur-2xl"
                : "border-slate-200 bg-white/90 text-slate-900 backdrop-blur-2xl"
            }
            ${
              scrolled
                ? dark
                  ? "shadow-[0_20px_60px_rgba(37,99,235,0.18)]"
                  : "shadow-[0_15px_45px_rgba(15,23,42,0.12)]"
                : ""
            }
          `}
          style={{
            willChange: "width, max-width, transform, border-radius",
          }}
        >
          {/* =====================================
              LOGO
          ===================================== */}

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="shrink-0 text-3xl font-extrabold tracking-tight"
          >
            <span className="text-blue-600">A</span>
            jad
            <span className="text-cyan-400">.</span>
          </a>

          {/* =====================================
              DESKTOP MENU
          ===================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  rounded-full px-4 py-2
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    dark
                      ? "text-slate-300 hover:bg-blue-600 hover:text-white"
                      : "text-slate-700 hover:bg-blue-600 hover:text-white"
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
                flex items-center justify-center
                rounded-full p-2
                ${
                  dark
                    ? "border border-slate-700 bg-slate-800"
                    : "border border-slate-200 bg-slate-100"
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
              onClick={() => setMeetingOpen(true)}
              className="
                hidden md:inline-flex
                items-center justify-center
                rounded-full
                bg-gradient-to-r
                from-blue-600
                via-cyan-500
                to-blue-500
                px-6 py-3
                text-sm font-semibold text-white
                transition-transform duration-200
                hover:scale-105
                hover:shadow-[0_12px_35px_rgba(37,99,235,0.35)]
              "
            >
              Book a Meeting
            </button>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={`
                rounded-full p-2
                lg:hidden
                ${
                  dark
                    ? "bg-slate-800 text-white"
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
        </motion.div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className={`
              mx-4 mt-3 overflow-hidden
              rounded-3xl border
              backdrop-blur-2xl
              lg:hidden
              ${
                dark
                  ? "border-slate-700 bg-[#0F172A]/95 shadow-2xl"
                  : "border-slate-200 bg-white/95 shadow-xl"
              }
            `}
          >
            <nav className="flex flex-col p-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    rounded-xl px-5 py-3
                    text-center font-medium
                    transition-all duration-200
                    ${
                      dark
                        ? "text-slate-300 hover:bg-blue-600 hover:text-white"
                        : "text-slate-700 hover:bg-blue-600 hover:text-white"
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
                  mt-4 rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-blue-500
                  py-3
                  font-semibold text-white
                  transition-transform duration-200
                  hover:scale-[1.02]
                "
              >
                📅 Schedule a Meeting
              </button>
            </nav>
          </motion.div>
        )}

        {/* =========================================
            MEETING MODAL
        ========================================= */}

        <BookMeetingModal
          isOpen={meetingOpen}
          onClose={() => setMeetingOpen(false)}
        />
      </header>
    </>
  );
}

export default Navbar;
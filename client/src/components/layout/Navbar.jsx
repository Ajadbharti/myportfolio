import { useState, useEffect } from "react";
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
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 px-4">
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500
          ${
            dark
              ? "bg-[#0F172A]/75 backdrop-blur-2xl border border-slate-700 shadow-[0_20px_60px_rgba(37,99,235,.18)]"
              : "bg-white/75 backdrop-blur-2xl border border-slate-200 shadow-xl"
          }
          ${scrolled ? "py-3" : "py-4"}
          px-8 flex items-center justify-between`}
        >
          {/* Logo */}
          <a
            href="#home"
            className={`text-3xl font-extrabold tracking-tight transition ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="text-blue-600">A</span>jad
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  dark
                    ? "text-slate-300 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                    : "text-slate-700 hover:bg-blue-600 hover:text-white hover:shadow-lg"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            <div
              className={`hidden sm:flex items-center justify-center p-2 rounded-full transition
              ${
                dark
                  ? "bg-slate-800 border border-slate-700"
                  : "bg-slate-100 border border-slate-200"
              }`}
            >
              <DarkModeSwitch
                checked={dark}
                onChange={setDark}
                size={20}
              />
            </div>

            <button
              onClick={() => setMeetingOpen(true)}
              className="hidden md:inline-flex items-center justify-center
              px-6 py-3 rounded-full
              text-sm font-semibold text-white
              bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500
              hover:scale-105
              hover:shadow-[0_15px_40px_rgba(37,99,235,.4)]
              transition-all duration-300"
            >
              Book a Meeting
            </button>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-full transition
              ${
                dark
                  ? "bg-slate-800 text-white"
                  : "bg-slate-100 text-slate-900"
              }`}
            >
              {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
                {/* Mobile Menu */}
        {open && (
          <div
            className={`lg:hidden mt-4 overflow-hidden rounded-3xl transition-all duration-300
            ${
              dark
                ? "bg-[#0F172A]/90 backdrop-blur-2xl border border-slate-700 shadow-2xl"
                : "bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-xl"
            }`}
          >
            <nav className="flex flex-col p-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-5 rounded-xl text-center font-medium transition-all duration-300
                  ${
                    dark
                      ? "text-slate-300 hover:bg-blue-600 hover:text-white"
                      : "text-slate-700 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setOpen(false);
                  setMeetingOpen(true);
                }}
                className="mt-4 py-3 rounded-full text-white font-semibold
                bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500
                hover:scale-[1.02]
                transition-all duration-300"
              >
                📅Shedule a metting 
              </button>

              <div className="flex justify-center mt-5 sm:hidden">
                <div
                  className={`p-2 rounded-full ${
                    dark
                      ? "bg-slate-800 border border-slate-700"
                      : "bg-slate-100 border border-slate-200"
                  }`}
                >
                  <DarkModeSwitch
                    checked={dark}
                    onChange={setDark}
                    size={20}
                  />
                </div>
              </div>
            </nav>
          </div>
        )}

        <BookMeetingModal
          isOpen={meetingOpen}
          onClose={() => setMeetingOpen(false)}
        />
      </header>
    </>
  );
}

export default Navbar;
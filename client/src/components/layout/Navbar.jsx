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
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 glass border-b border-white/10 shadow-[0_8px_32px_-12px_rgba(139,92,246,0.25)]"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-tight"
        >
          Ajad<span className="gradient-text">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-1 glass rounded-full px-2 py-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block glass rounded-full p-1.5">
            <DarkModeSwitch
              checked={dark}
              onChange={setDark}
              size={20}
            />
          </div>

          <button
            onClick={() => setMeetingOpen(true)}
            className="hidden md:inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 hover:shadow-[0_0_25px_-3px_rgba(217,70,239,0.6)] transition-shadow duration-300"
          >
            Book a Meeting
          </button>

          <button
            className="lg:hidden text-3xl text-white glass rounded-full p-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden mx-4 mt-3 glass rounded-3xl overflow-hidden border border-white/10">
          <nav className="flex flex-col py-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-center text-gray-300 hover:bg-white/10 hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setMeetingOpen(true);
              }}
              className="mx-4 my-3 px-5 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
            >
              Book a Meeting
            </button>
          </nav>
        </div>
      )}

      <BookMeetingModal
        isOpen={meetingOpen}
        onClose={() => setMeetingOpen(false)}
      />
    </header>
  );
}

export default Navbar;
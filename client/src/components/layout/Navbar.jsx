import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "../../context/ThemeContext";

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
  const { dark, setDark } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-white hover:text-blue-500 transition"
        >
          Ajad<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-500 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <DarkModeSwitch
            checked={dark}
            onChange={setDark}
            size={24}
          />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-center text-gray-300 hover:bg-slate-800 hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const footerLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const { dark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`relative border-t transition-colors duration-300 ${
        dark
          ? "border-white/10 bg-[#05060a] text-white"
          : "border-slate-200 bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.8fr]">

          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center text-3xl font-extrabold tracking-tight"
            >
              Ajad
              <span className="text-violet-500">.</span>
            </a>

            <p
              className={`mt-5 max-w-md text-sm leading-7 ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Full Stack MERN Developer focused on building modern,
              responsive, and scalable web applications with clean
              interfaces and reliable backend systems.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="https://github.com/Ajadbharti"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-400"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
                }`}
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/ajad62bharti/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-400"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href="mailto:azadbharati802223@gmail.com"
                aria-label="Email"
                className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-fuchsia-400/40 hover:bg-fuchsia-500/10 hover:text-fuchsia-400"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:text-fuchsia-600"
                }`}
              >
                <FaEnvelope size={17} />
              </a>

            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
              Navigation
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-fit text-sm transition-all duration-200 hover:translate-x-1 ${
                    dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-violet-600"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* INFORMATION */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
              Let's Connect
            </h3>

            <p
              className={`mt-5 text-sm leading-7 ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Have a project, idea, or opportunity?
              Feel free to get in touch.
            </p>

            <a
              href="mailto:azadbharati802223@gmail.com"
              className={`mt-5 inline-flex items-center text-sm font-semibold transition-colors ${
                dark
                  ? "text-slate-200 hover:text-violet-400"
                  : "text-slate-800 hover:text-violet-600"
              }`}
            >
              Get in touch
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div
          className={`my-10 h-px ${
            dark ? "bg-white/10" : "bg-slate-200"
          }`}
        />

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p
            className={`text-sm ${
              dark ? "text-slate-500" : "text-slate-500"
            }`}
          >
            © {new Date().getFullYear()}{" "}
            <span
              className={`font-semibold ${
                dark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Ajad Bharti
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <p
              className={`text-xs ${
                dark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Built with React & Tailwind CSS
            </p>

            {/* Back To Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? "border-white/10 bg-white/[0.03] text-slate-400 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-400"
                  : "border-slate-200 bg-slate-50 text-slate-500 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
              }`}
            >
              <FaArrowUp size={13} />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
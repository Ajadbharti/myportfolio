import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`border-t transition-all duration-300 ${
        dark
          ? "bg-slate-950 border-slate-800 text-white"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold">
              Ajad<span className="text-blue-600">.</span>
            </h2>

            <p
              className={`mt-4 max-w-md leading-7 ${
                dark ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Full Stack MERN Developer passionate about building modern,
              responsive and scalable web applications using React,
              Node.js, Express.js and MongoDB.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end">

            <h3 className="text-xl font-semibold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/Ajadbharti"
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                  dark
                    ? "bg-slate-800 hover:bg-blue-600"
                    : "bg-slate-100 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ajad62bharti/"
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                  dark
                    ? "bg-slate-800 hover:bg-blue-600"
                    : "bg-slate-100 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:azadbharati802223@gmail.com"
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                  dark
                    ? "bg-slate-800 hover:bg-blue-600"
                    : "bg-slate-100 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className={`mt-10 pt-6 border-t text-center ${
            dark
              ? "border-slate-800 text-gray-400"
              : "border-slate-200 text-slate-600"
          }`}
        >
          <p className="flex justify-center items-center gap-2">
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            by
            <span
              className={`font-semibold ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              Ajad Bharti
            </span>
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import profile from "../../assets/images/profile.png";

function Hero() {
  const { dark } = useTheme();

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden transition-all duration-300 ${
        dark
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center px-6 py-24 relative z-10">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 font-semibold tracking-widest uppercase">
            Welcome to My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-600">
              Ajad Bharti
            </span>
          </h1>

          <div
            className={`mt-6 min-h-[60px] text-2xl md:text-3xl font-semibold ${
              dark
                ? "text-blue-400"
                : "text-blue-600"
            }`}
          >
            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "React Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </div>

          <p
            className={`mt-6 max-w-xl leading-8 ${
              dark
                ? "text-gray-400"
                : "text-slate-600"
            }`}
          >
            I build responsive, scalable and modern web applications using
            React, Node.js, Express.js and MongoDB. I enjoy solving
            real-world problems and creating clean user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition font-semibold"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className={`px-8 py-3 rounded-xl flex items-center gap-2 transition ${
                dark
                  ? "border border-slate-700 hover:border-blue-500"
                  : "border border-slate-300 hover:border-blue-500"
              }`}
            >
              <FaDownload />
              Resume
            </a>

          </div>

          <div className="flex gap-6 text-2xl mt-10">

            <a
              href="https://github.com/Ajadbharti"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ajad62bharti/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:azadbharati802223@gmail.com"
              className="hover:text-blue-500 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>
                {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-[90px] opacity-30 animate-pulse"></div>

            {/* Outer Gradient Border */}
            <div className="relative w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[5px] shadow-[0_0_70px_rgba(59,130,246,0.45)]">

              {/* Inner Circle */}
              <div
                className={`w-full h-full rounded-full overflow-hidden ${
                  dark ? "bg-slate-900" : "bg-slate-100"
                }`}
              >
                <img
                  src={profile}
                  alt="Ajad Bharti"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>

            {/* Floating Badge */}
            <div
              className={`absolute -bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full shadow-xl font-semibold ${
                dark
                  ? "bg-slate-900 text-white border border-slate-700"
                  : "bg-white text-slate-900 border border-slate-200"
              }`}
            >
              🚀 Full Stack Developer
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
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
          <p className="text-blue-400 font-semibold tracking-widest uppercase">
            Welcome to my Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight">
            Hi, I'm <br />
            <span className="text-blue-500">Ajad Bharti</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mt-6 h-16">
            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "React Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            I build responsive, scalable and modern web applications using
            React, Node.js, Express and MongoDB. I enjoy solving real-world
            problems and creating clean user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-xl border border-slate-700 hover:border-blue-500 transition flex items-center gap-2"
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
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={profile}
              alt="Ajad Bharti"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
            <div className="w-full h-full rounded-3xl bg-slate-950 flex items-center justify-center text-8xl">
              👨‍💻
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-500 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Passionate MERN Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            I'm <span className="text-white font-semibold">Ajad Bharti</span>,
            a B.Tech student passionate about building modern web applications
            using React, Node.js, Express and MongoDB. I enjoy solving real-world
            problems and continuously improving my development skills.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <FaGraduationCap className="text-blue-500 text-xl" />
              <span>B.Tech Student</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCode className="text-blue-500 text-xl" />
              <span>Full Stack MERN Developer</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span>India</span>
            </div>

          </div>

          <a
            href="#"
            className="inline-block mt-10 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
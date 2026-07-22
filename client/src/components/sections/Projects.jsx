import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const projects = [
  {
    title: "Apna Store",
    image: "https://placehold.co/600x400?text=Apna+Store",
    description:
      "Full Stack MERN e-commerce application with authentication, cart, orders and seller dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ajadbharti",
    live: "#",
  },
  {
    title: "Fitness Training Portal",
    image: "https://placehold.co/600x400?text=Fitness+Portal",
    description:
      "Workout scheduling platform with authentication and progress tracking.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/Ajadbharti",
    live: "#",
  },
  {
    title: "Portfolio Website",
    image: "https://placehold.co/600x400?text=Portfolio",
    description:
      "Modern responsive portfolio built using React, Tailwind CSS and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Ajadbharti",
    live: "#",
  },
];

function Projects() {
  const { dark } = useTheme();

  return (
    <section
      id="projects"
      className={`py-24 transition-all duration-300 ${
        dark
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Projects
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Featured Projects
          </h2>

          <p
            className={`mt-4 ${
              dark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Some projects I've built using modern web technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                dark
                  ? "bg-slate-950 border-slate-800 hover:border-blue-500"
                  : "bg-white border-slate-200 hover:border-blue-500"
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p
                  className={`mb-5 leading-7 ${
                    dark ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        dark
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                      dark
                        ? "bg-slate-800 hover:bg-blue-600 text-white"
                        : "bg-slate-200 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
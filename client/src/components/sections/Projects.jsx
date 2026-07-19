import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import apnaStore from "../../assets/images/projects/apna-store.png";
// import fitnessPortal from "../../assets/images/projects/fitness-portal.png";
// import portfolioImg from "../../assets/images/projects/portfolio.png";

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
      "Modern responsive portfolio built using React, Tailwind and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Ajadbharti",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase">
            Projects
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4">
            Some projects I've built using modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500 transition"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-6xl">
                🚀
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
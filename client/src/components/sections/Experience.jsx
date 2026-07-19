import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026 - Present",
    title: "MERN Stack Developer",
    company: "Personal Projects",
    description:
      "Building full-stack web applications using React, Node.js, Express.js and MongoDB.",
  },
  {
    year: "2025 - 2026",
    title: "Frontend Developer",
    company: "React Learning",
    description:
      "Created responsive websites with React, Tailwind CSS and JavaScript.",
  },
  {
    year: "2024 - 2025",
    title: "Programming Journey",
    company: "LPU",
    description:
      "Started programming with C, Java, DBMS and web development.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-slate-900 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase font-semibold">
            Experience
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Journey
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-500 ml-5">

          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-3 w-6 h-6 rounded-full bg-blue-500"></span>

              <p className="text-blue-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.company}
              </p>

              <p className="text-gray-500 mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;
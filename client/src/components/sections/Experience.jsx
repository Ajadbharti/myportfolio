import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

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
  const { dark } = useTheme();

  return (
    <section
      id="experience"
      className={`py-24 transition-all duration-300 ${
        dark
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            Experience
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Journey
          </h2>

          <p
            className={`mt-4 ${
              dark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            My learning path and development experience.
          </p>
        </div>

        {/* Timeline */}
        <div
          className={`relative ml-4 border-l-4 ${
            dark ? "border-blue-500" : "border-blue-600"
          }`}
        >
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative ml-10 mb-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[54px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900"></div>

              {/* Card */}
              <div
                className={`rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  dark
                    ? "bg-slate-800 border border-slate-700"
                    : "bg-slate-50 border border-slate-200"
                }`}
              >
                <p className="text-blue-600 font-semibold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p
                  className={`mt-2 ${
                    dark ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  {item.company}
                </p>

                <p
                  className={`mt-4 leading-7 ${
                    dark ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
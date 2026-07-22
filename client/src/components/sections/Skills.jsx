import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
    ],
  },
];

function Skills() {
  const { dark } = useTheme();

  return (
    <section
      id="skills"
      className={`py-24 transition-all duration-300 ${
        dark
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Technical Skills
          </h2>

          <p
            className={`mt-4 ${
              dark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                dark
                  ? "bg-slate-900 border-slate-800 hover:border-blue-500"
                  : "bg-white border-slate-200 hover:border-blue-500"
              }`}
            >
              <h3 className="text-2xl font-semibold text-blue-500 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`rounded-xl py-3 text-center font-medium cursor-pointer transition-all duration-300 ${
                      dark
                        ? "bg-slate-800 hover:bg-blue-600 text-white"
                        : "bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700"
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
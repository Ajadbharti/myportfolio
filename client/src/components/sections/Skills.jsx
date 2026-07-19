import { motion } from "framer-motion";

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
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase">
            Skills
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Technical Skills
          </h2>

          <p className="text-gray-400 mt-4">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-800 rounded-lg py-3 text-center hover:bg-blue-600 transition cursor-pointer"
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
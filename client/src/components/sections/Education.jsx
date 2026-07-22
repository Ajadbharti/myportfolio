import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    college: "Lovely Professional University",
    duration: "2024 - 2028",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering. Learning Data Structures, DBMS, Operating Systems, React, Node.js, Express.js and MongoDB.",
  },
  {
    degree: "Intermediate (12th)",
    college: "Your School Name",
    duration: "2022 - 2024",
    description:
      "Completed Higher Secondary Education with Science stream.",
  },
  {
    degree: "High School (10th)",
    college: "Your School Name",
    duration: "2021 - 2022",
    description:
      "Completed Secondary Education.",
  },
];

function Education() {
  const { dark } = useTheme();

  return (
    <section
      id="education"
      className={`py-24 transition-all duration-300 ${
        dark
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            Education
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Academic Journey
          </h2>

          <p
            className={`mt-4 ${
              dark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            My educational background and learning journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl p-8 border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                dark
                  ? "bg-slate-900 border-slate-800 hover:border-blue-500"
                  : "bg-white border-slate-200 hover:border-blue-500"
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-blue-500 font-medium mt-2">
                    {item.college}
                  </p>

                  <p
                    className={`mt-1 ${
                      dark ? "text-gray-400" : "text-slate-500"
                    }`}
                  >
                    {item.duration}
                  </p>

                  <p
                    className={`mt-5 leading-8 ${
                      dark ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
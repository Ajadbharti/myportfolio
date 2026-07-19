import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

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
  return (
    <section id="education" className="bg-slate-950 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase font-semibold">
            Education
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Academic Journey
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <div className="flex items-start gap-5">
                <FaGraduationCap className="text-4xl text-blue-500 mt-1" />

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-blue-400 mt-1">
                    {item.college}
                  </p>

                  <p className="text-gray-400 mt-1">
                    {item.duration}
                  </p>

                  <p className="text-gray-400 mt-4 leading-7">
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
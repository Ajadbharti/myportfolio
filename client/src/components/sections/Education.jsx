import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Lovely Professional University",
    duration: "2024 - 2028",
    status: "current",
    link: null,
    description:
      "Currently pursuing an undergraduate program in computer science with a focus on software development and system design.",
  },
  {
    degree: "Higher Secondary Education, Science (PCM)",
    college: "J.S College",
    duration: "May 2021 - Jun 2023",
    status: null,
    link: "https://jansahkaricollege.com/",
    description:
      "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
  },
  {
    degree: "Secondary Education",
    college: "MDJ Public School",
    duration: "March 2020 - April 2021",
    status: null,
    link: null,
    description:
      "Completed secondary education with involvement in various activities.",
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

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              className={`rounded-2xl p-8 border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                dark
                  ? "bg-slate-900 border-slate-800 hover:border-blue-500"
                  : "bg-white border-slate-200 hover:border-blue-500"
              }`}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Degree + Current Status */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold">
                      {item.degree}
                    </h3>

                    {item.status === "current" && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  {/* College */}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-medium mt-2 inline-block hover:underline"
                    >
                      {item.college}
                    </a>
                  ) : (
                    <p className="text-blue-500 font-medium mt-2">
                      {item.college}
                    </p>
                  )}

                  {/* Duration */}
                  <p
                    className={`mt-1 ${
                      dark ? "text-gray-400" : "text-slate-500"
                    }`}
                  >
                    {item.duration}
                  </p>

                  {/* Description */}
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
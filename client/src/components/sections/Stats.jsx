import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaCode,
  FaAward,
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const stats = [
  {
    icon: <FaProjectDiagram />,
    number: "10+",
    label: "Projects Completed",
  },
  {
    icon: <FaCode />,
    number: "500+",
    label: "DSA Problems",
  },
  {
    icon: <FaLaptopCode />,
    number: "2+",
    label: "Years Learning",
  },
  {
    icon: <FaAward />,
    number: "5+",
    label: "Certificates",
  },
];

function Stats() {
  const { dark } = useTheme();

  return (
    <section
      className={`py-16 transition-all duration-300 ${
        dark
          ? "bg-slate-950"
          : "bg-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className={`rounded-2xl p-8 text-center shadow-lg border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                dark
                  ? "bg-slate-900 border-slate-800 hover:border-blue-500"
                  : "bg-white border-slate-200 hover:border-blue-500"
              }`}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl mb-6 shadow-lg">
                {item.icon}
              </div>

              {/* Number */}
              <h3
                className={`text-4xl font-bold ${
                  dark
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                {item.number}
              </h3>

              {/* Label */}
              <p
                className={`mt-3 ${
                  dark
                    ? "text-gray-400"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
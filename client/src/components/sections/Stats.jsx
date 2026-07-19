import { motion } from "framer-motion";
import { FaLaptopCode, FaProjectDiagram, FaCode, FaAward } from "react-icons/fa";

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
  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all"
            >
              <div className="text-4xl text-blue-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-2">
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
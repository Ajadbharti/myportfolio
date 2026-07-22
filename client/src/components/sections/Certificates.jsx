import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const certificates = [
  {
    title: "React.js Certification",
    issuer: "Coursera / Udemy",
    year: "2026",
  },
  {
    title: "Java Programming",
    issuer: "LPU",
    year: "2025",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Online Learning",
    year: "2025",
  },
];

function Certificates() {
  const { dark } = useTheme();

  return (
    <section
      id="certificates"
      className={`py-24 transition-all duration-300 ${
        dark
          ? "bg-slate-950 text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase font-semibold tracking-widest">
            Certificates
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Certifications
          </h2>

          <p
            className={`mt-4 ${
              dark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Certifications that showcase my learning journey and technical
            expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl p-8 border shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center ${
                dark
                  ? "bg-slate-900 border-slate-800 hover:border-blue-500"
                  : "bg-white border-slate-200 hover:border-blue-500"
              }`}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <FaCertificate className="text-white text-4xl" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p
                className={`mt-3 ${
                  dark ? "text-gray-400" : "text-slate-600"
                }`}
              >
                {certificate.issuer}
              </p>

              {/* Year */}
              <span className="inline-block mt-5 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold">
                {certificate.year}
              </span>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;
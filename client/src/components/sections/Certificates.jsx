import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

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
  return (
    <section id="certificates" className="bg-slate-950 py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase font-semibold">
            Certificates
          </p>

          <h2 className="text-4xl font-bold mt-3">
            My Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <FaCertificate className="text-5xl text-blue-500 mb-4" />

              <h3 className="text-2xl font-bold">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {certificate.issuer}
              </p>

              <span className="inline-block mt-4 text-blue-400">
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
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-blue-500 font-semibold uppercase">
            Contact
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project or opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-500 text-2xl" />
                <span>azadbharati802223@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-blue-500 text-2xl" />
                <a
                  href="https://github.com/Ajadbharti"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  github.com/Ajadbharti
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-500 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/ajad62bharti/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400"
                >
                  linkedin.com/in/ajad62bharti
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-900 border border-slate-700 outline-none focus:border-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
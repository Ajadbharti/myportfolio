import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function Contact() {
  const { dark } = useTheme();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          meeting_date: "N/A",
          meeting_time: "N/A",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p
            className={`mt-4 ${
              dark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            Have a project or opportunity? Feel free to contact me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-lg ${
              dark
                ? "bg-slate-900 border border-slate-800"
                : "bg-white border border-slate-200"
            }`}
          >
            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>

                <span>azadbharati802223@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaGithub className="text-white text-xl" />
                </div>

                <a
                  href="https://github.com/Ajadbharti"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  github.com/Ajadbharti
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaLinkedin className="text-white text-xl" />
                </div>

                <a
                  href="https://www.linkedin.com/in/ajad62bharti/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  linkedin.com/in/ajad62bharti
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-lg space-y-5 ${
              dark
                ? "bg-slate-900 border border-slate-800"
                : "bg-white border border-slate-200"
            }`}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl border outline-none transition ${
                dark
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500"
              }`}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl border outline-none transition ${
                dark
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500"
              }`}
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className={`w-full p-4 rounded-xl border outline-none resize-none transition ${
                dark
                  ? "bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-500"
                  : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500"
              }`}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";

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
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
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

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "azadbharati802223@gmail.com",
      href: "mailto:azadbharati802223@gmail.com",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/Ajadbharti",
      href: "https://github.com/Ajadbharti",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ajad62bharti",
      href: "https://www.linkedin.com/in/ajad62bharti/",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-28 transition-colors duration-300 ${
        dark
          ? "bg-[#05060a] text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full blur-[150px] ${
            dark
              ? "bg-violet-700/[0.06]"
              : "bg-violet-500/[0.035]"
          }`}
        />

        <div
          className={`absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full blur-[150px] ${
            dark
              ? "bg-indigo-600/[0.05]"
              : "bg-indigo-500/[0.025]"
          }`}
        />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-500">
              Contact
            </span>

            <span className="h-px w-8 bg-violet-500" />
          </div>

          <h2
            className={`text-4xl font-extrabold tracking-tight sm:text-5xl ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-xl text-base leading-7 ${
              dark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have an idea, project, or opportunity?
            Send me a message and let's start a conversation.
          </p>
        </motion.div>

        {/* ===================================================
            CONTACT CONTENT
        =================================================== */}

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-[1.75rem] border p-8 ${
              dark
                ? "border-white/[0.08] bg-white/[0.025]"
                : "border-slate-200 bg-slate-50/70"
            }`}
          >
            <div className="mb-8">
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                  dark
                    ? "bg-violet-500/10 text-violet-400"
                    : "bg-violet-100 text-violet-600"
                }`}
              >
                <FaEnvelope size={17} />
              </span>

              <h3
                className={`mt-5 text-2xl font-bold ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                Get in touch
              </h3>

              <p
                className={`mt-3 text-sm leading-7 ${
                  dark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                I'm always open to discussing new projects,
                creative ideas, collaborations, or opportunities.
              </p>
            </div>

            {/* Contact Links */}

            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.label !== "Email"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.label !== "Email"
                        ? "noreferrer"
                        : undefined
                    }
                    className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-300 ${
                      dark
                        ? "border-white/[0.07] bg-black/10 hover:border-violet-400/25 hover:bg-violet-500/[0.04]"
                        : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        dark
                          ? "bg-white/[0.05] text-slate-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={16} />
                    </span>

                    <div className="min-w-0">
                      <p
                        className={`text-[11px] uppercase tracking-wider ${
                          dark
                            ? "text-slate-500"
                            : "text-slate-400"
                        }`}
                      >
                        {item.label}
                      </p>

                      <p
                        className={`mt-1 truncate text-sm font-medium ${
                          dark
                            ? "text-slate-200"
                            : "text-slate-700"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>

                    <FaArrowRight
                      size={11}
                      className={`ml-auto shrink-0 transition-all duration-300 group-hover:translate-x-1 ${
                        dark
                          ? "text-slate-600 group-hover:text-violet-400"
                          : "text-slate-400 group-hover:text-violet-500"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* Availability */}

            <div
              className={`mt-7 flex items-center gap-3 rounded-xl border px-4 py-3 ${
                dark
                  ? "border-emerald-400/10 bg-emerald-400/[0.04]"
                  : "border-emerald-200 bg-emerald-50"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span
                className={`text-xs font-medium ${
                  dark
                    ? "text-emerald-300"
                    : "text-emerald-700"
                }`}
              >
                Open to opportunities & collaborations
              </span>
            </div>
          </motion.div>

          {/* =================================================
              FORM
          ================================================= */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative rounded-[1.75rem] border p-8 sm:p-9 ${
              dark
                ? "border-white/[0.08] bg-white/[0.025]"
                : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            {/* Accent Line */}

            <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />

            <div className="mb-8">
              <h3
                className={`text-2xl font-bold ${
                  dark ? "text-white" : "text-slate-900"
                }`}
              >
                Send a message
              </h3>

              <p
                className={`mt-2 text-sm ${
                  dark ? "text-slate-500" : "text-slate-500"
                }`}
              >
                Fill out the form and I'll get back to you.
              </p>
            </div>

            <div className="space-y-5">

              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wider ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                    dark
                      ? "border-white/[0.08] bg-black/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/[0.08]"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/[0.08]"
                  }`}
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wider ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                    dark
                      ? "border-white/[0.08] bg-black/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/[0.08]"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/[0.08]"
                  }`}
                />
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wider ${
                    dark
                      ? "text-slate-400"
                      : "text-slate-600"
                  }`}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm outline-none transition-all duration-300 ${
                    dark
                      ? "border-white/[0.08] bg-black/10 text-white placeholder:text-slate-600 focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/[0.08]"
                      : "border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/[0.08]"
                  }`}
                />
              </div>

              {/* Button */}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-violet-600/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-500 dark:hover:text-white"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
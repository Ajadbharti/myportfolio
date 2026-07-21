import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaTimes, FaCalendarAlt, FaClock, FaPaperPlane } from "react-icons/fa";

function BookMeetingModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.date || !form.time) {
      toast.error("Please fill all required fields");
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
          meeting_date: form.date,
          meeting_time: form.time,
          message: form.message || "No additional message",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Meeting request sent! I'll confirm via email soon.");
      setForm({ name: "", email: "", date: "", time: "", message: "" });
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            className="relative glass rounded-3xl p-8 w-full max-w-md border border-white/10"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
              aria-label="Close"
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white">
              Book a <span className="gradient-text">Meeting</span>
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Pick a date & time, I'll confirm over email.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-400 transition placeholder:text-gray-500 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-400 transition placeholder:text-gray-500 text-white"
              />

              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type="date"
                    name="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full p-3.5 pl-9 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-400 transition text-white [color-scheme:dark] text-sm"
                  />
                </div>

                <div className="relative">
                  <FaClock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className="w-full p-3.5 pl-9 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-400 transition text-white [color-scheme:dark] text-sm"
                  />
                </div>
              </div>

              <textarea
                name="message"
                rows="3"
                placeholder="What would you like to discuss? (optional)"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3.5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-violet-400 transition placeholder:text-gray-500 text-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.6)] transition-all duration-300 px-6 py-3.5 rounded-full font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Request Meeting"}
                {!loading && <FaPaperPlane size={14} />}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BookMeetingModal;
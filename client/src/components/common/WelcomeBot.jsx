import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChatBubbleLeftRight, HiXMark } from "react-icons/hi2";
import { useTheme } from "../../context/ThemeContext";

function WelcomeBot() {
  const [open, setOpen] = useState(false);
  const { dark } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className={`w-72 rounded-2xl p-5 shadow-2xl border ${
              dark
                ? "bg-slate-900/95 border-slate-700 text-white"
                : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-lg">
                  🤖
                </span>
                <div>
                  <p className="font-semibold text-sm">Portfolio Bot</p>
                  <p className="text-xs text-emerald-400">● online</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className={`p-1 rounded-full ${
                  dark ? "hover:bg-white/10" : "hover:bg-slate-100"
                }`}
              >
                <HiXMark size={18} />
              </button>
            </div>

            <div
              className={`mt-4 rounded-xl px-4 py-3 text-sm leading-6 ${
                dark ? "bg-white/5" : "bg-slate-100"
              }`}
            >
              👋 Welcome, <span className="font-semibold">Ajad Bharti</span>!
              Thanks for visiting my portfolio. Feel free to explore my
              projects and skills, or reach out anytime.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" } }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-violet-500 shadow-[0_10px_30px_rgba(6,182,212,0.45)]"
      >
        <HiOutlineChatBubbleLeftRight size={24} />
      </motion.button>
    </div>
  );
}

export default WelcomeBot;
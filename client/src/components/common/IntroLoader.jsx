import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = ["AI ENGINEER", "FULL STACK DEVELOPER", "MERN DEVELOPER"];

function EqualizerBars() {
  return (
    <div className="flex items-end gap-1.5 h-6">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className={`w-[3px] rounded-full ${i === 0 ? "bg-violet-500" : "bg-slate-900"}`}
          animate={{ height: ["30%", "100%", "45%", "80%", "30%"] }}
          transition={{
            duration: 1.2 + i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

function IntroLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading -> welcome -> expand -> done
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setPhase("welcome");
      }
    };
    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (phase === "welcome") {
      const t = setTimeout(() => setPhase("expand"), 650);
      return () => clearTimeout(t);
    }
    if (phase === "expand") {
      const t = setTimeout(() => {
        setVisible(false);
        onFinish?.();
      }, 700);
      return () => clearTimeout(t);
    }
  }, [phase, onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#ece5f7] flex items-center justify-center"
        >
          {/* Marquee background text */}
          <div className="absolute inset-0 flex flex-col justify-center gap-2 opacity-90 select-none pointer-events-none">
            {ROLES.map((role, i) => (
              <motion.div
                key={role}
                className="whitespace-nowrap text-[7vw] font-extrabold text-black/90 tracking-tight"
                animate={{ x: i % 2 === 0 ? ["0%", "-15%"] : ["-15%", "0%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
              >
                {(role + "  •  ").repeat(6)}
              </motion.div>
            ))}
          </div>

          {/* Top bar */}
          <div className="absolute top-8 left-0 right-0 flex items-center justify-between px-8 z-10">
            <p className="font-bold text-lg text-slate-900">AjadBharti</p>
            <EqualizerBars />
          </div>

          {/* Center pill */}
          <motion.div
            layout
            className="relative z-10 flex items-center justify-center rounded-full bg-black shadow-2xl overflow-hidden"
            initial={{ width: 220, height: 64 }}
            animate={
              phase === "expand"
                ? { width: "300vw", height: "300vh", borderRadius: "0%" }
                : phase === "welcome"
                ? { width: 320, height: 64, borderRadius: "9999px" }
                : { width: 220, height: 64, borderRadius: "9999px" }
            }
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              border: phase === "expand" ? "none" : "2px solid transparent",
              backgroundImage:
                phase === "expand"
                  ? "none"
                  : "linear-gradient(#000,#000), linear-gradient(90deg,#7c3aed,#22d3ee)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <AnimatePresence mode="wait">
              {phase === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-3 text-white font-semibold tracking-wide"
                >
                  <span>LOADING</span>
                  <span className="text-slate-400 font-normal">{progress}%</span>
                </motion.div>
              )}
              {(phase === "welcome") && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-white font-semibold tracking-[0.15em] text-sm whitespace-nowrap px-2"
                >
                  WELCOME, AJAD BHARTI
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroLoader;
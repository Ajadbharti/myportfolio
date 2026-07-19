import { motion } from "framer-motion";

function Card({ children }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg"
    >
      {children}
    </motion.div>
  );
}

export default Card;
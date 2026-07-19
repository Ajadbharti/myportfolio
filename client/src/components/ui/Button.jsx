import { motion } from "framer-motion";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}) {
  const base =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
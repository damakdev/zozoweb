import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, key, ...props }) {
  return <AnimatePresence>
    <motion.div
      {...props}
      key={key}
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "auto", opacity: 1 }}
      exit={{ x: window.innerWidth, }}
      transition={{ type: "tween", duration: 0.2 }}
    >{children}</motion.div>;
  </AnimatePresence>
}

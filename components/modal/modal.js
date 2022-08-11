import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "../../public/svg/icons";
import styles from "./modal.module.scss";

export default function Modal({
  display,
  close,
  children,
  title,
  width,
  height,
}) {
  useEffect(() => {
    if (display) {
      document.querySelector("html").style.overflow = "hidden";
    }
    if (!display) {
      document.querySelector("html").style.removeProperty("overflow");
    }
  }, [display]);

  return (
    <AnimatePresence>
      {display && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween" }}
            className={styles.backdrop}
            onClick={close}
          ></motion.div>
          <motion.div
            key={display}
            initial={{ scale: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className={styles.modal}
            style={{ width: width, height:height}}
          >
            <div className={styles.head}>
              <h1>{title}</h1>
              <CloseIcon onClick={close} />
            </div>
            <div className={styles.body} style={{ height: height }}>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

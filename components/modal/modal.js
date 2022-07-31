import { motion, AnimatePresence } from "framer-motion";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { CloseIcon } from "../../public/svg/icons";
import styles from "./modal.module.scss";

export default function Modal({ display, close, children, title }) {
  useLockBodyScroll();

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
          >
            <div className={styles.head}>
              <h1>{title}</h1>
              <CloseIcon onClick={close} />
            </div>
            <div className={styles.body}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

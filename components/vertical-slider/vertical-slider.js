import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./vertical-slider.module.scss";

export default function VerticalSlider({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <AnimatePresence exitBeforeEnter>
        <motion.span
          className={styles.slide}
          key={index}
          // initial={{ opacity: 0, x: coordinate }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{data[index]?.text}</h3>
          <img src={data[index]?.image.src} alt="slider image" />
        </motion.span>
      </AnimatePresence>
      <div className={styles.dots}>
        {Array.apply(null, Array(data.length)).map((item, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={i === index ? styles.active : null}
          ></div>
        ))}
      </div>
    </div>
  );
}

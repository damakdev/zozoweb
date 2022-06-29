import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./ads-slider.module.scss";

export default function AdsSlider({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className={styles.slide}
          key={index}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <img src={data[index]?.image.src} alt="ad image" />
          <div>
            <h1>{data[index]?.title}</h1>
            <p>{data[index]?.text}</p>
            <Link href="">{data[index]?.cta}</Link>
          </div>
        </motion.div>
      </AnimatePresence>
      {data.length > 1 && (
        <div className={styles.dots}>
          {Array.apply(null, Array(data.length)).map((item, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={i === index ? styles.active : null}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

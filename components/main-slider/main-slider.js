import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeftArrow, RightArrow } from "../../public/svg/icons";
import styles from "./main-slider.module.scss";

export default function MainSlider({ data }) {
  const [index, setIndex] = useState(0);
  const [coordinate, setCoordinate] = useState(100);

  function nextSlide() {
    setCoordinate(100);
    if (index === data.length - 1) {
      setIndex(0);
      return;
    }
    if (index < data.length) {
      setIndex(index + 1);
    }
  }

  function prevSlide() {
    setCoordinate(-100);
    if (index < data.length && index !== 0) setIndex(index - 1);
    if (index === 0) setIndex(data.length - 1);
  }

  return (
    <div className={styles.container}>
      <AnimatePresence exitBeforeEnter>
        <motion.span
          className={styles.slide}
          key={index}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          <h1>{data[index]?.text}</h1>
          <motion.img
            // initial={{ scale: 1.01 }}
            // whileHover={{ scale: 1 }}
            // transition={{ type: "tween", duration: 0.4 }}
            src={data[index]?.image.src}
            alt="slider image"
          />
        </motion.span>
      </AnimatePresence>
      {data.length > 1 && (
        <>
          <div className={styles.left}>
            <LeftArrow onClick={prevSlide} />
          </div>
          <div className={styles.right}>
            <RightArrow onClick={nextSlide} />
          </div>
          <div className={styles.dots}>
            {Array.apply(null, Array(data.length)).map((item, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={i === index ? styles.active : null}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { LeftArrow, RightArrow } from "../../public/svg/icons";
import Slide1 from "../../public/images/slider-image-1.jpg";
import styles from "./main-slider.module.scss";

export default function MainSlider() {
  const data = Array(5).fill(Slide1);
  console.log(data);
  return (
    <div className={styles.container}>
      <h1>
        Bid now,{" "}
        <span>
          Pay less,
          <br />
          and Save big on
          <br />
          items you love.
        </span>
      </h1>
      <img src={Slide1.src} alt="slider image" />
      <div className={styles.left}>
        <LeftArrow />
      </div>
      <div className={styles.right}>
        <RightArrow />
      </div>
    </div>
  );
}

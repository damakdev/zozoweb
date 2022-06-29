import { useState } from "react";
import { LeftArrow, RightArrow } from "../../public/svg/icons";
import styles from "./testimonial-card.module.scss";

export default function TestimonialCard({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Testimonials </h3>
        <span>
          <LeftArrow />
        </span>
        <span>
          <RightArrow />
        </span>
      </div>
      <div className={styles.body}>
        <img src={data[index]?.image?.src} alt="user photo" />
        <h4>{data[index]?.username}</h4>
        <hr />
        <p>{data[index]?.title}</p>
        <span>{data[index]?.testimonial}</span>
      </div>
    </div>
  );
}

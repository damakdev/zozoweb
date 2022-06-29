import styles from "./why-zozo.module.scss";

export default function WhyZozo({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.slide}>
        <div>
          <h1>{data[0]?.title}</h1>
          <h3>{data[0]?.subtitle}</h3>
          <p>{data[0]?.text}</p>
        </div>
        <img src={data[0]?.image.src} alt="image" />
      </div>
    </div>
  );
}

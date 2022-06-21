import styles from "./categories.module.scss";

export default function Categories() {
  const categories = [
    "babies & moms",
    "desktops",
    "audios & videos",
    "kids clothing",
    "accessories",
    "bags",
    "clothings",
    "footwears",
    "men",
    "cars",
  ];
  return (
    <div className={styles.container}>
      <p>Categories </p>
      <ul>
        {categories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

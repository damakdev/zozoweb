import styles from "./categories.module.scss";

export default function Categories({ categories }) {
  return (
    <div className={styles.container}>
      <p>Categories </p>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

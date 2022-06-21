import styles from "./button.module.scss";

export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

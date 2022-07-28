import styles from "./button.module.scss";

export default function Button({ children, onClick, type }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

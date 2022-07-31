import styles from "./button.module.scss";

export default function Button({ children, style, onClick, type }) {
  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
}

import React from "react";
import { ExclamationIcon } from "../../public/svg/icons";
import styles from "./error-message.module.scss";

export default function ErrorMessage({ message, fontSize, width }) {
  return (
    <div className={styles.container}>
      <ExclamationIcon />
      <p style={{ fontSize, width }}>
        {message || "Ooops, an error occurred. Please try again later"}
      </p>
    </div>
  );
}

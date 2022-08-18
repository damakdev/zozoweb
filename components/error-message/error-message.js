import React from "react";
import { ExclamationIcon } from "../../public/svg/icons";
import styles from "./error-message.module.scss";

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.container}>
      <ExclamationIcon/>
      <p>{message || "Ooops, an error occurred. Please try again later"}</p>
    </div>
  );
}

import React from "react";
import { BarLoader } from "react-spinners";
import styles from "./loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <p>Loading...</p>
      <BarLoader color="#743b96" />
    </div>
  );
}

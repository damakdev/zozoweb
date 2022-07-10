import Link from "next/link";
import LogoWhite from "../../public/images/logo-white.png";
import LogoColored from "../../public/images/logo-colored.png";
import styles from "./logo.module.scss";

export default function logo({ variant }) {
  if (variant === "purple")
    return (
      <Link href="/">
        <a className={styles.container}>
          <img src={LogoColored.src} alt="zozo-logo" />
        </a>
      </Link>
    );
  return (
    <Link href="/">
      <a className={styles.container}>
        <img src={LogoWhite.src} alt="zozo-logo" />
      </a>
    </Link>
  );
}

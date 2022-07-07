import Link from "next/link";
import Logo from "../logo";
import styles from "./merchant-nav.module.scss";

export default function MerchantNav() {
  return (
    <nav className={styles.container}>
      <Logo />
      <Link href="/merchant/how-it-works">How it works</Link>
      <Link href="/merchant/why-zozo">Why choose zozo</Link>
    </nav>
  );
}

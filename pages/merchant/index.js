import Link from "next/link";
import MerchantNav from "../../components/merchant-nav";
import styles from "../../styles/merchant/homepage.module.scss";

export default function Index() {
  return (
    <section className={styles.container}>
      <MerchantNav />
      <div className={styles.body}>
        <h1>
          <span>Earn More, </span>
          and Be in Control
          <br /> with zozo.ng
        </h1>
      </div>
      <div className={styles.footer}>
        <Link href="/">Get Started</Link>
        <Link href="/">Log In</Link>
      </div>
    </section>
  );
}

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import MerchantNav from "../../components/merchant-nav";
import styles from "../../styles/merchant/homepage.module.scss";

export default function Index() {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth.merchant);

  if (token) router.push("/merchant/dashboard");

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
        <Link href="/merchant/signup">Get Started</Link>
        <Link href="/merchant/login">Log In</Link>
      </div>
    </section>
  );
}

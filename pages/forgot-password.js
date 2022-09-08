import { ForgotPasswordBanner } from "../public/svg/images";
import useWindowDimension from "../hooks/useWindowDimension";
import Link from "next/link";
import Logo from "../components/logo";
import Button from "../components/ui/button/";
import styles from "../styles/forgot-password.module.scss";

export default function Index() {
  const { width } = useWindowDimension();
  function handleRequest(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          {width > 780 && <Logo />}
          <ForgotPasswordBanner />
        </div>
        <form onSubmit={handleRequest}>
          {width <= 780 && <Logo variant="purple" />}
          <h1>Forgot Password?</h1>
          <p>Don&apos;t worry we will help you out!!</p>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <Button>Request Password Change</Button>
          <span>
            Do you need help? <Link href="/">Contact Support</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

import { useState } from "react";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import { LoginBanner } from "../../public/svg/images";
import Link from "next/link";
import Button from "../ui/button/button";
import styles from "./login.module.scss";

export default function Login() {
  const [inputType, setInputType] = useState("password");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>
          Sign up now to win 🎁 <span>Zozo Hide and Seek Playoff →</span>
        </h3>
      </div>
      <div className={styles.main}>
        <div>
          <LoginBanner />
        </div>
        <form>
          <h1>Welcome Back</h1>
          <Link href="/">
            <a className={styles["google-auth"]}>
              <GoogleIcon />
              Continue with Google
            </a>
          </Link>
          <span>OR</span>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input type={inputType} id="password" name="password" />
            {inputType === "text" ? (
              <EyeOff onClick={() => setInputType("password")} />
            ) : (
              <EyeOn onClick={() => setInputType("text")} />
            )}
          </div>
          <div className="df aic asst fw">
            <div className="df aic">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <Link href="/">
              <a className={styles["forgot-password"]}>Forgot password?</a>
            </Link>
          </div>
          <Button>Sign up</Button>
          <p>
            Don’t have an account?
            <Link href="/"> Sign up for free!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

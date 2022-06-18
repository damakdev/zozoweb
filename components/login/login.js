import { useState } from "react";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import { LoginBanner } from "../../public/svg/images";
import AdBanner from "../ui/ad-banner/ad-banner";
import Link from "next/link";
import Button from "../ui/button/button";
import styles from "./login.module.scss";
// import PurpleButton from "../ui/purpleButton";
import dynamic from 'next/dynamic';

export default function Login() {
  const [inputType, setInputType] = useState("password");

 

const PurpleButton = dynamic(
  () => import('../ui/purpleButton'),
  { ssr: false }
);

  function loginHandler(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <AdBanner />
      <div className={styles.main}>
        <div>
          <LoginBanner />
        </div>
        <form onSubmit={loginHandler}>
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
          <PurpleButton
						name="Log in"
						width="100%"
						paddingY="10"
						isBoxShadow={true}
					/>
          
          <p>
            Don’t have an account?
            <Link href="/signup"> Sign up for free!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

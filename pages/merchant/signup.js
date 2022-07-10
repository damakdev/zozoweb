import { useState } from "react";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/signup.module.scss";

export default function Index() {
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  function signupHandler(e) {
    e.preventDefault();
  }
  return (
    <section className={styles.container}>
      <Logo variant="purple" />
      <form onSubmit={signupHandler}>
        <h1>Create Account</h1>
        <Link href="/">
          <a className={styles["google-auth"]}>
            <GoogleIcon />
            Continue with Google
          </a>
        </Link>
        <span>OR</span>
        <div className={styles["form-group"]}>
          <input type="email" id="email" name="email" placeholder="Email Address" />
        </div>
        <div className={styles["form-group"]}>
          <input type={inputType1} id="password" name="password" placeholder="Password" />
          {inputType1 === "text" ? (
            <EyeOff onClick={() => setInputType1("password")} />
          ) : (
            <EyeOn onClick={() => setInputType1("text")} />
          )}
        </div>
        <div className={styles["form-group"]}>
          <input
            type={inputType2}
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
          />
          {inputType2 === "text" ? (
            <EyeOff onClick={() => setInputType2("password")} />
          ) : (
            <EyeOn onClick={() => setInputType2("text")} />
          )}
        </div>

        <Button>Continue</Button>

        <p>
          Already have an account?
          <Link href="/merchant/login"> Login!</Link>
        </p>
      </form>
      <div></div>
    </section>
  );
}

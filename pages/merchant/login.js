import { useState } from "react";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/button";
import styles from "../../styles/merchant/signup.module.scss";

export default function Index() {
  const [checked, setChecked] = useState(false);
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  function loginHandler(e) {
    e.preventDefault();
  }
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <section className={styles.container}>
      <Logo variant="purple" />
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
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div className={styles["form-group"]}>
          <input
            type={inputType1}
            id="password"
            name="password"
            placeholder="Password"
          />
          {inputType1 === "text" ? (
            <EyeOff onClick={() => setInputType1("password")} />
          ) : (
            <EyeOn onClick={() => setInputType1("text")} />
          )}
        </div>
        <div className="flex gap-96">
          <div>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              Remember me {checked}
            </label>
          </div>
          <div>
            <Link href="/merchant/forgot-password"> Forgot Password</Link>
          </div>
        </div>
        
          <Button>Log in</Button>
    
        <p>
          Don't have an account?
          <Link href="/merchant/signup"> Signup for free!</Link>
        </p>
      </form>
      <div></div>
    </section>
  );
}

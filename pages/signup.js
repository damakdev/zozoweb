import { useState } from "react";
import { useDispatch } from "react-redux";
import { EyeOn, EyeOff, GoogleIcon } from "../public/svg/icons";
import { SignUpBanner } from "../public/svg/images";
import { registerCustomer } from "../store/slices/authSlice";
import { register, login } from "../services/api";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "../styles/signup.module.scss";

export default function Index() {
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  async function signupHandler(e) {
    e.preventDefault();
    const body = {
      first_name: "John",
      last_name: "Doe",
      email: emailAddress,
      password,
    };
    try {
      const response = await register({ title: "foo", body: "bar", userId: 1 });
      console.log(response);
    } catch (error) {}
    // dispatch(registerCustomer(body));
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <SignUpBanner />
        </div>
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
            <label htmlFor="text">Username</label>
            <input type="text" id="text" name="text" />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input
              type={inputType}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {inputType === "text" ? (
              <EyeOff onClick={() => setInputType("password")} />
            ) : (
              <EyeOn onClick={() => setInputType("text")} />
            )}
          </div>
          <div className="df aic asst fw">
            <p>
              By continuing, you agree to Zozo{" "}
              <Link href="/">conditions of use</Link> and{" "}
              <Link href="/">Privacy notice.</Link>
            </p>
          </div>
          <Button
            name="Sign up"
            width="100%"
            paddingY="10px"
            isBoxShadow={true}
          />

          <p>
            Already have an account?
            <Link href="/login"> Login!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

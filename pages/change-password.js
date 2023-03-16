import { useState, useEffect } from "react";
import { EyeOn, EyeOff } from "../public/svg/icons";
import {
  AccountVerificationBanner,
  ForgotPasswordBanner,
} from "../public/svg/images";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { motion } from "framer-motion";
import Router from "next/router";
import Logo from "../components/logo";
import useWindowDimension from "../hooks/useWindowDimension";
import Link from "next/link";
import Button from "../components/ui/button/";
import styles from "../styles/change-password.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <ChangePassword />
      {/* <Success /> */}
    </div>
  );
}

function ChangePassword() {
  const { width } = useWindowDimension();
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.main}>
      <div>
        {width > 780 && <Logo />}
        <AccountVerificationBanner />
      </div>
      <form onSubmit={handleSubmit}>
        {width <= 780 && <Logo variant="purple" />}
        <h1>Change Password</h1>
        <p>Input your desired password below to create a new password</p>
        <div className={styles["form-group"]}>
          <label htmlFor="password">New password</label>
          <input type={inputType1} id="password" name="password" />
          {inputType1 === "text" ? (
            <EyeOff onClick={() => setInputType1("password")} />
          ) : (
            <EyeOn onClick={() => setInputType1("text")} />
          )}
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Confirm password</label>
          <input type={inputType2} id="password" name="password" />
          {inputType2 === "text" ? (
            <EyeOff onClick={() => setInputType2("password")} />
          ) : (
            <EyeOn onClick={() => setInputType2("text")} />
          )}
        </div>
        <Button>Submit</Button>
        <span>
          Do you need help? <Link href="/">Contact Support</Link>
        </span>
      </form>
    </div>
  );
}

function Success() {
  const { width } = useWindowDimension();
  useEffect(() => {
    const interval = setInterval(() => {
      Router.push("/");
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.main}>
      <div>
        {width > 780 && <Logo />}
        <ForgotPasswordBanner
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <div
        style={{
          backgroundColor: "var(--bg-primary)",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginBottom: "2.4rem" }}>Success</h1>
        <p style={{ fontSize: "2rem", marginBottom: "2.4rem" }}>
          You have successfully changed your password{" "}
        </p>
        <CountdownCircleTimer
          isPlaying
          size={55}
          strokeWidth={2}
          duration={5}
          colors="#743b96"
        >
          {({ remainingTime }) => `${remainingTime}s`}
        </CountdownCircleTimer>
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20rem",
              height: "6rem",
              fontSize: "2rem",
              color: "var(--text-white)",
              backgroundColor: "var(--accent-color)",
              borderRadius: ".5rem",
              marginTop: "4rem",
            }}
          >
            Done
          </a>
        </Link>
      </div>
    </div>
  );
}

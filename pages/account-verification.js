import { AccountVerificationBanner } from "../public/svg/images";
import { WarningIcon } from "../public/svg/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../components/ui/button/button";
import styles from "../styles/account-verification.module.scss";

export default function index() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <AccountVerificationBanner />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Account Verification</h1>
          <div className={styles["form-group"]}>
            <label htmlFor="number">Verification Code</label>
            <ErrorMessage />
            <input type="number" id="number" name="number" />
            <span>Enter your verification code of your email address</span>
          </div>
          <Button>Submit</Button>
          <span>
            Didn&apos;t receive the verification code?{" "}
            <Link href="/">Resend again</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

function ErrorMessage() {
  return (
    <motion.div
      style={{
        position: "absolute",
        right: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "var(--bg-white)",
        height: "4rem",
        width: "22rem",
        boxShadow: "var(--box-shadow)",
        borderRadius: ".5rem",
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <WarningIcon />
      <p
        style={{
          textTransform: "uppercase",
          fontSize: "1.2rem",
          color: "#F90C0C",
        }}
      >
        wrong verification code{" "}
      </p>
    </motion.div>
  );
}

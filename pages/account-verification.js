import { useState } from "react";
import { AccountVerificationBanner } from "../public/svg/images";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { WarningIcon } from "../public/svg/icons";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { verifyAccount } from "../services/customer";
import Logo from "../components/logo";
import useWindowDimension from "../hooks/useWindowDimension";
import Button from "../components/ui/button/button";
import styles from "../styles/account-verification.module.scss";

export default function Index() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth.customer);
  const [code, setCode] = useState("");
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const { width } = useWindowDimension();
  function handleSubmit(e) {
    e.preventDefault();
  }

  function resendCode() {
    if (!user) {
      toast.warn("You are not logged in!");
      return;
    }
    verifyAccount({ account_email: user.email }).then((response) => {
      toast.success("Verification link sent");
      // console.log(response)
    });
  }

  if (user?.verified) {
    // router.push("/");
    // return
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          {width > 780 && <Logo />}
          <AccountVerificationBanner />
        </div>
        <form onSubmit={handleSubmit}>
          {width <= 780 && <Logo variant="purple" />}
          <h1>Account Verification</h1>
          <div className={styles["form-group"]}>
            <label htmlFor="number">Verification Code</label>
            {alert && <ErrorMessage />}
            <input
              type="number"
              id="number"
              name="number"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setAlert(false);
              }}
            />
            <span>Enter your verification code of your email address</span>
          </div>
          <Button>Submit</Button>
          <span>
            Didn&apos;t receive the verification code?{" "}
            <span onClick={resendCode}>Resend code</span>
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

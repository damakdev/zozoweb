import { useState } from "react";
import { forgotPassword, resetPassword } from "../services/customer";
import { ForgotPasswordBanner } from "../public/svg/images";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import useWindowDimension from "../hooks/useWindowDimension";
import Link from "next/link";
import Logo from "../components/logo";
import Button from "../components/ui/button/";
import styles from "../styles/forgot-password.module.scss";

export default function Index() {
  const { width } = useWindowDimension();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState();
  const [resetPassword, setResetPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleRequest(e) {
    e.preventDefault();
    setLoading(true);
    if (!resetPassword) handleForgotPassword();
    if (resetPassword) handleResetPassword();
  }

  function handleForgotPassword() {
    forgotPassword({
      account_email: email,
    })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        setLoading(false);
        setEmail("");
        setResetPassword(true);
      })
      .catch(() => setLoading(false));
  }

  function handleResetPassword() {
    resetPassword({ account_code: code, new_password: password })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch(() => setLoading(false));
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
          {!resetPassword && (
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
          {resetPassword && (
            <div className={styles["form-group"]}>
              <label htmlFor="code">Code</label>
              <input
                type="number"
                id="code"
                name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
              <label className="mt-7" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          )}
          <Button>
            {loading ? (
              <ClipLoader color="#ffffff" size={15} />
            ) : resetPassword ? (
              "Continue"
            ) : (
              "Request Password Change"
            )}
          </Button>
          <span>
            Do you need help? <Link href="/">Contact Support</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

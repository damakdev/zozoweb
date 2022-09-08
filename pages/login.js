import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { object, string } from "yup";
import { _loginCustomer } from "../store/slices/authSlice";
import { ClipLoader } from "react-spinners";
import { EyeOn, EyeOff, GoogleIcon } from "../public/svg/icons";
import { LoginBanner } from "../public/svg/images";
import useWindowDimension from "../hooks/useWindowDimension";
import Logo from "../components/logo";
import Button from "../components/ui/button/";
import Link from "next/link";
import styles from "../styles/login.module.scss";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { width } = useWindowDimension();
  const { loading } = useSelector((state) => state.auth.customer);
  const { token } = useSelector((state) => state.auth.customer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const schema = object().shape({
    email: string().email().required(),
    password: string().min(8).required(),
  });

  async function loginHandler(e) {
    e.preventDefault();
    schema
      .isValid({ email, password }, { abortEarly: false })
      .then((response) => {
        if (response) {
          dispatch(_loginCustomer({ email, password }));
          return;
        }
        schema
          .validate({ email, password }, { abortEarly: false })
          .catch((error) => {
            const errors = error.inner.reduce((acc, error) => {
              return {
                ...acc,
                [error.path]: true,
              };
            }, {});
            setErrors(errors);
          });
      });

    return;
  }
  if (token) {
    router.push("/");
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          {width > 780 && <Logo />}
          <LoginBanner />
        </div>
        <form onSubmit={loginHandler}>
          {width <= 780 && <Logo variant="purple" />}
          <h1>Welcome Back</h1>
          <Link href="/">
            <a className={styles["google-auth"]}>
              <GoogleIcon />
              Continue with Google
            </a>
          </Link>
          <span>OR</span>
          <fieldset className={styles["form-group"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  email: false,
                });
                setEmail(e.target.value);
              }}
              required
            />
            <AnimatePresence>
              {errors.email && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Email must be a valid email
                </motion.span>
              )}
            </AnimatePresence>
          </fieldset>
          <fieldset className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input
              type={inputType}
              id="password"
              name="password"
              value={[password]}
              onChange={(e) => {
                setErrors({
                  ...errors,
                  password: false,
                });
                setPassword(e.target.value);
              }}
              required
            />
            {inputType === "text" ? (
              <EyeOff onClick={() => setInputType("password")} />
            ) : (
              <EyeOn onClick={() => setInputType("text")} />
            )}
            <AnimatePresence>
              {errors.password && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Password must be at least 8 characters
                </motion.span>
              )}
            </AnimatePresence>
          </fieldset>
          <div className="flex items-center w-full">
            <div className="flex items-center">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </div>
            <Link href="/forgot-password">
              <a className={styles["forgot-password"]}>Forgot password?</a>
            </Link>
          </div>
          <Button>
            {loading ? <ClipLoader color="#ffffff" size={15} /> : "Log In"}
          </Button>

          <p>
            Don&apos;t have an account?
            <Link href="/signup"> Sign up here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

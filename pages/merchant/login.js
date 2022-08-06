import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { _loginMerchant } from "../../store/slices/authSlice";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import { ClipLoader } from "react-spinners";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/button";
import styles from "../../styles/merchant/signup.module.scss";

export default function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth.merchant);
  const { token } = useSelector((state) => state.auth.merchant);
  const [checked, setChecked] = useState(false);
  const [inputType1, setInputType1] = useState("password");

  function loginHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData); // convert the FormData object to a JSON object

    console.log(body);
    dispatch(_loginMerchant(body));
  }

  if (token) router.push("/merchant/dashboard");

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
                onChange={() => setChecked((prevState) => !prevState)}
              />
              <span className="ml-1 text-base  "> Remember me {checked}</span>
            </label>
          </div>
          <div>
            <Link href="/merchant/forgot-password"> Forgot Password</Link>
          </div>
        </div>

        <Button>
          {loading ? <ClipLoader color="#ffffff" size={15} /> : "Log In"}
        </Button>

        <p>
          Don't have an account?
          <Link href="/merchant/signup"> Signup for free!</Link>
        </p>
      </form>
      <div></div>
    </section>
  );
}

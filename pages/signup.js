import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { EyeOn, EyeOff, GoogleIcon, LeftArrow } from "../public/svg/icons";
import { SignUpBanner } from "../public/svg/images";
import { _registerCustomer } from "../store/slices/authSlice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import useWindowDimension from "../hooks/useWindowDimension";
import Logo from "../components/logo";
import Link from "next/link";
import Button from "../components/ui/button/";
import styles from "../styles/signup.module.scss";

export default function Index() {
  const dispatch = useDispatch();
  const { width } = useWindowDimension();
  const { loading } = useSelector((state) => state.auth.customer);
  const { token } = useSelector((state) => state.auth.customer);
  const { user } = useSelector((state) => state.auth.customer);
  const router = useRouter();
  const [next, setNext] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    state: "",
    city: "",
    street: "",
    zipCode: "",
  });

  function updateSignupForm(e) {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  }

  function signupHandler(e) {
    e.preventDefault();
    const body = {
      first_name: signupForm.firstName,
      last_name: signupForm.lastName,
      email: signupForm.email,
      password: signupForm.password,
      phone_number: signupForm.phoneNumber,
      address: {
        country: "nigeria",
        state: signupForm.state,
        street: signupForm.street,
        city: signupForm.city,
        zip_code: signupForm.zipCode,
      },
      account_type: "customer",
    };
    dispatch(_registerCustomer(body));
  }

  useEffect(() => {
    if (user) {
      toast.success("Registration Successful");
      router.push("/");
    }
  }, [user, router]);

  if (token) router.push("/");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          {width > 780 && <Logo />}
          <SignUpBanner />
        </div>
        <form onSubmit={signupHandler}>
          {width <= 780 && <Logo variant="purple" />}
          <h1>Create Account</h1>
          <Link href="/">
            <a className={styles["google-auth"]}>
              <GoogleIcon />
              Continue with Google
            </a>
          </Link>
          <span>OR</span>
          {!next && (
            <>
              <div className={styles["form-group"]}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => updateSignupForm(e)}
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="password">Password</label>
                <input
                  type={inputType}
                  id="password"
                  name="password"
                  onChange={(e) => updateSignupForm(e)}
                />
                {inputType === "text" ? (
                  <EyeOff onClick={() => setInputType("password")} />
                ) : (
                  <EyeOn onClick={() => setInputType("text")} />
                )}
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={(e) => updateSignupForm(e)}
                />
              </div>
              <Button onClick={() => setNext(true)} type="button">
                Continue
              </Button>
            </>
          )}

          {next && (
            <>
              <div onClick={() => setNext(false)} className={styles["go-back"]}>
                <LeftArrow />
              </div>
              <div className="grid grid-cols-2 w-full gap-x-8">
                <div className={styles["form-group"]}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    onChange={(e) => updateSignupForm(e)}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    onChange={(e) => updateSignupForm(e)}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    onChange={(e) => updateSignupForm(e)}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    onChange={(e) => updateSignupForm(e)}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="street">Address</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    onChange={(e) => updateSignupForm(e)}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="number"
                    id="zipCode"
                    name="zipCode"
                    onChange={(e) => updateSignupForm(e)}
                  />
                </div>
              </div>
              <div className="text-center">
                <p>
                  By signing up you hereby agree to operate on one account and
                  agree to the terms and conditions.
                  {/* <Link href="/">conditions of use</Link> and{" "}
                  <Link href="/">Privacy notice.</Link> */}
                </p>
              </div>
              <Button>
                {loading ? (
                  <ClipLoader color="#ffffff" size={15} />
                ) : (
                  "Continue"
                )}
              </Button>
            </>
          )}

          {!next && (
            <p>
              Zozo is restricted to one account per person,{" "}
              <Link href="/login">Login!</Link> if you already have an account.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

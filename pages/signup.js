import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { object, string, number } from "yup";
import { toast } from "react-toastify";
import { _registerCustomer } from "../store/slices/authSlice";
import { ClipLoader } from "react-spinners";
import { EyeOn, EyeOff, GoogleIcon, LeftArrow } from "../public/svg/icons";
import { SignUpBanner } from "../public/svg/images";
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
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    state: "",
    city: "",
    street: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
    state: false,
    city: false,
    street: false,
    zipCode: false,
  });
  const schema1 = object().shape({
    email: string().email().required(),
    phoneNumber: number().required(),
    password: string().min(8).required(),
  });
  const schema2 = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    state: string().required(),
    city: string().required(),
    street: string().required(),
    zipCode: number().required(),
  });

  function updateSignupForm(e) {
    const { name, value } = e.target;
    setErrors({
      ...errors,
      [name]: false,
    });
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  }

  function _continue() {
    const body = {
      email: signupForm.email,
      phoneNumber: signupForm.phoneNumber,
      password: signupForm.password,
    };
    if (signupForm.password !== signupForm.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    schema1.isValid(body, { abortEarly: false }).then((response) => {
      if (response) {
        setNext(true);
        return;
      }
      schema1.validate(body, { abortEarly: false }).catch((error) => {
        const errors = error.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: true,
          };
        }, {});
        setErrors(errors);
      });
    });
  }

  function signupHandler(e) {
    e.preventDefault();
    const body = {
      firstName: signupForm.firstName,
      lastName: signupForm.lastName,
      state: signupForm.state,
      street: signupForm.street,
      city: signupForm.city,
      zipCode: signupForm.zipCode,
    };

    schema2.isValid(body, { abortEarly: false }).then((response) => {
      if (response) {
        const payload = {
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
        dispatch(_registerCustomer(payload));
        return;
      }
      schema2.validate(body, { abortEarly: false }).catch((error) => {
        const errors = error.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: true,
          };
        }, {});
        setErrors(errors);
      });
    });
  }

  useEffect(() => {
    if (user) {
      toast.success("Registration Successful");
      router.push("/login");
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
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                <fieldset className={styles["form-group"]}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={signupForm.email}
                    onChange={updateSignupForm}
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
                <div className="grid grid-cols-2 w-full gap-x-8">
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="password">Password</label>
                    <input
                      type={inputType1}
                      id="password"
                      name="password"
                      value={signupForm.password}
                      onChange={updateSignupForm}
                      required
                    />
                    {inputType1 === "text" ? (
                      <EyeOff onClick={() => setInputType1("password")} />
                    ) : (
                      <EyeOn onClick={() => setInputType1("text")} />
                    )}
                    <AnimatePresence>
                      {errors.password && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Must be at least 8 characters
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </fieldset>
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type={inputType2}
                      id="password"
                      name="confirmPassword"
                      value={signupForm.confirmPassword}
                      onChange={updateSignupForm}
                      required
                    />
                    {inputType2 === "text" ? (
                      <EyeOff onClick={() => setInputType2("password")} />
                    ) : (
                      <EyeOn onClick={() => setInputType2("text")} />
                    )}
                  </fieldset>
                </div>

                <fieldset className={styles["form-group"]}>
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={signupForm.phoneNumber}
                    onChange={updateSignupForm}
                    required
                  />
                  <AnimatePresence>
                    {errors.phoneNumber && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Required!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </fieldset>
                <Button onClick={_continue} type="button">
                  Continue
                </Button>
              </motion.div>
            </AnimatePresence>
          )}

          {next && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  onClick={() => setNext(false)}
                  className={styles["go-back"]}
                >
                  <LeftArrow />
                </div>
                <div className="grid grid-cols-2 w-full gap-x-8">
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={signupForm.firstName}
                      onChange={updateSignupForm}
                      required
                    />
                  </fieldset>
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="LastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={signupForm.lastName}
                      onChange={updateSignupForm}
                      required
                    />
                  </fieldset>
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={signupForm.state}
                      onChange={updateSignupForm}
                      required
                    />
                  </fieldset>
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={signupForm.city}
                      onChange={updateSignupForm}
                      required
                    />
                  </fieldset>
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="street">Address</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      value={signupForm.street}
                      onChange={updateSignupForm}
                      required
                    />
                  </fieldset>
                  <fieldset className={styles["form-group"]}>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="number"
                      id="zipCode"
                      name="zipCode"
                      value={signupForm.zipCode}
                      onChange={updateSignupForm}
                      required
                    />
                  </fieldset>
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
                    "Sign Up"
                  )}
                </Button>
              </motion.div>
            </AnimatePresence>
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

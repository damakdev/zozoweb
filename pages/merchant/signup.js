import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { EyeOn, EyeOff, GoogleIcon, LeftArrow } from "../../public/svg/icons";
import { _registerMerchant } from "../../store/slices/authSlice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/signup.module.scss";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.auth.merchant);
  const { user } = useSelector((state) => state.auth.merchant);
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

  function updateSignupForm(e) {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  }

  function signupHandler(e) {
    e.preventDefault();
    const { password, confirmPassword } = signupForm;
    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }
    console.log(signupForm);
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
      account_type: "merchant",
    };
    dispatch(_registerMerchant(body));
  }

  useEffect(() => {
    if (user) {
      toast.success("Registration Successful");
      router.push("/merchant/dashboard");
    }
  }, [user, router]);

  return (
    <section className={styles.container}>
      <Logo variant="purple" />
      <form onSubmit={signupHandler}>
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
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={signupForm.email}
                onChange={updateSignupForm}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={signupForm.phoneNumber}
                onChange={updateSignupForm}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <input
                type={inputType1}
                id="password"
                name="password"
                placeholder="Password"
                value={signupForm.password}
                onChange={updateSignupForm}
                required
              />
              {inputType1 === "text" ? (
                <EyeOff onClick={() => setInputType1("password")} />
              ) : (
                <EyeOn onClick={() => setInputType1("text")} />
              )}
            </div>

            <div className={styles["form-group"]}>
              <input
                type={inputType2}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signupForm.confirmPassword}
                onChange={updateSignupForm}
                required
              />
              {inputType2 === "text" ? (
                <EyeOff onClick={() => setInputType2("password")} />
              ) : (
                <EyeOn onClick={() => setInputType2("text")} />
              )}
            </div>

            <Button onClick={() => setNext(true)} type="button">
              Continue
            </Button>
          </>
        )}

        {next && (
          <>
            <p
              className="absolute text-xl ml-4 -translate-y-48 left-24 cursor-pointer"
              onClick={() => setNext(false)}
            >
              Go back
            </p>
            <div className="grid grid-cols-2 w-full gap-x-8">
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  onChange={updateSignupForm}
                />
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={updateSignupForm}
                />
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  onChange={updateSignupForm}
                />
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  onChange={updateSignupForm}
                />
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  onChange={updateSignupForm}
                />
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="number"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  onChange={updateSignupForm}
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <p>
                By continuing, you agree to Zozo{" "}
                <Link href="/">conditions of use</Link> and{" "}
                <Link href="/">Privacy notice.</Link>
              </p>
            </div>
            <Button>
              {loading ? <ClipLoader color="#ffffff" size={15} /> : "Continue"}
            </Button>
          </>
        )}

        <p>
          Already have an account?
          <Link href="/merchant/login"> Login!</Link>
        </p>
      </form>
      <div></div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { EyeOn, EyeOff, GoogleIcon, LeftArrow } from "../../public/svg/icons";
import { motion, AnimatePresence } from "framer-motion";
import { object, string, number } from "yup";
import { checkEmail, upgradeToMerchant } from "../../services/customer";
import { _registerMerchant } from "../../store/slices/authSlice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import Modal from "../../components/modal";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/signup.module.scss";

export default function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.auth.merchant);
  const { user } = useSelector((state) => state.auth.merchant);
  const { customer } = useSelector((state) => state.auth);
  const [next, setNext] = useState(false);
  const [_loading, setLoading] = useState(false);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    email: customer?.user?.email || "",
    phoneNumber: customer?.user?.phone_number || "",
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
        setLoading(true);
        fetch(`http://bilikie.com/api/v1/check/${signupForm.email}`)
          .then((response) => response.json())
          .then((data) => {
            setLoading(false);
            console.log(data);
            if (data.status === "failed") {
              setModalDisplay(true);
            }
            if (data.status === "success") {
              setNext(true);
            }
          })
          .catch(() => toast.error("An error occurred"));
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

    // checkEmail(signupForm.email);
  }

  function _upgradeToMerchant() {
    if (!customer.user) {
      toast.warning("You are not logged in!");
      return;
    }
    setLoading(true);
    upgradeToMerchant({
      account_id: customer.user.customer.account_id.toString(),
    })
      .then((response) => {
        console.log(response);
        setLoading(false);
        toast.success("Upgrade successful, login with your customer account");
        router.push("/merchant/login");
      })
      .catch(() => setLoading(false));
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
    <>
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
              <fieldset className={styles["form-group"]}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
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

              <fieldset className={styles["form-group"]}>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
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

              <fieldset className={styles["form-group"]}>
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
                {/* <AnimatePresence>
                  {errors.confirmPassword && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Email must be a valid email
                    </motion.span>
                  )}
                </AnimatePresence> */}
              </fieldset>

              <Button onClick={_continue} type="button">
                {_loading ? (
                  <ClipLoader color="#ffffff" size={15} />
                ) : (
                  "Continue"
                )}
              </Button>
            </>
          )}

          {next && (
            <>
              {/* <p
              className="absolute text-xl ml-4 -translate-y-48 left-24 cursor-pointer"
              onClick={() => setNext(false)}
            >
              Go back
            </p> */}
              <div onClick={() => setNext(false)} className={styles["go-back"]}>
                <LeftArrow />
              </div>
              <div className="grid grid-cols-2 w-full gap-x-8">
                <fieldset className={styles["form-group"]}>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={updateSignupForm}
                  />
                </fieldset>
                <fieldset className={styles["form-group"]}>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={updateSignupForm}
                  />
                </fieldset>
                <fieldset className={styles["form-group"]}>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={updateSignupForm}
                  />
                </fieldset>
                <fieldset className={styles["form-group"]}>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={updateSignupForm}
                  />
                </fieldset>
                <fieldset className={styles["form-group"]}>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Street"
                    onChange={updateSignupForm}
                  />
                </fieldset>
                <fieldset className={styles["form-group"]}>
                  <input
                    type="number"
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zip Code"
                    onChange={updateSignupForm}
                  />
                </fieldset>
              </div>
              <div className="text-center mt-8">
                <p>
                  By continuing, you agree to Zozo{" "}
                  <Link href="/">conditions of use</Link> and{" "}
                  <Link href="/">Privacy notice.</Link>
                </p>
              </div>
              <Button>
                {loading ? <ClipLoader color="#ffffff" size={15} /> : "Sign up"}
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

      <Modal
        display={modalDisplay}
        close={() => setModalDisplay(false)}
        width="30rem"
      >
        <div className={styles.modal}>
          <h3>
            This account exists as a customer.
            <br />
            Do you want to upgrade to a merchant account?
          </h3>
          <p>This requires you to be logged in on the customer account</p>
          <div>
            <Button onClick={_upgradeToMerchant}>
              {_loading ? <ClipLoader color="#ffffff" size={15} /> : "Yes"}
            </Button>
            <Button
              style={{ backgroundColor: "#EB5757" }}
              onClick={() => {
                setModalDisplay(false);
                toast.info("Sign up with a different email address");
              }}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

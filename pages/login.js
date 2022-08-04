import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer } from "../store/slices/authSlice";
import { ClipLoader } from "react-spinners";
import { EyeOn, EyeOff, GoogleIcon } from "../public/svg/icons";
import { LoginBanner } from "../public/svg/images";
import Button from "../components/ui/button/";
import Link from "next/link";
import styles from "../styles/login.module.scss";

export default function Index() {
	const dispatch = useDispatch();
	const { loading} = useSelector((state) => state.auth.customer);
	const { token } = useSelector((state) => state.auth.customer);
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [inputType, setInputType] = useState("password");

	async function loginHandler(e) {
		e.preventDefault();
		dispatch(loginCustomer({ email, password }));
	}
	if (token) router.push("/");

	return (
		<div className={styles.container}>
			<div className={styles.main}>
				<div>
					<LoginBanner />
				</div>
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
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles["form-group"]}>
						<label htmlFor="password">Password</label>
						<input
							type={inputType}
							id="password"
							name="password"
							value={[password]}
							onChange={(e) => setPassword(e.target.value)}
						/>
						{inputType === "text" ? (
							<EyeOff onClick={() => setInputType("password")} />
						) : (
							<EyeOn onClick={() => setInputType("text")} />
						)}
					</div>
					<div className="df aic asst fw">
						<div className="df aic">
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
						<Link href="/signup"> Sign up for free!</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

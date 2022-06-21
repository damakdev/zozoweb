import { useState } from "react";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import { SignUpBanner } from "../../public/svg/images";
import AdBanner from "../ui/ad-banner/ad-banner";
import Link from "next/link";
import dynamic from "next/dynamic"
import Button from "../ui/button/button";
import styles from "./signup.module.scss";
// import Button from "../ui/Button";

export default function SignUp() {
	const [inputType, setInputType] = useState("password");

  const Button = dynamic(
    () => import('../ui/Button'),
    { ssr: false }
)

	function signupHandler(e) {
		e.preventDefault();
	}

	return (
		<div className={styles.container}>
			<AdBanner />
			<div className={styles.main}>
				<div>
					<SignUpBanner />
				</div>
				<form onSubmit={signupHandler}>
					<h1>Create Account</h1>
					<Link href="/">
						<a className={styles["google-auth"]}>
							<GoogleIcon />
							Continue with Google
						</a>
					</Link>
					<span>OR</span>
					<div className={styles["form-group"]}>
						<label htmlFor="text">Username</label>
						<input type="text" id="text" name="text" />
					</div>
					<div className={styles["form-group"]}>
						<label htmlFor="email">Email Address</label>
						<input type="email" id="email" name="email" />
					</div>
					<div className={styles["form-group"]}>
						<label htmlFor="password">Password</label>
						<input type={inputType} id="password" name="password" />
						{inputType === "text" ? (
							<EyeOff onClick={() => setInputType("password")} />
						) : (
							<EyeOn onClick={() => setInputType("text")} />
						)}
					</div>
					<div className="df aic asst fw">
						<p>
							By continuing, you agree to Zozo{" "}
							<Link href="/">conditions of use</Link> and{" "}
							<Link href="/">Privacy notice.</Link>
						</p>
					</div>
					<Button
						name="Sign up"
						width="100%"
						paddingY="10px"
						isBoxShadow={true}
					/>

					<p>
						Already have an account?
						<Link href="/login"> Login!</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

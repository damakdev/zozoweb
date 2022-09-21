import { useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { EyeOn, EyeOff, GoogleIcon } from "../../public/svg/icons";
import Link from "next/link";
import Logo from "../../components/logo";
import Button from "../../components/ui/button/button";
import styles from "../../styles/merchant/signup.module.scss";
import { loginAdmin } from "../../store/slices/authSlice";
import { ClipLoader } from "react-spinners";

export default function Index() {
	const [checked, setChecked] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [inputType1, setInputType1] = useState("password");
	const [inputType2, setInputType2] = useState("password");
	const router = useRouter();

	const dispatch = useDispatch();
	const { loading, token } = useSelector((state) => state.auth.admin);

	async function loginHandler(e) {
		e.preventDefault();
		dispatch(loginAdmin({ email, password }));
	}

	if (token) router.push("/admin/dashboard");
	const handleChange = () => {
		setChecked(!checked);
	};
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className={styles["form-group"]}>
					<input
						type={inputType1}
						id="password"
						name="password"
						placeholder="Password"
						value={[password]}
						onChange={(e) => setPassword(e.target.value)}
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
								onChange={handleChange}
							/>
							<span className="ml-1 text-base  "> Remember me {checked}</span>
						</label>
					</div>
					<div>
						<Link href="/merchant/forgot-password"> Forgot Password</Link>
					</div>
				</div>

				<Button onClick={loginHandler}>
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

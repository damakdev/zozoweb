import { colors } from "../ui/colors";
import Link from "next/link";
import { Linkedin } from "../../public/svg/icons";
import Image from "next/image";
import logo from "../../assets/white-logo.png";
import headphone from "../../assets/headphone.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import Button from "../ui/Button";
import styles from "../../styles/Footer.module.scss";

function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.first_section}>
				<div
					className={`lg:flex lg:justify-between lg:py-7 lg:align-center w-11/12 mx-auto hidden lg:block `}
				>
					<div className="my-auto">
						<Image src={logo} alt="Logo" />
					</div>
					<div className="flex align-center">
						<Image src={headphone} alt="contact" />

						<div className=" ml-10">
							<h4 className="font-bold text-2xl">
								WE OFFER 24\7 CUSTOMER SUPPORT
							</h4>
							<p className="w-3/4 pt-3">
								Send us a message and we will get back to you as soon as
								possible
							</p>
						</div>
						<div className="mt-6 font-semibold">
							<Link href="/contact">
								<Button
									bgColor={colors.secondaryButtonBg}
									paddingX="14px"
									fontSize="12px"
									paddingY="7px"
									color={colors.accentColor}
									name="CONTACT US"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.second_section}>
				<div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-between py-10 align-center w-11/12 mx-auto">
					<div className="my-3 md:my-1 lg:my-1">
						<ul>
							<li className="font-semibold pb-4 text-3xl tracking-wider">
								Help
							</li>

							<Link href="/how-to-bid">
								<li>
									<a>FAQs </a>
								</li>
							</Link>
							<Link href="/how-to-bid">
								<li>
									<a>How Zozo Works </a>
								</li>
							</Link>
						</ul>
					</div>

					<div className="my-7 md:my-1 lg:my-1">
						<ul className=" border-l border-slate-200 pl-4">
							<li className="font-semibold pb-4 text-3xl tracking-wider">
								Information{" "}
							</li>

							<Link href="/terms">
								<li>
									<a>Terms of Use </a>
								</li>
							</Link>
							<Link href="/privacy">
								<li>
									<a>Privacy Policy </a>
								</li>
							</Link>
						</ul>
					</div>

					<div className="my-7 md:my-1 lg:my-1">
						<ul className=" border-l border-slate-200 pl-4">
							<li className="font-semibold pb-4 text-3xl tracking-wider">
								About Us
							</li>

							<Link href="/about">
								<li>
									<a>About Zozo </a>
								</li>
							</Link>

							<Link href="/contact">
								<li>
									<a>Contact Us</a>
								</li>
							</Link>
						</ul>
					</div>

					<div className="my-7 md:my-1 lg:my-1">
						<p className="mb-4">
							{`Nigeria's leading online penny auction platform for high quality
							products and offerings to help you afford your best life.`}
						</p>
						<div className="mb-4">
							<Link href="/signup">
								<a>
									<Button
										bgColor="white"
										name="Sign up"
										color="black"
										width="100%"
										paddingY="4px"
									/>
								</a>
							</Link>
						</div>
						<Link href="/login">
							<a>
								<Button
									bgColor="rgba(255, 255, 255, 0.3)"
									name="Login"
									color="white"
									width="100%"
									paddingY="4px"
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>

			<div
				className={`${styles.third_section} border-t-2 py-10 border-slate-100`}
			>
				<div className="flex  justify-around py-6 align-center w-3/4 lg:w-1/4 md:w-1/4 mx-auto">
					<div className={`${styles.img_cover} mx-4`}>
						<Linkedin />
					</div>
					<div className={`${styles.img_cover} mx-4`}>
						<Image src={facebook} alt="facebook" width={20} />
					</div>
					<div className={`${styles.img_cover} mx-4 l`}>
						<Image src={twitter} alt="twitter" width={20} />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

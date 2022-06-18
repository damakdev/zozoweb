import React from "react";
import Image from "next/image";
import logo from "../../assets/white-logo.svg";
import headphone from "../../assets/headphone.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import Button from "../ui/Button";
import styles from "../../styles/Footer.module.scss";
import { colors } from "../ui/colors";
import Link from "next/link";

function Footer() {
	return (
		<>
			<div className={styles.first_section}>
				<div
					className={`flex justify-between py-7 align-center w-11/12 mx-auto `}
				>
					<Image src={logo} alt="Logo" width={120} />
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
							<Button
								bgColor={colors.secondaryButtonBg}
								paddingX="14px"
								fontSize="12px"
								paddingY="7px"
								color={colors.accentColor}
								name="CONTACT US"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.second_section}>
				<div className="flex justify-between py-10 align-center w-11/12 mx-auto">
					<div>
						<ul>
							<li className="font-semibold pb-4 text-3xl tracking-wider">
								Help
							</li>

							<Link href="/">
								<li>
									<a>FAQs </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>How Zozo Works </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Tips & Features</a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Zozo Auctions </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Order & shiping </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Payments </a>
								</li>
							</Link>
						</ul>
					</div>

					<div>
						<ul className=" border-l border-slate-200 pl-4">
							<li className="font-semibold pb-4 text-3xl tracking-wider">
								Information{" "}
							</li>

							<Link href="/">
								<li>
									<a>Terms of Use </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Privacy Policy </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Sitemap</a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Partnership </a>
								</li>
							</Link>
						</ul>
					</div>

					<div>
						<ul className=" border-l border-slate-200 pl-4">
							<li className="font-semibold pb-4 text-3xl tracking-wider">
								About Us
							</li>

							<Link href="/">
								<li>
									<a>About Zozo </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Zozo Blog </a>
								</li>
							</Link>
							<Link href="/">
								<li>
									<a>Contact Us</a>
								</li>
							</Link>
						</ul>
					</div>

					<div className="w-3/12">
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



			<div className={`${styles.third_section} border-t-2 py-10 border-slate-100`}>
				<div className="flex justify-around py-6 align-center w-1/4 mx-auto">
					<div className={styles.img_cover}>
						<Image src={linkedin} alt="linkedin" width={20} />
					</div>
					<div className={styles.img_cover}>
						<Image src={facebook} alt="facebook" width={20} />
					</div>
					<div className={styles.img_cover}>
						<Image src={twitter} alt="twitter" width={20} />
					</div>
				</div>

				<div className="flex justify-around py-6 align-center w-1/4 mx-auto">
					<Link href="/">
						<a>Terms</a>
					</Link>

					<Link href="/">
						<a>Privacy</a>
					</Link>

					<Link href="/">
						<a>Cookies</a>
					</Link>
				</div>
			</div>

		</>
	);
}

export default Footer;

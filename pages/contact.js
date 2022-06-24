import React from "react";
import Image from "next/image";
import logo from "../assets/white-logo.png";
import styles from "../styles/contact.module.scss";
import Link from "next/link";
import {
	Facebook,
	Linkedin,
	LocationIcon,
	MessageIcon,
	PhoneIcon,
	Twitter,
} from "../public/svg/icons";

function Contact() {
	return (
		<>
			<div className={`${styles.contact} pt-10 flex`}>
				<div className={`${styles.contact_info} w-1/2  pt-20`}>
					<div className="w-9/12 mx-auto">
						<Image src={logo} alt="Zozo Logo" />

						<div className="mt-20">
							<h3>Contact Information</h3>
							<p>
								Fill up the form and our team will get back to you within <br />{" "}
								24 hours.
							</p>

							<div className={styles.contact_details}>
								<span className="flex item-center">
									<PhoneIcon />
									<p>+234 903 809 0930</p>
								</span>

								<span className="flex item-center">
									<MessageIcon />
									<p>Zozo.ng@gmail.com</p>
								</span>

								<span className="flex item-center">
									<LocationIcon />
									<p>103 Street 779 lagos</p>
								</span>
							</div>

							<div className={`${styles.socials}  w-2/4 mx-auto`}>
								<div className="flex justify-around py-6 align-center ">
									<div className={styles.img_cover}>
										<Linkedin />
									</div>
									<div className={styles.img_cover}>
										<Facebook />
									</div>
									<div className={styles.img_cover}>
										<Twitter />
									</div>
								</div>

								<div className="flex justify-around py-6 align-center  ">
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
						</div>
					</div>
				</div>
				<div className={`${styles.contact_form} w-1/2`}></div>
			</div>
		</>
	);
}

export default Contact;

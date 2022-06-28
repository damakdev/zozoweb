import React from "react";
import Image from "next/image";
import logo from "../assets/white-logo.png";
import styles from "../styles/contact.module.scss";
import Link from "next/link";
import CustomerLayout from "./../components/CustomerLayout";
import {
	Facebook,
	Linkedin,
	LocationIcon,
	MessageIcon,
	PhoneIcon,
	Twitter,
} from "../public/svg/icons";
import Button from "../components/ui/Button";

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
				<div className={`${styles.contact_form} w-7/11 pt-20 mx-auto`}>
					<h1>Contact us</h1>
					<p className="pt-10 font-semibold">
						Any questions or remarks? Just write us a message{" "}
					</p>

					<form className="pt-20">
						<div className="flex">
							<div className=" w-6/12">
								<div>
									<label>First name</label>
									<input type="text" />
								</div>

								<div className="pt-20">
									<label>Your Email</label>
									<input type="text" />
								</div>
							</div>

							<div className=" w-6/12 ml-10">
								<div>
									<label>Last name</label>
									<input type="text" />
								</div>

								<div className="pt-20">
									<label>Your Mobile number</label>
									<input type="text" />
								</div>
							</div>
						</div>
						<h3 className="pt-20">
							Choose your questions or remarks from this following category{" "}
						</h3>
						<div className="flex justify-between pt-10">
							<div className={styles.radio_item}>
								<input type="radio" id="ritema" name="ritem" value="ropt1" />
								<label htmlFor="ritema">How to bid</label>
							</div>

							<div className={styles.radio_item}>
								<input type="radio" id="ritemb" name="ritem" value="ropt2" />
								<label htmlFor="ritemb">How to become a merchant</label>
							</div>

							<div className={styles.radio_item}>
								<input type="radio" id="ritemc" name="ritem" value="ropt3" />
								<label htmlFor="ritemc">Issues with wins</label>
							</div>

							<div className={styles.radio_item}>
								<input type="radio" id="ritemd" name="ritem" value="ropt3" />
								<label htmlFor="ritemd">Others</label>
							</div>
						</div>

						<div className="mb-10 pt-10">
							<label>Message</label>
							<textarea></textarea>
						</div>
						<Button
							name="Submit"
							width="100%"
							isBoxShadow={true}
							paddingY="1rem"
						/>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;

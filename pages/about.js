import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import Image from "next/image";
import about1 from "./../assets/about1.svg";
import about2 from "./../assets/about2.png";
import about3 from "./../assets/about3.png";
import styles from "./../styles/About.module.scss";

function About() {
	return (
		<CustomerLayout>
			<div className={` ${styles.about_page} bg-white my-10 `}>
				<div className="flex justify-between w-11/12 mx-auto py-20 px-20">
					<div className={`  mt-20  `}>
						<h1 className="mb-20">About Us</h1>
						<p className="w-9/12 mb-20">
							Zozo a new business venture that will be driven by technology and
							has engaged the vendor to develop a bidding platform that is
							unique and can comply with international standards. Zozo a new
							business venture that will be driven by technology and has engaged
							the vendor to develop a bidding platform that is unique and can
							comply with international standards.
						</p>

						<div className={` ${styles.first_section} flex  mb-10  `}>
							<div className="mr-20 w-1/4 ">
								<Image src={about2} alt="about" height={350} />
							</div>
							<div className="mr-20 w-1/4 ">
								<Image src={about3} alt="about" height={350} />
							</div>
						</div>
					</div>
					<div className={styles.last_img}>
						<Image src={about1} alt="about" />
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default About;

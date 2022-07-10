import React from "react";
import styles from "../../../styles/merchant-profile.module.scss";

function About() {
	return (
		<div className={`${styles.profile_form} w-11/12 mx-auto`}>
			<h4> Contact Information</h4>

			<div className="flex items-center">
				<div className={styles.labels}>
					<p>Name:</p>
					<p>Phone number:</p>
					<p>Email: </p>
					<p>Defaut address:</p>
					<h4>Basic Information</h4>
					<p>Birthday:</p>
					<p>Gender:</p>
				</div>

				<div className={styles.details}>
					<p>Akinpelumi Lade </p>
					<p>0903747665155 </p>
					<p>AkinpelumiLade23@gmail.com </p>
					<p>5, trademark, mushin street lagos </p>
					<p></p>
					<p className="mt-9">May 15, 1995 </p>
					<p>Male</p>
				</div>
			</div>
		</div>
	);
}

export default About;

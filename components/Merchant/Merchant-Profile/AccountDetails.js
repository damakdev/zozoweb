import React from "react";
import styles from "../../../styles/merchant-profile.module.scss";

function AccountDetails() {
	return (
		<div className={`${styles.profile_form} w-11/12 mx-auto`}>
			<h4> Account Information</h4>

			<div className="flex items-center">
				<div className={styles.labels}>
					<p>Account name:</p>
					<p>Account number:</p>
					<p>Bank name: </p>
					<p>Bank email:</p>
					
				</div>

				<div className={styles.details}>
					<p>Akinpelumi Lade </p>
					<p>003747665155 </p>
                              <p>First bank </p>
					<p>AkinpelumiLade23@gmail.com </p>
					
				</div>
			</div>
		</div>
	);
}

export default AccountDetails;

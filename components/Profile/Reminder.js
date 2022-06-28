import React from "react";
import styles from "../../styles/Profile.module.scss";

function Reminder() {
	return (
		<div>
			<div className={styles.toggle_button_cover}>
				<input type="checkbox" id="switch" />
				<label htmlFor="switch"></label>
				<span className="ml-5">All reminder for won and ongoing bid </span>
			</div>

      <div className={styles.toggle_button_cover}>
				<input type="checkbox" id="switch1" />
				<label htmlFor="switch1"></label>
				<span className="ml-5">Reminder for top bid  </span>
			</div>

      <div className={styles.toggle_button_cover}>
				<input type="checkbox" id="switch2" />
				<label htmlFor="switch2"></label>
				<span className="ml-5">Reminder for recent bid   </span>
			</div>
		</div>
	);
}

export default Reminder;

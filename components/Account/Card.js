import React from "react";
import styles from "../../styles/account.module.scss";

import { BlueBlob, PurpleBlob } from "../../public/svg/icons";

function AccountCard({ image, title, para }) {
	return (
		<div className={`${styles.account_card} mt-5`}>
			<div className={styles.blob_left}>
				<PurpleBlob />
			</div>
			<div className={styles.blob_right}>
				<BlueBlob />
			</div>
			<div className="flex items-center px-6 justify-around ">
				<div className={styles.icon}>
					<img src={image.src} alt={title} width={40} height={40} />
					{/* <History /> */}
				</div>

				<div className=" w-7/12 mx-auto ">
					<h4>{title}</h4>
					<p>{para}</p>
				</div>
			</div>
		</div>
	);
}

export default AccountCard;

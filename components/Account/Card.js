import React from "react";
import styles from "../../styles/account.module.scss";
import Image from "next/image";
import { BlueBlob, PurpleBlob } from "../../public/svg/icons";

function AccountCard({ image, title, para }) {
	return (
		<div className={styles.account_card}>
			<PurpleBlob className={styles.blob_left} />
			<BlueBlob className={styles.blob_right} />
			<div className="flex items-center">
				<Image src={image} alt={title} width={20} height={20} />

				<div>
					<h4>{title}</h4>
					<p>{para}</p>
				</div>
			</div>
		</div>
	);
}

export default AccountCard;

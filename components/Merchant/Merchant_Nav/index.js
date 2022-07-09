import React from "react";
import Image from "next/image";
import styles from "../Merchant_Nav/merchant-nav.module.scss";
import { Bell } from "../../../public/svg/icons";

function MerchantNav({title}) {
	return (
		<div className={styles.nav}>
		<div className={styles.container}>
			<div>
				<h3>{title}</h3>
				<p>Updated on 6. 7 . 2022 </p>
			</div>

			<div className={`${styles.nav_details} flex   items-center`}>
				<div className="mr-6 p-4  border-l-2 border-gray-200">
					<Bell />
				</div>

				<Image
					src="/images/pic2.png"
					alt="profile picture"
					width={35}
					height={35}
				/>

				<div className=" ml-10 leading-normal">
					<p>Akinpelumi Akinlade</p>
					<p>@akinlade</p>
				</div>
			</div>
		</div>
		</div>
	);
}

export default MerchantNav;

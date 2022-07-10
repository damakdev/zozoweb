import React from "react";
import MerchantSideBar from "./merchant-sidebar/merchant-sidebar";
import styles from "../styles/merchant-profile.module.scss";

function MerchantLayout({ children }) {
	return (
		<>
			<MerchantSideBar />
		
			<div className={styles.children}>{children}</div>
		</>
	);
}

export default MerchantLayout;

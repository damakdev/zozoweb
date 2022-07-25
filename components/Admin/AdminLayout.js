import React from "react";
import AdminSidebar from "./Sidebar";

import styles from "../../styles/merchant-profile.module.scss";
import Navbar from "./Navbar";

function AdminLayout({ children }) {
	return (
		<div className={`bg-white`} style={{backgroundColor:"#E5E5E5"}}>
			<AdminSidebar />
			<Navbar />
			<div  className={styles.children}>{children}</div>
		</div>
	);
}

export default AdminLayout;

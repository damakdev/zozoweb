import React, { useState } from "react";
import AdminSidebar from "./Sidebar";

import styles from "../../styles/admin/admin-layout.module.scss";
import Navbar from "./Navbar";

function AdminLayout({ children }) {
	const [showSidebar, setShowSidebar] = useState(false);
	const showSidebarMenu = () => {
		setShowSidebar(!showSidebar);
		console.log(showSidebar);
	};
	return (
		<div className={`bg-white`} style={{ backgroundColor: "#E5E5E5" }}>
			<AdminSidebar showSidebar={showSidebar} />
			<Navbar toggle={showSidebarMenu} />
			<div className={styles.children}>{children}</div>
		</div>
	);
}

export default AdminLayout;

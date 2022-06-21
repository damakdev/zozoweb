import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function CustomerLayout({ children }) {
	return (
		<>
			<Nav />
			<div style={{ backgroundColor: "#E5E5E5" }}>
				<div className="w-11/12 mx-auto py-20">{children}</div>
			</div>

			<Footer />
		</>
	);
}

export default CustomerLayout;

import React from "react";
import { Share } from "../../public/svg/icons";

function CreateLink() {
	return (
		<>
			<div className="flex items-center pb-4">
				<Share /> <span className="text-4xl pl-9 pb-1" >Short link </span>
			</div>
			<p className="text-2xl">Invite you friends or close ones to Zozo via link or QR code </p>
		</>
	);
}

export default CreateLink;

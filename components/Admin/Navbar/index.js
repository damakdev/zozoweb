import React from "react";
import Image from "next/image";
import { Bell } from "../../../public/svg/icons";
function Navbar() {
	return (
		<div className="bg-white w-full h-32">
			<div className="flex flex-row-reverse pt-7 items-center mr-10">
				<div className=" ml-10 leading-normal">
					<p className="font-semibold">Akinpelumi Akinlade</p>
					<p>@akinlade</p>
				</div>

				<Image
					src="/images/pic2.png"
					alt="profile picture"
					width={35}
					height={35}
					className="rounded-full"
				/>
				<div className="mr-6 p-4  border-l-2 border-gray-200">
					<Bell />
				</div>
			</div>
		</div>
	);
}

export default Navbar;

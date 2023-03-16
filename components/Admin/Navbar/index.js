import React, { useEffect } from "react";
import Image from "next/image";
import {
	AdminHamburgerIcon,
	Bell,
	HamburgerIcon,
} from "../../../public/svg/icons";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimension from "../../../hooks/useWindowDimension";
function Navbar({toggle}) {
	const { user } = useSelector((state) => state.auth.admin);
	const { width } = useWindowDimension();
	const dispatch = useDispatch();
	useEffect(() => {}, []);

	return (
		<>
			{width >= 780 && user && (
				<div className="bg-white w-full h-32 ">
					<div className="flex flex-row-reverse pt-7 items-center mr-10">
						<div className=" ml-10 leading-normal">
							<p className="font-semibold capitalize">
								{user.last_name} {user.first_name}
							</p>
							<p>{user.email}</p>
						</div>

						<img
							src={user.avatar}
							alt="profile picture"
							width={50}
							height={65}
							style={{ borderRadius: "50%" }}
						/>
						<div className="mr-6 p-4  border-l-2 border-gray-200">
							<Bell />
						</div>
					</div>
				</div>
			)}

			{width < 780 &&  (
				<div className=" py-8" style={{ backgroundColor: "#743B96" }}>
					<div className=" flex justify-around items-center w-10/12">
						<img src="/images/mobile-logo.png" className="pl-10" />
						<AdminHamburgerIcon className="ml-auto -scale-x-100" onClick={()=>toggle()}/>
					</div>
				</div>
			)}
		</>
	);
}

export default Navbar;

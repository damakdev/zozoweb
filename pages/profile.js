import Image from "next/image";
import React, { useState } from "react";
import CustomerLayout from "../components/CustomerLayout";
import avatar from "../assets/pic2.png";
import Link from "next/link";
import { Checkbox, Plus, Timer } from "../public/svg/icons";
import styles from "./../styles/Profile.module.scss";
import LoginActivity from "../components/Profile/LoginActivity";
import Reminder from "../components/Profile/Reminder";
import CreateLink from "../components/Profile/CreateLink";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const [profileTab, setProfileTab] = useState("loginDetails");

	

	return (
		<CustomerLayout>
			<div>
				<div className="flex justify-between">
					<Image src={avatar} alt="your picture" />

					<div className={`${styles.profile_bar} bg-white h-2/3 w-8/12`}>
						<ul className="flex  ">
							<li
								onClick={() => setProfileTab("loginDetails")}
								className="flex items-center  py-5 mr-10 pl-10"
							>
								<Plus className="mr-8" />
								Log activity
							</li>

							<li
								onClick={() => setProfileTab("reminder")}
								className="flex items-center  py-5 mr-10 pl-10"
							>
								<Timer className="mr-8" />
								Set reminder
							</li>

							<li
								onClick={() => setProfileTab("link")}
								className="flex items-center  py-5 mr-10 pl-10"
							>
								<Checkbox className="mr-8" />
								Create Link
							</li>
						</ul>
						<div className="pl-10 py-10">
							{profileTab === "loginDetails" && <LoginActivity title={user.createdAt.slice(0, 10)} />}
							{profileTab === "reminder" && <Reminder />}
							{profileTab === "link" && <CreateLink />}
						</div>
					</div>
				</div>

				<div className="bg-white mt-10">
					<ul className={`${styles.profile_subnav} flex`}>
						<li className="py-5 ml-10 px-20  mr-20">About</li>
						<li className="py-5 px-20 ">Bid history </li>
					</ul>

					<div className={`${styles.profile_form} w-11/12 mx-auto`}>
						<h4> Contact Information</h4>

						<div className="flex items-center">
							<div className={styles.labels}>
								<p>Name:</p>
								<p>Phone number:</p>
								<p>Email: </p>
								<p>Defaut address:</p>
								<h4>Basic Information</h4>
								<p>Birthday:</p>
								<p>Gender:</p>
							</div>

							<div className={styles.details}>
								<p>{user.first_name} {user.last_name}</p>
								<p>{user.phone_number} </p>
								<p>{user.email} </p>
								<p>{user.address.id} {user.address.street}  {user.address.city}  {user.address.country} </p>
								<p></p>
								<p className="mt-9">May 15, 1995 </p>
								<p>Male</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default Profile;

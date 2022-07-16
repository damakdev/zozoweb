import React, { useState } from "react";
import Image from "next/image";
import MerchantSideBar from "../../components/merchant-sidebar/merchant-sidebar";
import { Bell, LocationIcon } from "../../public/svg/icons";
import styles from "../../styles/merchant-profile.module.scss";
import MerchantLayout from "../../components/MerchantLayout";
import Button from "../../components/ui/Button";
import About from "../../components/Merchant/Merchant-Profile/About";
import AccountDetails from "../../components/Merchant/Merchant-Profile/AccountDetails";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
function Profile() {
	const [details, setDetails] = useState("about");
	const [isEdit, setIsEdit] = useState(false)

	const canEdit = ()=>setIsEdit(!isEdit)
	return (
		<MerchantLayout>
			<MerchantNav title="Profile" />
			<div className={styles.container}>
				<div className="grid md:grid-cols-10 gap-10 mb-20 ">
					<div className="col-span-2">
						<Image
							src="/images/pic2.png"
							alt="profile-picture"
							width="100%"
							height="100%"
							layout="responsive"
						/>
					</div>
					<div className=" col-span-6">
						<div className="flex mt-3">
							<h1 className="text-4xl"> Akinpelumi Lade </h1>
							<div className="ml-10 flex items-center">
								<Image
									src="/svg/locationIcon.svg"
									alt="location icon"
									width={20}
									height={20}
								/>
								<h4 className="ml-3">Lagos</h4>
							</div>
						</div>

						<div className="flex mb-20 pb-10  mt-10">
							<h3 className="mr-7 text-green-600"> Verified </h3>
							<Image
								src="/svg/green-tick.svg"
								alt="location icon"
								width={20}
								height={20}
							/>
						</div>

						<Button
							paddingX="2.2rem"
							paddingY="1.2rem"
							name="DEACTIVATE ACCOUNT"
							bgColor="#EB5757"
							border="none"
							fontSize="12px"
						/>
					</div>
				</div>

				<div className={` ${styles.profile_details} mt-10`}>
					<ul className={`${styles.profile_subnav} flex`}>
						<li
							className={` py-5 ml-10 px-20  mr-20 ${
								details === "about" ? styles.active_tab : ""
							}  `}
							onClick={() => setDetails("about")}
						>
							About
						</li>
						<li
							className={` py-5 px-20 ${
								details !== "about" ? styles.active_tab : ""
							}  `}
							onClick={() => setDetails("accountDetails")}
						>
							Account details{" "}
						</li>
					</ul>

					{details === "about" ? <About isEdit={isEdit} canEdit={canEdit} /> : <AccountDetails isEdit={isEdit}  canEdit={canEdit}/>}
				</div>
			</div>
		</MerchantLayout>
	);
}

export default Profile;

import React, {useState} from "react";
import Image from "next/image";
import MerchantSideBar from "../../components/merchant-sidebar/merchant-sidebar";
import { Bell, LocationIcon } from "../../public/svg/icons";
import styles from "../../styles/merchant-profile.module.scss";
import MerchantLayout from "../../components/MerchantLayout";
import Button from "../../components/ui/Button";
import About from "../../components/Merchant-Profile/About";
import AccountDetails from "../../components/Merchant-Profile/AccountDetails";
function Profile() {
  const [details, setDetails] = useState("about")
	return (
		<MerchantLayout>
			<div className={styles.container}>
				<div className={styles.nav}>
					<div>
						<h3>Profile</h3>
						<p>Updated on 6. 7 . 2022 </p>
					</div>

					<div className={`${styles.nav_details} flex   items-center`}>
						<div className="mr-6 p-4  border-l-2 border-gray-200">
							<Bell />
						</div>

						<Image
							src="/images/accountProfile.svg"
							alt="profile picture"
							width={20}
							height={20}
						/>

						<div className=" ml-10 leading-normal">
							<p>Akinpelumi Akinlade</p>
							<p>@akinlade</p>
						</div>
					</div>
				</div>

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
						<li className="py-5 ml-10 px-20  mr-20" onClick={()=>setDetails("about")}>About</li>
						<li className="py-5 px-20 " onClick={()=>setDetails("accountDetails")}>Account details </li>
					</ul>
					
          {details === "about" ? <About /> : <AccountDetails/> }
				</div>
			</div>
		</MerchantLayout>
	);
}

export default Profile;

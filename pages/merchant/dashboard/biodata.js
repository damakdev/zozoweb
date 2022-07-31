import React from "react";
import Link from "next/link";
import {
	TimerIcon,
	NotificationBellIcon,
	WalletIcon,
	ProgressBar,
} from "../../../public/svg/icons";
import MerchantSideBar from "../../../components/merchant-sidebar";
import Button from "../../../components/ui/button/";
import styles from "../../../styles/merchant/biodata.module.scss";
import MerchantLayout from "../../../components/MerchantLayout";
import MerchantNav from "../../../components/Merchant/Merchant_Nav";

const BioData = () => {
	return (
		<MerchantLayout>
			<MerchantNav title="Bio data" />
			<section className={styles.container}>
				<div className="w-11/12 mx-auto">
					<div className="   pt-10">
						<div className=" bg-violet-400 text-white p-7 mb-10 rounded-md shadow-md">
							<div className=" flex  text-white py-4 ">
								<div className="mr-7">
									<svg
										width="25"
										height="25"
										viewBox="0 0 25 25"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.4"
											d="M21.3309 17.261C21.0509 18.011 20.4609 18.581 19.6909 18.841C18.6109 19.201 17.5009 19.471 16.3809 19.661C16.2709 19.681 16.1609 19.701 16.0509 19.711C15.8709 19.741 15.6909 19.761 15.5109 19.781C15.2909 19.811 15.0609 19.831 14.8309 19.851C14.2009 19.901 13.5809 19.931 12.9509 19.931C12.3109 19.931 11.6709 19.901 11.0409 19.841C10.7709 19.821 10.5109 19.791 10.2509 19.751C10.1009 19.731 9.95087 19.711 9.81087 19.691C9.70087 19.671 9.59087 19.661 9.48087 19.641C8.37087 19.461 7.27087 19.191 6.20087 18.831C5.40087 18.561 4.79087 17.991 4.52087 17.261C4.25087 16.541 4.35087 15.701 4.78087 14.981L5.91087 13.101C6.15087 12.691 6.37087 11.901 6.37087 11.421V9.56096C6.37087 5.93096 9.32087 2.98096 12.9509 2.98096C16.5709 2.98096 19.5209 5.93096 19.5209 9.56096V11.421C19.5209 11.901 19.7409 12.691 19.9909 13.101L21.1209 14.981C21.5309 15.681 21.6109 16.501 21.3309 17.261Z"
											fill="white"
										/>
										<path
											d="M12.9319 11.6908C12.5119 11.6908 12.1719 11.3508 12.1719 10.9308V7.8308C12.1719 7.4108 12.5119 7.0708 12.9319 7.0708C13.3519 7.0708 13.6919 7.4108 13.6919 7.8308V10.9308C13.6819 11.3508 13.3419 11.6908 12.9319 11.6908Z"
											fill="white"
										/>
										<path
											d="M15.7613 20.9409C15.3413 22.1009 14.2313 22.9309 12.9313 22.9309C12.1413 22.9309 11.3613 22.6109 10.8113 22.0409C10.4913 21.7409 10.2513 21.3409 10.1113 20.9309C10.2413 20.9509 10.3713 20.9609 10.5113 20.9809C10.7413 21.0109 10.9813 21.0409 11.2213 21.0609C11.7913 21.1109 12.3713 21.1409 12.9513 21.1409C13.5213 21.1409 14.0913 21.1109 14.6513 21.0609C14.8613 21.0409 15.0713 21.0309 15.2713 21.0009C15.4313 20.9809 15.5913 20.9609 15.7613 20.9409Z"
											fill="white"
										/>
									</svg>
								</div>
								Note at any point in time. you can always save and continue
								later
							</div>

							<div className=" flex">
								<div className="mr-7">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											opacity="0.4"
											d="M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z"
											fill="white"
										/>
										<path
											d="M17.7495 7.05C17.5095 7.01 17.2595 7.00001 16.9995 7.00001H6.99945C6.71945 7.00001 6.44945 7.02001 6.18945 7.06001C6.32945 6.78001 6.52945 6.52001 6.76945 6.28001L10.0195 3.02C11.3895 1.66 13.6095 1.66 14.9795 3.02L16.7295 4.79002C17.3695 5.42002 17.7095 6.22 17.7495 7.05Z"
											fill="white"
										/>
										<path
											d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22"
											fill="#A78BFA"
										/>
									</svg>
								</div>
								<p>
									Enter personal information required for identification. Fields
									marked * are compulsory
								</p>
								<p>
									It will take 24hours before your account can be validated*
								</p>
							</div>
						</div>

						<div className="w-full">
							<form action="" className="">
								<h3 className=" mt-20 mb-10 text-bolder text-4xl">
									Personal Information
								</h3>
								<div className="w-full grid grid-cols-3 gap-4">
									<div>
										<label>
											First Name <span>*</span>
										</label>
										<input type="text" name="" id="" placeholder="" />
									</div>

									<div>
										<label>
											Last Name <span>*</span>
										</label>
										<input type="text" name="" id="" placeholder="" />
									</div>

									<div>
										<label>
											Date of Birth <span>*</span>
										</label>
										<input type="date" name="" id="" />
									</div>

									<div>
										<label>
											Gender <span>*</span>
										</label>
										<select>
											<option>Male</option>
										</select>
									</div>

									<div>
										<label>
											NIN <span>*</span>
										</label>
										<input type="number" name="" id="" />
									</div>

									<div>
										<label>
											Phone Number <span>*</span>
										</label>
										<input type="number" name="" id="" />
									</div>
								</div>

								{/* ADDRESS INFO */}
								<h3 className="mt-20 mb-10 text-bold text-4xl">
									Address Information
								</h3>

								<div className="w-full grid grid-cols-3 gap-4">
									<div>
										<label>
											Street Number <span>*</span>
										</label>
										<input type="text" name="" id="" placeholder="" />
									</div>

									<div>
										<label>
											State <span>*</span>
										</label>
										<select>
											<option>Lagos</option>
										</select>
									</div>

									<div>
										<label>
											City <span>*</span>
										</label>
										<select>
											<option>Trenches</option>
										</select>
									</div>

									<div>
										<label>
											Closest Landmark <span>*</span>
										</label>
										<select>
											<option>Somewhere</option>
										</select>
									</div>
								</div>

								{/* ACCOUNT DETAILS */}
								<h3 className="mt-20 mb-10 text-bold text-4xl">
									Account Details
								</h3>
								<div className="w-full grid grid-cols-3 gap-4 mb-20">
									<div>
										<label>
											Bank Name<span>*</span>
										</label>
										<input type="text" name="" id="" placeholder="" />
									</div>

									<div>
										<label>
											Account Number <span>*</span>
										</label>
										<input type="text" name="" id="" placeholder="" />
									</div>

									<div>
										<label>
											Card Number <span>*</span>
										</label>
										<input type="number" name="" id="" />
									</div>

									<div>
										<label>
											Expiry Date <span>*</span>
										</label>
										<input type="date" name="" id="" />
									</div>

									<div>
										<label>
											CVV <span>*</span>
										</label>
										<input type="number" name="" id="" />
									</div>
								</div>
							</form>

							<div className="mb-20">
								<Link href="/merchant/dashboard/account-details">
									<Button>Submit</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</MerchantLayout>
	);
};

export default BioData;

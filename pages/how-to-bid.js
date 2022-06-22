import Image from "next/image";
import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import { BulletPoint } from "../public/svg/icons";
import styles from "../styles/How_To_Bid.module.scss";
import FAQ from "./../assets/FAQ.png";
import  watermark from "./../assets/watermark.png";


function HowToBid() {
	return (
		<CustomerLayout>
			<div className={` ${styles.howtobid} bg-white w-11/12 m-auto mt-20 py-20 `}>
			<div className={styles.watermark}>
			<Image src={watermark} alt="Zozo logo" />
			</div>
				<div className="w-11/12 mx-auto py-20 px-20">
					<div className={styles.first_section}>
						<div className="w-1/2">
							<h1 className="mb-20">How to Bid?</h1>
							<p className=" mb-20">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								nisl eros, pulvinar facilisis justo mollis, auctor consequat
								urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
								enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
								vestibulum eget. Class aptent taciti sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
								lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere
								ut, pulvinar vitae dolor.
							</p>

							<p>
								Pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper
								sagittis id vel leo. Integer feugiat faucibus libero, at maximus
								nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
								turpis ut ipsum egestas
							</p>
						</div>

						<div className="my-auto">
							<Image src={FAQ} alt="Frequently asked questions" />
						</div>
					</div>

					<div className={`${styles.second_section}  mt-20`}>
						<div className="w-8/12">
							<h1 className="mb-20">Frequently Asked Questions</h1>
							<p className=" mb-20">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
								nisl eros, pulvinar facilisis justo mollis, auctor consequat
								urna. Morbi a bibendum metus. Donec scelerisque sollicitudin
								enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci
								vestibulum eget. Class aptent taciti sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos. Duis pharetra luctus
								lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere
								ut, pulvinar vitae dolor.
							</p>

							<p>
								Pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper
								sagittis id vel leo. Integer feugiat faucibus libero, at maximus
								nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum
								turpis ut ipsum egestas
							</p>
						</div>

						<div className={`${styles.faq_list}`}>
							<ul className="px-10 py-5 ">
								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li> Bidding</li>
								</span>

								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li>Win Limit</li>
								</span>

								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li> Claiming Wins</li>
								</span>

								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li> Purchasing Items</li>
								</span>

								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li> My Account</li>
								</span>
								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li> Bid Transfer</li>
								</span>
								<span className="flex items-center mb-5">
									<BulletPoint  />
									<li>Our Products</li>
								</span>
								<span className="flex items-center">
									<BulletPoint  />
									<li>Payments</li>
								</span>
							
							</ul>
						</div>
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default HowToBid;

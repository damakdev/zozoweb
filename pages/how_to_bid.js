import Image from "next/image";
import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import styles from "../styles/How_To_Bid.module.scss";
import FAQ from "./../assets/FAQ.png";

function HowToBid() {
	return (
		<CustomerLayout>
			<div className="bg-white w-11/12 m-auto">
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

					<div className={styles.second_section}>
						<div className="w-7/12 mt-20">
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

                                    
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default HowToBid;

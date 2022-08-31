import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "./../styles/cart.module.scss";
import Image from "next/image";
import profile from "../assets/profile.svg";
import QR from "../assets/qr.png";
import plus from "../assets/plus.svg";
import box1 from "./../assets/cartoon.png";
import { useSelector, useDispatch } from "react-redux";
import Watchlist from "../components/cart/Watchlist";

const Wishlist = () => {
	const { categories } = useSelector((state) => state.categories);
	// const [currentItem, setCurrentItem] = useState(1);

	const { user } = useSelector((state) => state.auth.customer);
	const { subTotal, cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<CustomerLayout>
			<div className="w-full bg-white py-6  px-9 flex justify-between align-center text-black">
				<h3 className="text-5xl">Watchlist </h3>
				<h6 className="text-3xl pt-2" onClick={() => dispatch(clearCart())}>
					Clear Watchlist
				</h6>
			</div>

			<div className="grid grid-cols-2 gap-4 mt-16">
				{cart.length > 0 &&
					cart.map((item, index) => <Watchlist details={item} key={index} />)}
			</div>

			<div className=" ">
				{cart.length < 1 && (
					<div className={` ${styles.cart} bg-white mt-10 `}>
						<div className="flex  mt-20">
							<div>
								<Image src={box1} alt="cart" width={200} height={200} />
							</div>
							<div>
								<h1 className="text-black">Your Zozo Watchlist is empty</h1>
								<p className={`${styles.purple_text} mt-3`}>
									Bid on today's deals
								</p>

								<div className="flex gap-10 mt-12">
									{!user && (
										<>
											<div className="">
												<Link href="/login">
													<Button
														name="SIGN IN TO YOUR ACCOUNT"
														paddingY="7px"
														paddingX="30px"
														fontSize="14px"
														width="270px"
													/>
												</Link>
											</div>
											<div>
												<Link href="/signup">
													<Button
														name="SIGN UP NOW"
														paddingY="7px"
														paddingX="30px"
														fontSize="14px"
														bgColor="white"
														color="black"
													/>
												</Link>
											</div>
										</>
									)}

									{user && (
										<Link href="/">
											<Button
												name="Continue Shopping"
												paddingX="30px"
												paddingY="15px"
												width="90%"
												className="mt-10 w-11/12"
											/>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</CustomerLayout>
	);
};

export default Wishlist;

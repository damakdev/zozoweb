import React from "react";
import CustomerLayout from "../components/CustomerLayout";
import Link from "next/link";
import Button from "../components/ui/Button";
import styles from "../styles/watchlist.module.scss";
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
			{cart.length > 0 && (
				<div className="w-full bg-white py-6  px-9 flex justify-between align-center text-black">
					<h3 className="text-4xl">Watchlist </h3>
					<h6
						className="text-2xl pt-2 text-red-600 cursor-pointer"
						onClick={() => dispatch(clearCart())}
					>
						Clear Watchlist
					</h6>
				</div>
			)}

			<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-16">
				{cart.length > 0 &&
					cart.map((item, index) => <Watchlist details={item} key={index} />)}
			</div>

			<div className=" ">
				{cart.length < 1 && (
					<div className={` ${styles.cart} bg-white w-10/12 mx-auto  mt-10 `}>
						<div className="flex items-center justify-center  mt-20">
							<div className="mr-5">
								<Image src={box1} alt="cart" width={200} height={200} />
							</div>
							<div>
								<h1 className="text-black ">Your Zozo Watchlist is empty</h1>

								<div className="flex flex-col lg:flex-row md:flex-row justify-center">
									{!user && (
										<>
											<div className=" my-3 ">
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
											<div className=" my-3 w-full justify-center flex">
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

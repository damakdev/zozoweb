import { useDispatch, useSelector } from "react-redux";
import { logOutCustomer } from "../../store/slices/authSlice";
import logo from "../../public/images/logo-colored.png";
import searchIcon from "../../assets/search.svg";
import cartImg from "../../assets/cart.svg";
import wishlist from "../../assets/wishlist.svg";
import profile from "../../assets/profile.svg";
import Link from "next/link";
import breadcrumb from "../../assets/breadcrumb.svg";
import Image from "next/image";
import Button from "../ui/Button";
import styles from "../../styles/Nav.module.scss";

function Nav() {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth.customer);
	const { cart } = useSelector((state) => state.cart);
	return (
		<>
			<header className={`${styles.header}`}>
				<div className={styles.content}>
					<div>
						<Link href="/">
							<p>
								<Image src={logo} alt="Zozo Logo" />
							</p>
						</Link>
					</div>
					<div className=" flex justify-around">
						<div
							className={`${styles.search} flex  items-center mr-4 align-center`}
						>
							<div>
								<input placeholder="Search" type="text" />
							</div>
							<span>
								{" "}
								<Image src={searchIcon} alt="Search" width={20} />
							</span>
						</div>
						<Link href="/wishlist">
							<p className="px-5 pt-4 ">
								<Image src={wishlist} alt="Wishlist" width={20} />
								{cart.length > 0 && (
										<span
											className="bg-red-600 px-3 text-white"
											style={{ borderRadius: "50%" }}
										>
											{cart.length}
										</span>
									)}
							</p>
						</Link>
						<div className="px-5 pt-4 flex items-center ">
							<Link href="/cart">
								<p>
									<Image src={cartImg} alt="Cart" width={20} />

								
								</p>
						
							</Link>
						</div>
						<span className="mt-2">Won Bids</span>
						<Link href="/profile">
							<p className="px-5 pt-4 ">
								<Image src={profile} alt="Profile" width={20} />
							</p>
						</Link>

						{!user && (
							<>
								<Link href="/login">
									<p className=" mr-9 px-8 pt-3 font-medium text-2xl">Log in</p>
								</Link>

								<Link href="/signup">
									<p>
										<Button
											name="SIGN UP"
											paddingY="7px"
											paddingX="30px"
											fontSize="14px"
										/>
									</p>
								</Link>
							</>
						)}

						{user && (
							<button onClick={() => dispatch(logOutCustomer())}>Logout</button>
						)}
					</div>
				</div>
			</header>

			<div className={styles.nav}>
				<div className={styles.content}>
					<ul className=" flex py-5 ml-5 align-center">
						<Link href="/">
							<li className="pt-2">
								<Image src={breadcrumb} alt="Menu" />
							</li>
						</Link>

						<Link href="/how-to-bid">
							<li>
								<p> How to Bid</p>
							</li>
						</Link>

						<Link href="/">
							<li>
								<p> Start Bidding</p>
							</li>
						</Link>

						<Link href="/about">
							<li>
								<p> About</p>
							</li>
						</Link>

						<Link href="/contact">
							<li>
								<p> Contact</p>
							</li>
						</Link>

						<Link href="/">
							<li>
								<p> Help</p>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Nav;

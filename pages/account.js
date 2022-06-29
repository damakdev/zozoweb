import React from "react";
import AccountCard from "../components/Account/Card";
import CustomerLayout from "../components/CustomerLayout";
import styles from "../styles/account.module.scss";
import Slide1 from "../public/images/slider-image-1.jpg";
import AdsSlider from "../components/ads-slider";
import history from "../assets/history.svg";
import watchlist from "../assets/watchlist.svg";
import message from "../assets/message.svg";
import contact from "../assets/contact.svg";
import ProductsSection from "../components/products-section";
import WhyZozo from "../components/why-zozo";

function Account() {
	const cards = [
		{
			image: history,
			title: "Bidding History ",
			para: "Track, bid or bid things again",
		},

		{
			image: contact,
			title: "Zozo Profile ",
			para: "Edit your login and manage, add, or remove user profiles for personalized experience ",
		},

		{
			image: watchlist,
			title: "Watchlist  ",
			para: "Modify, view and your list  or create a new one",
		},

		{
			image: message,
			title: "Messsage Orders  ",
			para: "View message to and from Zozo, bidding, and auction",
		},
		{
			image: contact,
			title: "Contact ",
			para: "Customer service , Troubleshoot device issue",
		},
	];

	const products = Array(8).fill({
		image: Slide1,
		productName: `Yellow Headphones`,
		price: 10000,
		time: "2022-06-28T22:38:00.000Z",
	});

	const ads = Array(5).fill({
		image: Slide1,
		title: `Exciting auctions you should win this week`,
		text: `They've always got a lot of super exciting items on auctions and you can win so much more on Zozo by shearing your wins on instagram or facebook also one thing you can count on is that the enjoyment in zozo is nonstop`,
		cta: `start selling`,
	});

	const whyZozo = Array(5).fill({
		image: Slide1,
		title: `Why Zozo.ng`,
		subtitle: `We are reliable`,
		text: `We come correct in all our dealings. We partner with top, trusted brands to give you high-quality products that offer real value for every penny you spend. No scams. No Counterfeits. Everything here is legit; take our words for it.`,
	});

	const accountCards = cards.map((card, index) => {
		return (
			<AccountCard
				image={card.image}
				title={card.title}
				para={card.para}
				key={index}
			/>
		);
	});
	return (
		<CustomerLayout>
			<div>
				<h3 className="text-4xl">Your Account</h3>
				<div className={`${styles.first_section} grid grid-cols-3 gap-3 mt-10`}>
					{accountCards}
				</div>

				<div className="mt-20">
					<ProductsSection
						products={products}
						title="similar products you might like"
					/>
					<AdsSlider data={ads} />
					<div className="mt-20">
						<WhyZozo data={whyZozo} />
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default Account;

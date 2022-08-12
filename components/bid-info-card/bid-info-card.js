import Link from "next/link";
import { truncateString, formatNumber } from "../../utils";
import styles from "./bid-info-card.module.scss";

export default function BidInfoCard({ data, title }) {
	return (
		<div className={styles.container}>
			<h3>{title}</h3>

			<ul>
				{data < 1 ? (
					<p className="text-center mt-40 text-black text-2xl w-10/12 mx-auto">No Events at the moment </p>
				) : (
					data?.map((item, index) => (
						<li key={index}>
							<Link href="/">
								<a>
									<img src={item.product.images.main} alt="" />
									<div>
										<h4>{item.product.name}</h4>
										<p>&#8358;{formatNumber(item.product.price)}</p>
										<span>00:00:36:37</span>
									</div>
								</a>
							</Link>
						</li>
					))
				)}
			</ul>
		</div>
	);
}

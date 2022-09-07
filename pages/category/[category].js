import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CustomerLayout from "../../components/CustomerLayout";
import {
	_getAllCategories,
	_getAllCategoryProduct,
} from "../../store/slices/categoriesSlice";
import styles from "../../styles/categoryList.module.scss";
import Loader from "../../components/loader";
import { Card } from "../../components/products-section/products-section";
import ProductCard from "../../components/CategroryProductCard";

function CategoryList() {
	const dispatch = useDispatch();
	const { categories, cateProduct } = useSelector((state) => state.categories);
	const { user } = useSelector((state) => state.auth.customer);
	const router = useRouter();
	let products;
	useEffect(() => {
		if (!categories) dispatch(_getAllCategories());
		if (router.isReady)
			dispatch(
				_getAllCategoryProduct({ category_names: [router.query.category] })
			);
	}, [dispatch, router.isReady, router.query.category, categories]);

	if (cateProduct.products) {
		products = cateProduct.products.products.filter((item) => {
			return item.bidding_events[0] && !item.bidding_events[0].ended;
		});
	}

	return (
		<CustomerLayout>
			<div className={styles.category}>
				<div className={styles.categoryNames}>
					{categories && (
						<div className={`${styles.cateContainer}`}>
							<ul>
								{categories &&
									categories?.map((category) => (
										<Link key={category.id} href={`/category/${category.name}`}>
											<li
												className={`${
													router.query.category == category.name &&
													styles.active
												} text-center px-3 py-2 `}
											>
												{category.name}
											</li>
										</Link>
									))}
							</ul>
						</div>
					)}
				</div>
				<div className={`bg-white mt-10   py-10 px-20 ${styles.categoryList}`}>
					{cateProduct.isLoading && (
						<div className="flex items-center w-full py-20">
							<Loader />
						</div>
					)}
					{!cateProduct.isLoading &&
						cateProduct.products &&
						products.length < 1 && (
							<div className="text-center font-semibold text-4xl text-black">
								No Bid{" "}
							</div>
						)}
					<div
						className={`grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 ${styles.content}`}
					>
						{!cateProduct.isLoading &&
							cateProduct.products &&
							cateProduct.products.products.length > 0 &&
							products.map((item, index) => {
								return 	<ProductCard product={item} key={index} />;
							})}
					</div>
				</div>
			</div>
		</CustomerLayout>
	);
}

export default CategoryList;

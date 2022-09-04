import Link from "next/link";
import Loader from "../loader";
import styles from "./categories.module.scss";

export default function Categories({ categories }) {
	return (
		<div className={styles.container}>
			<p>Categories</p>
			<ul>
				{!categories && <Loader />}
				{categories?.map((category) => (
					<Link key={category.id} href={`/category/${category.name}`}>
						<li>{category.name}</li>
					</Link>
				))}
			</ul>
		</div>
	);
}

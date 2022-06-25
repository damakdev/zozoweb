import { useState } from "react";
import { LeftArrow, RightArrow } from "../../public/svg/icons";
import { formatNumber } from "../../utils";
import Link from "next/link";
import styles from "./products-section.module.scss";

export default function ProductsSection({ title, products }) {
  const [sort, setSort] = useState("popularity");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <form>
          <label htmlFor="sort">Sort</label>
          <select
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popularity">popularity</option>
            <option value="rating">product rating</option>
            <option value="low to high">low to high</option>
            <option value="high to low">high to low</option>
          </select>
        </form>
        <span>
          <LeftArrow />
        </span>
        <span>
          <RightArrow />
        </span>
      </div>
      <div className={styles.content}>
        {products.map((product, index) => (
          <Link href="/" key={index}>
            <a className={styles.card}>
              <img src={product.image.src} alt="product image" />
              <h3>{product.productName}</h3>
              <p>Ends in: 00:00:00:00</p>
              <span>&#8358;{formatNumber(product.price)}</span>
              <b>Bid</b>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

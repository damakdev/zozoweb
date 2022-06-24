import Link from "next/link";
import { truncateString, formatNumber } from "../../utils";
import styles from "./bid-info-card.module.scss";

export default function BidInfoCard({ data, title }) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            <Link href="/">
              <a>
                <img src={item.image.src} alt="" />
                <div>
                  <h4>{truncateString(item.productName, 13)}</h4>
                  <p>&#8358;{formatNumber(item.price)}</p>
                  <span>00:00:36:37</span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { RightArrow } from "../../public/svg/icons";
import Link from "next/link";
import styles from "./bread-crumb.module.scss";

export default function BreadCrumb({ data }) {
  return (
    <ul className={styles.list}>
      {data.map((crumb, index) => {
        if (!crumb.url) {
          return (
            <li key={crumb.text}>
              {crumb.text}
              {index !== data.length - 1 && <span>{"/"}</span>}
            </li>
          );
        } else {
          return (
            <li key={crumb.text}>
              <Link href={crumb.url}>
                <a>{crumb.text}</a>
              </Link>
              {index !== data.length - 1 && <span>{"/"}</span>}
            </li>
          );
        }
      })}
    </ul>
  );
}

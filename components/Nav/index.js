import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import cart from "../../assets/cart.svg";
import wishlist from "../../assets/wishlist.svg";
import profile from "../../assets/profile.svg";
import Link from "next/link";
import breadcrumb from "../../assets/breadcrumb.svg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import styles from "../../styles/Nav.module.scss";

function Nav() {
  return (
    <>
      <header className={`${styles.header}   `}>
        <div className={styles.content}>
          <div>
            <Image src={logo} alt="Zozo Logo" height={35} />
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
            <Link href="/">
              <a className="px-5 pt-4 ">
                <Image src={wishlist} alt="Wishlist" width={20} />
              </a>
            </Link>
            <Link href="/">
              <a className="px-5 pt-4 ">
                <Image src={cart} alt="Cart" width={20} />
              </a>
            </Link>
            <Link href="/">
              <a className="px-5 pt-4 ">
                <Image src={profile} alt="Profile" width={20} />
              </a>
            </Link>

            <Link href="/login">
              <a className=" mr-9 px-8 pt-3 font-medium text-2xl">Log in</a>
            </Link>

            <Link href="/signup">
              <a>
                <Button
                  name="SIGN UP"
                  paddingY="7px"
                  paddingX="30px"
                  fontSize="14px"
                />
              </a>
            </Link>
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

            <Link href="/">
              <li>
                <a> How to Bid</a>
              </li>
            </Link>

            <Link href="/">
              <li>
                <a> Start Bidding</a>
              </li>
            </Link>

            <Link href="/">
              <li>
                <a> About</a>
              </li>
            </Link>

            <Link href="/">
              <li>
                <a> Contact</a>
              </li>
            </Link>

            <Link href="/">
              <li>
                <a> Help</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;

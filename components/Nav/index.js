import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOutCustomer } from "../../store/slices/authSlice";
import {
  GavelIcon,
  SearchIcon,
  WishlistIcon,
  ProfileIcon,
  HamburgerIcon,
} from "../../public/svg/icons";
import Logo from "../logo";
import Link from "next/link";
import styles from "../../styles/Nav.module.scss";

export default function Nav() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth.customer);
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className="w-1/3">
            <Logo variant="purple" />
          </div>

          <div className="w-1/3">
            <div className={styles.search}>
              <input placeholder="Search" type="text" />
              <SearchIcon />
            </div>
          </div>

          <div className="w-1/3">
            <div className={styles.links}>
              <Link href="/wishlist">
                <a className={styles.cart} data-cart={cart.length}>
                  <WishlistIcon />
                </a>
              </Link>
              <Link href="/cart">
                <a>
                  <GavelIcon variant="outline" />
                </a>
              </Link>

              {!user && (
                <>
                  <Link href="/login">
                    <a className={styles.login}>Log in</a>
                  </Link>
                  <Link href="/signup">
                    <a className={styles.signup}>Sign Up</a>
                  </Link>
                </>
              )}

              {user && (
                <>
                  <Link href="/profile">
                    <a>
                      <ProfileIcon />
                    </a>
                  </Link>
                  <button
                    className={styles.logout}
                    onClick={() => {
                      router.push("/");
                      dispatch(logOutCustomer());
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <nav className={styles.nav}>
        <div className={styles.content}>
          {/* <HamburgerIcon className="mr-auto" /> */}
          <Link href="/how-to-bid">How to Bid</Link>
          <Link href="/">Start Bidding</Link>
          <Link href="/merchant">Start Selling</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          {/* <Link href="/">Help</Link> */}
        </div>
      </nav>
    </>
  );
}

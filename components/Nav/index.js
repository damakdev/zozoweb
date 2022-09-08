import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { logOutCustomer } from "../../store/slices/authSlice";
import {
  GavelIcon,
  SearchIcon,
  WishlistIcon,
  ProfileIcon,
  HamburgerIcon,
  HomeIcon,
  ProfileCircleIcon,
} from "../../public/svg/icons";
import useWindowDimension from "../../hooks/useWindowDimension";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Button from "../ui/button/";
import Loader from "../loader";
import Logo from "../logo";
import Link from "next/link";
import styles from "../../styles/Nav.module.scss";

export default function Nav() {
  const dispatch = useDispatch();
  const router = useRouter();
  const menuRef = useRef();
  // useOnClickOutside(menuRef, () => setMobileMenu(false));
  const { width } = useWindowDimension();
  const { user } = useSelector((state) => state.auth.customer);
  const { cart } = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.categories);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (mobileMenu) {
      document.querySelector("html").style.overflow = "hidden";
    }
    if (!mobileMenu) {
      document.querySelector("html").style.removeProperty("overflow");
    }
  }, [mobileMenu]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <div className="w-1/3 flex">
            <Logo variant="purple" />
          </div>

          <>
            {width >= 540 && (
              <div className="w-1/3">
                <div className={styles.search}>
                  <input placeholder="Search" type="text" />
                  <SearchIcon />
                </div>
              </div>
            )}

            {width >= 720 && (
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
                      {width >= 1000 && (
                        <Link href="/signup">
                          <a className={styles.signup}>Sign Up</a>
                        </Link>
                      )}
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
            )}
          </>
          {width < 720 &&
            (!mobileMenu ? (
              <HamburgerIcon
                onClick={() => setMobileMenu((prevState) => !prevState)}
                className="ml-auto -scale-x-100"
              />
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-auto"
                onClick={() => setMobileMenu(false)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2008 0C21.2676 0 24 2.8536 24 7.0992V16.9008C24 21.1464 21.2676 24 17.1996 24H6.798C2.7312 24 0 21.1464 0 16.9008V7.0992C0 2.8536 2.7312 0 6.798 0H17.2008ZM17.2008 1.8H6.798C3.762 1.8 1.8 3.8796 1.8 7.0992V16.9008C1.8 20.1204 3.762 22.2 6.798 22.2H17.1996C20.2368 22.2 22.2 20.1204 22.2 16.9008V7.0992C22.2 3.8796 20.2368 1.8 17.2008 1.8ZM9.7566 8.47512L11.9976 10.716L14.2374 8.47764C14.589 8.12604 15.1578 8.12604 15.5094 8.47764C15.861 8.82924 15.861 9.39804 15.5094 9.74964L13.2696 11.988L15.5118 14.2315C15.8634 14.5831 15.8634 15.1519 15.5118 15.5035C15.3366 15.6799 15.105 15.7675 14.8758 15.7675C14.6454 15.7675 14.415 15.6799 14.2398 15.5035L11.9976 13.26L9.759 15.5C9.5838 15.6764 9.3534 15.764 9.123 15.764C8.8926 15.764 8.6622 15.6764 8.487 15.5C8.1354 15.1484 8.1354 14.5796 8.487 14.228L10.7256 11.988L8.4846 9.74712C8.133 9.39552 8.133 8.82672 8.4846 8.47512C8.8374 8.12352 9.4062 8.12352 9.7566 8.47512Z"
                  fill="var(--accent-color)"
                />
              </svg>
            ))}
        </div>
      </header>

      {width >= 540 && (
        <nav className={styles.nav}>
          <div className={styles.content}>
            <Link href="/how-to-bid">How to Bid</Link>
            <Link href="/">Start Bidding</Link>
            <Link href="/merchant">Start Selling</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            {/* <Link href="/">Help</Link> */}
          </div>
        </nav>
      )}

      {width < 720 && (
        <nav className={styles["bottom-nav"]}>
          <Link href="/">
            <a>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 1000"
              >
                <path d="M739.3,990H616.7c-12.8,0-23.2-10.4-23.2-23.2V751.7c0-27.9-22.7-50.5-50.5-50.5h-86c-27.9,0-50.5,22.7-50.5,50.5v215.1c0,12.8-10.4,23.2-23.2,23.2H260.1c-53.5,0-96.9-43.5-96.9-96.9V556c-28.2,1.2-73.8,2.3-73.9,2.3c-6.8,0.8-13-2.1-17.6-6.8c-39.4-39.4-39.6-116.6-0.5-155.8L428.4,38.6c38.1-38.1,104.5-38.1,142.7,0l357.1,357.1c39.5,39.6,39.7,116.8,0.6,155.8c-4.6,4.7-10.8,7.6-17.6,6.8c-0.1,0-45.8-2.7-74.9-2.3v337.1C836.2,946.5,792.8,990,739.3,990z M639.9,943.6h99.5c27.9,0,50.5-22.7,50.5-50.5V535.2c0-25.6,27.1-25.6,48.9-25.6c20.4,0,47.7,1.1,63.1,1.8c15.2-23.5,12.9-63.5-6.5-83L538.3,71.4c-20.6-20.5-56.5-20.5-77.1,0L104.1,428.5c-19.2,19.2-21,59.4-5.5,83c15.2-0.7,42.2-1.8,62.4-1.8c21.7,0,48.6,0,48.6,25.5v357.9c0,27.9,22.7,50.5,50.5,50.5H360V751.8c0-53.4,43.5-96.9,96.9-96.9h86c53.4,0,96.9,43.5,96.9,96.9L639.9,943.6L639.9,943.6L639.9,943.6z" />
              </svg>
            </a>
          </Link>
          <Link href="/wishlist">
            <a>
              <WishlistIcon />
            </a>
          </Link>
          <Link href="/cart">
            <a>
              <GavelIcon variant="outline" />
            </a>
          </Link>
          <Link href="/profile">
            <a>
              <ProfileIcon />
            </a>
          </Link>
        </nav>
      )}

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            ref={menuRef}
            className={styles["mobile-menu"]}
          >
            <div className={styles.title}>
              {user && <h1>Hello, {user.first_name}</h1>}
              {/* {!user && <Link href="/login">Login</Link>} */}
              {/* <h1>{user && "Hello, " + user.first_name}</h1> */}
            </div>
            <p>Categories</p>
            <ul style={{ height: user ? "55%" : "60%" }}>
              {!categories && <Loader />}
              {categories?.map((category) => (
                <li key={category.id}>
                  <Link href={`/category/${category.name}`}>
                    <a>{category.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
            {user && (
              <Button
                onClick={() => {
                  router.push("/");
                  setMobileMenu(false);
                  dispatch(logOutCustomer());
                }}
              >
                Logout
              </Button>
            )}
            {!user && (
              <>
                <Link href="/login">
                  <a className={styles.login}>Log in</a>
                </Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

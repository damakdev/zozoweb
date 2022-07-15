import {
  LeftArrow,
  RightArrow,
  TimerIcon,
  NotificationBellIcon,
  CloseIcon,
  DebitCardIocn,
  CashIcon,
} from "../../../public/svg/icons";
import MerchantSideBar from "../../../components/merchant-sidebar";
import Button from "../../../components/ui/button/";
import styles from "../../../styles/merchant/dashboard.module.scss";

export default function Index() {
  const cards = [null, null, null, null, null];
  return (
    <section className={styles.container}>
      <MerchantSideBar />
      <div className={styles.recent}>
        <CloseIcon />
        <h1>Recent wins</h1>
        <div className={styles.pagination}>
          <LeftArrow style={{ marginRight: 5 }} />
          <span style={{ backgroundColor: "var(--bg-white)" }}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          {/* <span>....</span> */}
          <RightArrow style={{ marginLeft: 5 }} />
        </div>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3>Hide & Seek event </h3>
              <h1>
                Lade <span>134558</span>
              </h1>
              <h2>
                Beat Headphones <span>134558</span>
              </h2>
              <RightArrow variant="big-round-purple" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>My Dashboard </h1>
            <span>
              <TimerIcon />
              Updated on 6. 7 . 2022{" "}
            </span>
          </div>
          <div className={styles["profile-info"]}>
            <NotificationBellIcon />
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/e3f4/cd54/1e2dd8e0e7156a94e9ba564bddfff442?Expires=1658707200&Signature=hJi8OrjZc1iKoVfLfLizMSAqq1BtY~oYRjErGNoZeslB9FXOj2E1U0ydj0P~ndYtOHatpa9Dp3OkyEKh8G2MrZfsT1QSXAXR-Ywo9Alu1ZkhrpZIZXxOM8ndDYgL~Wog2TOp5GpCD8VYTvRSa8cIZosgtpDtlmQjz~HyamPHBi9LRNlJPYY1ufFYGe5W~L1UDYEIGZJfevYsEnTXT-wRddXRehcL4HWLRXaS0CuFogbqA-DukCvnZRRVP66KZ8oPPnAfVD~k74q4OwiTnUzr4v2Rb18~QzDCu9CXSQNowBIcix2L0qY5NaQZ0mpCMp-lYaCwvoanZTDMkUOcrdNApg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />
              <h3>
                Akinpelumi Akinlade
                <span>@akinlade</span>
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          {/* <h3>Overview</h3> */}
          <div className={styles.left}>
            <div className={styles.balance}>
              <div className={styles.funding}>
                <h1>Funding overview </h1>
                <div>
                  <div className={styles.escrow}>
                    <DebitCardIocn />
                    <h1>
                      &#8358;5,000 <span>Escrow Balance</span>
                    </h1>
                  </div>
                  <div className={styles.withdrawable}>
                    <CashIcon />
                    <h1>
                      &#8358;7,000 <span>Withdrawable Balance </span>
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.withdraw}>
                <p>
                  Available balance to bank
                  <br />
                  acoount
                </p>
                <Button>Withdraw</Button>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.graph}></div>
              <div className={styles["pie-chart"]}></div>
            </div>

            <div className={styles.events}>
              <div className={styles.header}>
                <h1>Recent events</h1>
                <div>
                  <span>Pending</span>
                  <span>Ongoing</span>
                  <span>Closed</span>
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th> </th>
                    <th>Items</th>
                    <th>Description</th>
                    <th>Final price</th>
                    <th>Countdown</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cards.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img
                          src="https://s3-alpha-sig.figma.com/img/fee9/0241/5b6f660acfad2e9a8a6fee90133a1f11?Expires=1658707200&Signature=c96IekTKe~E4-x1u4LK1Q6HI9olfmoY8VygfllpC3vH8hu2~QV4qgT0K-Gv45aoUBzzkY1Rqamqy~tjT6R6MEJlff80DC9wzwlSNYFBC2WxytyhKF0MMYghwTI5RT8N9jSp4~zcerQF299IZjEgGOR7zMky42tBYnL~EUas8Row583XR~ApCPPmVWm7tHrkcXs55G6HFtTHW6vdqWzIV7FafpwTW1~76bCPmFWgv5CqBw3fFr7ccEz~BqKvwk7mUf0ADmAWTpOMqkHl8nf4P-Qy2MO51C72MB8G-JZyd49f8vavzxjT8CIvf3vRuMjdtXwUQJoz9OF08pcFXmpyWvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                          alt=""
                        />
                      </td>
                      <td>Iphone 11</td>
                      <td>₦7,000</td>
                      <td>00:00:00:00</td>
                      <td>x</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.announcement}>
              <h2>Announcement</h2>
              <div className={styles.cards}>
                <div className={styles.card}>
                  {/* <NotificationBellIcon width={24} /> */}
                  <p>
                    The platform will backup your data early this morning or
                    late tonight, so please .......{" "}
                  </p>
                  <CloseIcon style={{position: "absolute", margin: ".7rem"}} width={18} />
                  <span>06-08-2022 </span>
                </div>
              </div>
            </div>
            <div className={styles["help-center"]}></div>
            <div className={styles.download}></div>
            <div className={styles.support}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

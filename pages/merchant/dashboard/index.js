import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../../services/merchant";
import { formatNumber } from "../../../utils";
import {
  LeftArrow,
  RightArrow,
  TimerIcon,
  NotificationBellIcon,
  NotificationBingIcon,
  CloseIcon,
  DebitCardIcon,
  CashIcon,
  UpwardTriangle,
  DownwardTriangle,
} from "../../../public/svg/icons";
import { lineChartData, pieChartData } from "../../../public/data";
import { motion } from "framer-motion";
import MerchantSideBar from "../../../components/merchant-sidebar";
import LineChart from "../../../components/line-chart";
import PieChart from "../../../components/pie-chart";
import Button from "../../../components/ui/button/";
import styles from "../../../styles/merchant/dashboard.module.scss";

export default function Index() {
  const { user } = useSelector((state) => state.auth.merchant);
  const [wallet, setWallet] = useState(null);
  const cards = [null, null, null, null, null, null, null];
  const [chartData, setchartData] = useState({
    labels: lineChartData.map((item) => item.month),
    datasets: [
      {
        id: 1,
        label: "Pending",
        data: lineChartData.map((item) => item.pending),
        backgroundColor: "#E1B20B",
        borderColor: "#E1B20B",
        borderWidth: 1,
      },
      {
        id: 2,
        label: "Disbursed",
        data: lineChartData.map((item) => item.disbursed),
        backgroundColor: "#743B96",
        borderColor: "#743B96",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    getBalance(user.merchant.id).then((response) =>
      setWallet(response.data.wallet)
    );
  }, []);

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
              <motion.img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
              <h3>
                Akinpelumi Akinlade
                <span>@akinlade</span>
              </h3>
              {/* <button>Log out</button> */}
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
                    <DebitCardIcon />
                    <h1>
                      &#8358;{formatNumber(wallet.escrow_balance)}{" "}
                      <span>Escrow Balance</span>
                    </h1>
                  </div>
                  <div className={styles.withdrawable}>
                    <CashIcon />
                    <h1>
                      &#8358;{formatNumber(wallet.withdrawable)}{" "}
                      <span>Withdrawable Balance </span>
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
              <div className={styles["line-chart"]}>
                <div className={styles.info}>
                  <div>
                    <span>Disbursed Items</span>
                    <h1>
                      79{" "}
                      <span>
                        <UpwardTriangle />
                        7%
                      </span>
                    </h1>
                  </div>
                  <div>
                    <span>Pending Items</span>
                    <h1>
                      5{" "}
                      <span>
                        <DownwardTriangle />
                        5%
                      </span>
                    </h1>
                  </div>
                </div>
                <LineChart
                  datasetIdKey="line-chart"
                  data={chartData}
                  options={{
                    plugins: {
                      legend: {
                        position: "bottom",
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          padding: 15,
                          boxWidth: 5,
                        },
                      },
                    },
                  }}
                />
              </div>
              <div className={styles["pie-chart"]}>
                {/* <h3>Total auction poster vs visit per auction</h3> */}
                <div className={styles.info}>
                  <div>
                    <span>Disbursed Items</span>
                    <h1>
                      79{" "}
                      <span>
                        <UpwardTriangle />
                        7%
                      </span>
                    </h1>
                  </div>
                  <div>
                    <span>Pending Items</span>
                    <h1>
                      5{" "}
                      <span>
                        <DownwardTriangle />
                        5%
                      </span>
                    </h1>
                  </div>
                </div>
                <PieChart
                  datasetIdKey="pie-chart"
                  data={{
                    labels: pieChartData.map((item) => item.label),
                    datasets: [
                      {
                        id: 1,
                        label: "Pending",
                        data: pieChartData.map((item) => item.stats),
                        backgroundColor: ["#E1B20B", "#743B96", "#8A92A6"],
                        borderColor: "#f3f3f3",
                        // borderColor: ["#E1B20B", "#743B96", "#8A92A6"],
                        borderWidth: 2,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        position: "right",
                        // rtl: true,
                        labels: {
                          usePointStyle: true,
                          pointStyle: "circle",
                          padding: 15,
                          boxWidth: 7,
                        },
                      },
                    },
                  }}
                />
              </div>
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

              <div style={{ height: "30rem", overflowY: "auto" }}>
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
                          <motion.img
                            src="https://s3-alpha-sig.figma.com/img/fee9/0241/5b6f660acfad2e9a8a6fee90133a1f11?Expires=1658707200&Signature=c96IekTKe~E4-x1u4LK1Q6HI9olfmoY8VygfllpC3vH8hu2~QV4qgT0K-Gv45aoUBzzkY1Rqamqy~tjT6R6MEJlff80DC9wzwlSNYFBC2WxytyhKF0MMYghwTI5RT8N9jSp4~zcerQF299IZjEgGOR7zMky42tBYnL~EUas8Row583XR~ApCPPmVWm7tHrkcXs55G6HFtTHW6vdqWzIV7FafpwTW1~76bCPmFWgv5CqBw3fFr7ccEz~BqKvwk7mUf0ADmAWTpOMqkHl8nf4P-Qy2MO51C72MB8G-JZyd49f8vavzxjT8CIvf3vRuMjdtXwUQJoz9OF08pcFXmpyWvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            alt=""
                          />
                        </td>
                        <td>Iphone 11</td>
                        <td>₦7,000</td>
                        <td>00:00:00:00</td>
                        <td>
                          <CloseIcon />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.announcement}>
              <h2>
                Announcements <span>3</span>
              </h2>
              <div className={styles.cards}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    {/* <NotificationBingIcon width="24" /> */}
                    <p>
                      The platform will backup your data early this morning or
                      late tonight, so please .......
                    </p>
                    <CloseIcon
                      style={{ position: "absolute", margin: ".7rem" }}
                      width={18}
                    />
                    <span>06-08-2022 </span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles["help-center"]}>
              <h2>Help center</h2>
              <div>
                <p>How it works</p>
                <p>Items Manual</p>
                <p>Dashboard conditions</p>
                <p>Unable to log in to this system</p>
              </div>
            </div>
            <div className={styles.download}>
              <h1>
                Download
                <br />
                Orientation Guide
              </h1>
            </div>
            <div className={styles.support}>
              <h1>Need help?</h1>
              <p>24/7 support center</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Index.requireMerchantAuth = true;

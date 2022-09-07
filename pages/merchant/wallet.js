import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBalance,
  getWithdrawalRequests,
  withdrawalRequest,
  cancelWithdrawalRequest,
} from "../../services/merchant";
import MerchantNav from "../../components/Merchant/Merchant_Nav";
import MerchantLayout from "../../components/MerchantLayout";
import { toast } from "react-toastify";
import Chart from "chart.js/auto";
import {
  Timer,
  Bell,
  MerchantWalletGreen,
  MerchantWalletPurple,
  WalletIcon,
  MerchantWalletMarkerRed,
  MerchantWalletMarkerGreen,
  MerchantWallet,
} from "../../public/svg/icons";
import { Line } from "react-chartjs-2";
import Loader from "../../components/loader";
import Image from "next/image";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/wallet.module.scss";
import { ClipLoader } from "react-spinners";

function Wallet() {
  const { user } = useSelector((state) => state.auth.merchant);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [withdrawalRequests, setWithdrawalRequests] = useState(null);
  const [withdrawalForm, setWithdrawalForm] = useState({
    amount: "",
    bankName: "",
    accountNumber: "",
    bankCode: "",
  });

  function handleWithdrawalForm(e) {
    const { name, value } = e.target;
    setWithdrawalForm({
      ...withdrawalForm,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const body = {
      wallet_id: wallet.id.toString(),
      amount: +withdrawalForm.amount,
      account_name: `${user.first_name} ${user.last_name}`,
      account_number: withdrawalForm.accountNumber,
      bank_name: withdrawalForm.bankName,
      bank_code: +withdrawalForm.bankCode,
    };
    withdrawalRequest(body)
      .then((response) => {
        console.log(response);
        setLoading(false);
        toast.success("Request sent!");
        setWithdrawalForm({
          amount: "",
          bankName: "",
          accountNumber: "",
          bankCode: "",
        });
      })
      .catch(() => setLoading(false));
  }

  useEffect(() => {
    getBalance(user?.merchant.id).then((response) =>
      setWallet(response.data.wallet)
    );
    getWithdrawalRequests(user?.merchant.id).then((response) =>
      setWithdrawalRequests(response.data.wallet)
    );
  }, []);

  return (
    <MerchantLayout title="My Wallet">
      {!wallet && <Loader />}

      {wallet && (
        <div className={styles.container}>
          <div>
            <div className={styles.chart}>
              <Line
                data={{
                  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
                  datasets: [
                    {
                      label: "Transactions",
                      data: [23000, 19000, 27000, 20000, 24000, 21000, 17000],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        padding: 15,
                        boxWidth: 0,
                      },
                    },
                  },
                }}
              />
            </div>

            <div className={styles.table}>
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>Ref</th>
                    <th>Date</th>
                    <th>Transaction Type</th>
                    <th>Transaction Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>#1236893</td>
                    <td>07-05-2022</td>
                    <td>Debit</td>
                    <td>Pending</td>
                  </tr>
                  {/* {data?.map((event, index) => (
                  <tr key={index} onClick={() => setModalDisplay(true)}>
                    <td onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{event.name}</td>
                    <td>{event.code}</td>
                    <td>{event.event}</td>
                    <td>{event.bidder_name}</td>
                    <td>{event.bidder_id}</td>
                    <td>{event.date}</td>
                  </tr>
                ))} */}
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles["total-balance"]}>
              <h4>Total Balance</h4>
              <h2>
                ₦
                {Number(
                  wallet?.escrow_balance + wallet?.withdrawable
                ).toLocaleString()}
              </h2>
            </div>

            <div className={styles.balance}>
              <div>
                <h1 className="text-2xl text-black">
                  Escrow
                  <br />
                  balance
                </h1>
                <p className="font-bold text-black">
                  ₦{Number(wallet?.escrow_balance).toLocaleString()}
                </p>
                <div>
                  <MerchantWalletMarkerGreen />
                  <p className="mx-2 text-green-600">0.5%</p>
                  <p className="text-black">Last Month</p>
                </div>
              </div>

              <div>
                <h1 className="text-2xl text-black">
                  Withdrawable
                  <br />
                  balance
                </h1>
                <p className="font-bold text-black">
                  ₦{Number(wallet?.withdrawable).toLocaleString()}
                </p>
                <div>
                  <MerchantWalletMarkerRed />
                  <p className="mx-2 text-red-600">0.5%</p>
                  <p className="text-black">Last Month</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <fieldset>
                <h4>Amount</h4>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={withdrawalForm.amount}
                  onChange={handleWithdrawalForm}
                  required
                />
              </fieldset>

              <fieldset>
                <h4>Bank Name</h4>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  value={withdrawalForm.bankName}
                  onChange={handleWithdrawalForm}
                  required
                />
              </fieldset>

              <fieldset>
                <h4>Bank Account Number</h4>
                <input
                  type="number"
                  name="accountNumber"
                  id="accountNumber"
                  value={withdrawalForm.accountNumber}
                  onChange={handleWithdrawalForm}
                  required
                />
              </fieldset>

              <fieldset>
                <h4>Bank Code</h4>
                <input
                  type="number"
                  name="bankCode"
                  id="bankCode"
                  value={withdrawalForm.bankCode}
                  onChange={handleWithdrawalForm}
                  required
                />
              </fieldset>

              <Button>
                {loading ? (
                  <ClipLoader size={10} color="#ffffff" />
                ) : (
                  "Withdraw"
                )}
              </Button>
            </form>
          </div>
        </div>
      )}
    </MerchantLayout>
  );
}

export default Wallet;

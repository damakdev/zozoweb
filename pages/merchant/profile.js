import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { merchantUpdate } from "../../store/slices/authSlice";
import { updateProfile, updateAddress, addBankAccount } from "../../services/merchant";
import { uploadAvatar, updateAvatar } from "../../services/profile";
import { ClipLoader } from "react-spinners";
import { Widget } from "@uploadcare/react-widget";
import {
  CheckMark,
  LocationIcon,
  EditIcon,
  ProfileCircleIcon,
} from "../../public/svg/icons";
import axios from "axios";
import MerchantLayout from "../../components/MerchantLayout";
import Select from "react-select";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/profile.module.scss";
import { toast } from "react-toastify";

function Profile() {
  const widgetApi = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.merchant);
  const [banks, setBanks] = useState(null)
  const [activeTab, setActiveTab] = useState("about");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user?.first_name,
    lastName: user?.last_name,
    email: user?.email,
    number: user?.phone_number,
    state: user?.address.state,
    city: user?.address.city,
    address: user?.address.street,
    zipCode: user?.address.zip_code,
    image: user?.avatar,
    bankCode: "",
    accountName: "",
    accountNumber: "",
  });

  function updateForm(e) {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  }

  function uploadImageHandler(e) {
    const { cdnUrl } = e;
    setProfileData({ ...profileData, image: cdnUrl });
    uploadAvatar(user.merchant.account_id, { avatar: cdnUrl }).then((response) => {
      console.log(response)
      toast.success("Updated successfully")
    }).catch(() => {
      setLoading(false)
      toast.error("An error occurred")
    })

  }

  function updateUserProfile() {
    setLoading(true);
    const body = {
      first_name: profileData.firstName,
      last_name: profileData.lastName,
      phone_number: profileData.number,
    };
    console.log(body);
    updateProfile(user.merchant.id, body).then((response) => {
      console.log(response);
      setLoading(false);
      toast.success("Updated successfully")
      // dispatch(merchantUpdate(user.merchant.id));
    }).catch(() => {
      setLoading(false)
      toast.error("An error occurred")
    })
  }

  function updateUserAddress() {
    setLoading(true);
    const body = {
      street: profileData.address,
      city: profileData.city,
      country: "nigeria",
      state: profileData.state,
      zip_code: profileData.zipCode,
    };
    updateAddress(user.merchant.id, body).then((response) => {
      setLoading(false);
      console.log(response);
      toast.success("Updated successfully")
    }).catch(() => {
      setLoading(false)
      toast.error("An error occurred")
    })
  }

  function updateUserBank() {
    setLoading(true);
    const body = {
      account_name: profileData.accountName,
      account_number: profileData.accountNumber,
      bank_code: profileData.bankCode,
      bank_name: banks.find((bank) => bank.code === profileData.bankCode).name,
    };
    console.log(body);
    addBankAccount(user.merchant.id, body).then((response) => {
      console.log(response);
      setLoading(false);
    }).catch(() => {
      setLoading(false)
      toast.error("An error occurred")
    })
  }

  function getAllBanks() {
    axios.get(`https://api.paystack.co/bank`).then((response) => setBanks(response.data.data))
  }

  return (
    <MerchantLayout title="My Profile">
      <div className={styles.container}>
        <div className={styles.preview}>
          {profileData.image && <motion.img
            src={profileData.image}
            alt=""
          />}
          <span onClick={() => widgetApi.current.openDialog()}>
            <EditIcon />
          </span>
          <div style={{ display: "none", position: "fixed" }} className="uploadcare-button">
            <Widget
              ref={widgetApi}
              onChange={uploadImageHandler}
              publicKey="db374fee85cbc01904a3"
            />
          </div>
          {!profileData.image && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={0.8}
            stroke="currentColor"
            width="27rem"
            height="27rem"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>}

          <div>
            <h1>{`${user?.first_name} ${user?.last_name}`}</h1>
            <p>
              <LocationIcon />
              {user.address.state}
            </p>
            {user.verified && (
              <h2>
                Verified
                <CheckMark />
              </h2>
            )}
            <div>
              <Button>DEACTIVATE ACCOUNT</Button>
              <Button>RESET PASSWORD</Button>
            </div>
          </div>
        </div>

        <div className={styles.details}>
          <ul>
            <li
              onClick={() => {
                setActiveTab("about");
                setEdit(false);
              }}
              className={activeTab === "about" ? styles.active : ""}
            >
              About
            </li>
            <li
              onClick={() => {
                setActiveTab("address");
                setEdit(false);
              }}
              className={activeTab === "address" ? styles.active : ""}
            >
              Address
            </li>
            <li
              onClick={() => {
                setActiveTab("bank");
                setEdit(false);
                getAllBanks()
              }}
              className={activeTab === "bank" ? styles.active : ""}
            >
              Bank
            </li>
          </ul>
          <AnimatePresence>
            {activeTab === "about" && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                <ul>
                  <li className="mb-8">
                    <p>BASIC INFORMATION</p>
                    <span
                      className="cursor-pointer"
                      onClick={() => setEdit((prevState) => !prevState)}
                    >
                      Edit
                      <EditIcon />
                    </span>
                  </li>
                  <li>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  {/* <li>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={profileData.email}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li> */}
                  <li>
                    <label htmlFor="number">Phone Number</label>
                    <input
                      type="number"
                      name="number"
                      value={profileData.number}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                </ul>
                <Button onClick={updateUserProfile}>
                  {loading ? (
                    <ClipLoader color="#ffffff" size={12} />
                  ) : (
                    "update"
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {activeTab === "address" && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                <ul>
                  <li className="mb-8">
                    <p>ADDRESS INFORMATION</p>
                    <span
                      className="cursor-pointer"
                      onClick={() => setEdit((prevState) => !prevState)}
                    >
                      Edit
                      <EditIcon />
                    </span>
                  </li>
                  <li>
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      name="state"
                      value={profileData.state}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      value={profileData.city}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={profileData.address}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="number"
                      name="zipCode"
                      value={profileData.zipCode}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                </ul>
                <Button onClick={updateUserAddress}>
                  {loading ? (
                    <ClipLoader color="#ffffff" size={12} />
                  ) : (
                    "update"
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeTab === "bank" && (
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "tween" }}
              >
                <ul>
                  <li className="mb-8">
                    <p>BANK INFORMATION</p>
                    <span
                      className="cursor-pointer"
                      onClick={() => setEdit((prevState) => !prevState)}
                    >
                      Edit
                      <EditIcon />
                    </span>
                  </li>
                  <li>
                    <label htmlFor="bankCode">Bank Name</label>
                    <select name="bankCode" id="bankCode"
                      disabled={!edit}
                      value={profileData.bankCode}
                      onChange={updateForm}
                    >
                      <option value="" disabled>{banks ? "Select Bank" : "Loading Banks..."}</option>
                      {banks?.map((bank) => <option key={bank.id} value={bank.code}>
                        {bank.name}
                      </option>)}
                    </select>
                  </li>
                  <li>
                    <label htmlFor="accountName">Account Name</label>
                    <input
                      type="text"
                      name="accountName"
                      value={profileData.accountName}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={profileData.accountNumber}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                </ul>
                <Button onClick={updateUserBank}>
                  {loading ? (
                    <ClipLoader color="#ffffff" size={12} />
                  ) : (
                    "update"
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MerchantLayout>
  );
}

export default Profile;

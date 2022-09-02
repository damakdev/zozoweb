import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { merchantUpdate } from "../../store/slices/authSlice";
import { updateProfile, updateAddress } from "../../services/merchant";
import { ClipLoader } from "react-spinners";
import { CheckMark, LocationIcon, EditIcon } from "../../public/svg/icons";
import MerchantLayout from "../../components/MerchantLayout";
import Button from "../../components/ui/button/";
import styles from "../../styles/merchant/profile.module.scss";

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.merchant);
  const [activeTab, setActiveTab] = useState("about");
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    number: user.phone_number,
    state: user.address.state,
    city: user.address.city,
    address: user.address.street,
    zipCode: user.address.zip_code,
  });

  function updateForm(e) {
    const { name, value } = e.target;
    setAbout({
      ...about,
      [name]: value,
    });
  }

  function updateUserProfile() {
    setLoading(true);
    const body = {
      first_name: about.firstName,
      last_name: about.lastName,
      phone_number: about.number,
    };
    updateProfile(user.merchant.id, body).then((response) => {
      console.log(response);
      // dispatch(merchantUpdate(user.merchant.id));
      setLoading(false);
    });
  }

  function updateUserAddress() {
    setLoading(true);
    const body = {
      street: user.address,
      city: user.city,
      country: user.country,
      state: user.state,
      zip_code: user.zipCode,
    };
    updateAddress(user.merchant.id, body).then((response) => {
      console.log(response);
      // dispatch(merchantUpdate(user.merchant.id));
      setLoading(false);
    });
  }

  return (
    <MerchantLayout title="My Profile">
      <div className={styles.container}>
        <div className={styles.preview}>
          <motion.img
            src="https://s3-alpha-sig.figma.com/img/9d62/547e/6dbdbf0baf2c07237eb5d13020a5ba0b?Expires=1662940800&Signature=dnAV6I6XtGt~5xfD5K1HVfguvYL4~C~jf57Z09h1GQd42TFFGgUbBFRFM2c53Ub6FEkIrY-8NNCTobvqFSXuQHs0MI7YdWO5~cKv3~fG9gC4UjbVS7-gK2KbGGROqfFCmJrHJgWtamqGEOebPikb3MQRC8HexGioLylRiiRJR9W2Hu5VSiGPfoS44-H2Epdh6N4s3nHZFfJipZBclf3cFFw3WMbWcQOy9IsguizETa-UxjMi9JGmBfY3A6N1WWcmK7-2TeSt1HQv6U018thg2eOUZH5vxfYdJhMquvCTtTVSrb8Dznn-RTkpdOpcFnun6T1q~b0pLn1bA2sLkVsobg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt=""
          />
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
          </ul>
          <AnimatePresence>
            {activeTab === "about" && (
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
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
                      value={about.firstName}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={about.lastName}
                      disabled={!edit}
                    />
                  </li>
                  {/* <li>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={about.email}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li> */}
                  <li>
                    <label htmlFor="number">Phone Number</label>
                    <input
                      type="number"
                      name="number"
                      value={about.number}
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
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
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
                      value={about.state}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      value={about.city}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={about.address}
                      onChange={updateForm}
                      disabled={!edit}
                    />
                  </li>
                  <li>
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="number"
                      name="zipCode"
                      value={about.zipCode}
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
        </div>
      </div>
    </MerchantLayout>
  );
}

export default Profile;

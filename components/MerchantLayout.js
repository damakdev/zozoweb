import React from "react";
import MerchantSideBar from "./merchant-sidebar/merchant-sidebar";
import MerchantHeader from "./merchant-header/merchant-header";
import styles from "../styles/merchant/merchant-layout.module.scss";

function MerchantLayout({ title, children }) {
  return (
    <>
      <MerchantSideBar />
      <MerchantHeader title={title} />
      <div className={styles.children}>{children}</div>
    </>
  );
}

export default MerchantLayout;

MerchantLayout.requireMerchantAuth = true;

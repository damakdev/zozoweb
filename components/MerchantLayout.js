import React from "react";
import MerchantSideBar from "./merchant-sidebar/merchant-sidebar";
import styles from "../styles/admin/admin-layout.module.scss";

function MerchantLayout({ children }) {
  return (
    // style={{ backgroundColor: "#E5E5E5" }}
    <div className="bg-white" >
      <MerchantSideBar />

      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default MerchantLayout;

MerchantLayout.requireMerchantAuth = true;

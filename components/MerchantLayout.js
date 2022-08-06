import React from "react";
import MerchantSideBar from "./merchant-sidebar/merchant-sidebar";
import styles from "../styles/admin/admin-layout.module.scss";

function MerchantLayout({ children }) {
  return (
    <div className="bg-white" style={{ backgroundColor: "#E5E5E5" }}>
      <MerchantSideBar />

      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default MerchantLayout;

MerchantLayout.requireMerchantAuth = true;

import React from "react";
import { useAccountInfo } from "../contexts/accountContext";

function VendorDashboardDummy() {
  const context = useAccountInfo();
  return (
    <>
      <div>VendorDashboardDummy</div>
      <div>token : {context.token}</div>
      <br />
      <div>account_type: {context.accountType}</div>
    </>
  );
}

export default VendorDashboardDummy;

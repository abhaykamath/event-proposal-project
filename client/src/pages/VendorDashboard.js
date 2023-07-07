import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAccountInfo } from "../contexts/accountContext";

const get_vendor_proposals_api =
  "http://localhost:4000/eventapp/api/v1/proposal/my";
const my_details_api =
  "http://localhost:4000/eventapp/api/v1/account/my-details";

function VendorDashboard() {
  const context = useAccountInfo();
  const [proposals, setProposals] = useState([]);
  const [username,setUsername]=useState("");

  const getAccountDetails = async () => {
    const res = await axios.get(my_details_api, {
      headers: { Authorization: `Bearer ${context.token}` },
    });
    const details = res.data.details;
    context.changeAccountDetails(details);
    context.changeAccountType(details.account_type);
    setUsername(details.name)
  };

  const getVendorProposals = async () => {
    const res = await axios.get(get_vendor_proposals_api, {
      headers: { Authorization: `Bearer ${context.token}` },
    });
    const data = res.data.data;
    setProposals([...data]);
  };
  useEffect(() => {
    getAccountDetails();
    getVendorProposals();
  }, []);
  return (
    <>
      <Navbar username={{username}}/>
      <Outlet context={{ proposals }} />
    </>
  );
}

export { VendorDashboard };

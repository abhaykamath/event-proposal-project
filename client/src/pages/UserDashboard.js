import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAccountInfo } from "../contexts/accountContext";
const url = "http://localhost:4000/eventapp/api/v1/proposal";

function UserDashboard() {
  const context = useAccountInfo();
  const navigate=useNavigate()
  useEffect(()=>
  {
    if(!localStorage.getItem('token'))
    {
      navigate('/home')
    }
  },[])

const all_proposals_api = "http://localhost:4000/eventapp/api/v1/proposal";
const my_details_api =
  "http://localhost:4000/eventapp/api/v1/account/my-details";

function UserDashboard() {
  const context = useAccountInfo();
  const [proposals, setProposals] = useState([]);
  const [proposalToView, setProposalToView] = useState("");
  const [selected, setSelected] = useState([]);

  const getAccountDetails = async () => {
    const res = await axios.get(my_details_api, {
      headers: { Authorization: `Bearer ${context.token}` },
    });
    const details = res.data.details;
    context.changeAccountDetails(details);
    context.changeAccountType(details.account_type);
    // console.log(details);
    setSelected([...details.proposals]);
  };

  const getAllProposals = async () => {
    const res = await axios.get(all_proposals_api, {
      headers: { Authorization: `Bearer ${context.token}` },
    });
    const data = res.data.data;
    // console.log(data);
    setProposals([...data]);
  };

  useEffect(() => {
    getAccountDetails();
    getAllProposals();
  }, []);

  return (
    <>
      <Navbar />
      <Outlet
        context={{
          proposals,
          proposalToView,
          setProposalToView,
          selected,
          setSelected,
        }}
      />
    </>
  );
}

export default UserDashboard;

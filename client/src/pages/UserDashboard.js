import React, { useEffect } from "react";
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

  // const getAllProposals = async () => {
  //   const res = await axios(url, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log(res.data);
  // };

  // useEffect(() => {
  //   getAllProposals();
  // }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      {/* {context.token}
      <br />
      {context.accountType} */}
    </>
  );
}

export default UserDashboard;

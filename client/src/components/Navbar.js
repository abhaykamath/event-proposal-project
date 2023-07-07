import React from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Navbar() {

  const navigate =useNavigate();

  function refreshPage() {
    localStorage.removeItem('token')
    // window.location.reload(false);\
    navigate('/home',{replace:true})
  }
import { useAccountInfo } from "../contexts/accountContext";

function Navbar({username}) {
  const context = useAccountInfo();
  return (
    <nav className="navbar-custom">
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-title">{`${context.accountType} Dashboard`}</div>
      <div className="navbar-profile">
        <div className="username">{username.username}</div>
        <div className="profile-picture">
          <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <button onClick={() => {refreshPage()}
          } className="logout-button">logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

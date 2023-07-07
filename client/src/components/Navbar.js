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
  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-title">User Dashboard</div>
      <div className="navbar-profile">
        <div className="username">Username</div>
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

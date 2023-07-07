import React from "react";
import { useNavigate } from "react-router-dom";
import { useAccountInfo } from "../contexts/accountContext";
import "../styles/Navbar.css";

function Navbar() {
  const context = useAccountInfo();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    // window.location.reload(false);
    navigate("/home", { replace: true });
  }

  return (
    <nav className="navbar-custom">
      <div className="navbar-logo">EVENTURA</div>
      <div className="navbar-title">
        {context.accountType === "USER" ? "User" : "Vendor"} Dashboard
      </div>
      <div className="navbar-profile">
        <div className="username">{context.accountDetails.name}</div>
        <div className="profile-picture">
          <i className="fa-solid fa-user"></i>
        </div>
        <div>
          <button
            onClick={() => {
              logout();
            }}
            className="logout-button"
          >
            Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

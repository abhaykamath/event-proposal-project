import React from "react";
import "../styles/Navbar.css";

function Navbar() {
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
          <button className="logout-button">logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

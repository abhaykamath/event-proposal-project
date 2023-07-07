import React, { useEffect } from "react";
import "../../styles/Home/Login.css";


function Login({ usernameRef, passwordRef }) {

  return (
    <div className="enter-details">
      <div className="sign-form-header">Login to your Account</div>
      <div>
        <input ref={usernameRef} placeholder="Phone / Email" />
      </div>
      <div>
        <input type="password" ref={passwordRef} placeholder="Password" />
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "../../styles/Home/Register.css";

function Register({
  nameRef,
  emailRef,
  contactRef,
  passwordRef,
  confirmPasswordRef,
}) {
  return (
    <div className="enter-details">
      <div className="sign-form-header">Register your Account</div>
      <div>
        <input ref={nameRef} placeholder="Name" />
      </div>
      <div>
        <input ref={emailRef} placeholder="Email" type="email" />
      </div>
      <div>
        <input ref={contactRef} placeholder="Contact" />
      </div>
      <div>
        <input type="password" ref={passwordRef} placeholder="Password" />
      </div>
      <div>
        <input
          type="password"
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
        />
      </div>
    </div>
  );
}

export default Register;

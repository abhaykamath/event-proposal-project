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
      <div>Register your Account</div>
      <div>
        <input ref={nameRef} placeholder="Name" />
      </div>
      <div>
        <input ref={emailRef} placeholder="Email" />
      </div>
      <div>
        <input ref={contactRef} placeholder="Contact" />
      </div>
      <div>
        <input ref={passwordRef} placeholder="Password" />
      </div>
      <div>
        <input ref={confirmPasswordRef} placeholder="Confirm Password" />
      </div>
    </div>
  );
}

export default Register;

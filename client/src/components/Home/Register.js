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
        <input ref={emailRef} placeholder="Email" type='email'/>
      </div>
      <div>
        <input ref={contactRef} placeholder="Contact" />
      </div>
      <div>
        <input ref={passwordRef} placeholder="Password" type='password'/>
      </div>
      <div>
        <input ref={confirmPasswordRef} placeholder="Confirm Password" type='password'/>
      </div>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import Loader from "../Loader";
import login from "../../utils/login";
import register from "../../utils/register";
import "../../styles/Home/ButtonBar.css";
import { useAccountInfo } from "../../contexts/accountContext";
import { useNavigate } from "react-router";

function ButtonBar({
  view,
  setView,
  accountType,
  nameRef,
  emailRef,
  contactRef,
  usernameRef,
  passwordRef,
  confirmPasswordRef,
  setDefaultView,
}) {
  const [loading, setLoading] = useState(false);
  const context = useAccountInfo();
  const navigate = useNavigate();

  function clearRegisterForm() {
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  }
  return (
    <div className="button-bar">
      {view === "login" ? (
        <div
          onClick={() => {
            setView("register");
          }}
          className="signup prevent-select"
        >
          Create Account
        </div>
      ) : (
        <div
          onClick={() => {
            setView("login");
          }}
          className="signup prevent-select"
        >
          <i className="fa-solid fa-arrow-left"></i> login
        </div>
      )}

      {view === "login" ? (
        <button
          id="login-bar-button"
          onClick={() => {
            setLoading(true);
            const payload = [
              accountType,
              usernameRef.current.value,
              passwordRef.current.value,
            ];
            if (!usernameRef.current.value || !passwordRef.current.value) {
              alert("Enter All Fields");
            } else {
              login(...payload, navigate, context, setLoading);
            }
          }}
        >
          {loading ? <Loader /> : "LOGIN"}
        </button>
      ) : (
        <button
          onClick={() => {
            setLoading(true);
            const payload = [
              accountType,
              nameRef.current.value,
              emailRef.current.value,
              contactRef.current.value,
              passwordRef.current.value,
              confirmPasswordRef.current.value,
            ];
            if (
              !nameRef.current.value ||
              !emailRef.current.value ||
              !contactRef.current.value ||
              !passwordRef.current.value ||
              !confirmPasswordRef.current.value
            ) {
              alert("All fields are required");
            } else if (
              passwordRef.current.value != confirmPasswordRef.current.value
            ) {
              alert("Both the Passwords are not same");
            } else if (passwordRef.current.value.length <= 10) {
              alert("Please Enter 10 digit Password");
            } else {
              register(
                ...payload,
                navigate,
                clearRegisterForm,
                setDefaultView,
                setLoading
              );
            }
          }}
        >
          {loading ? <Loader /> : "REGISTER"}
        </button>
      )}
    </div>
  );
}

export default ButtonBar;

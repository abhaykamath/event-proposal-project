import React, { useState } from "react";
import login from "../../utils/login";
import register from "../../utils/register";
import { useAccountInfo } from "../../contexts/accountContext";
import "../../styles/Home/ButtonBar.css";
import { useNavigate } from "react-router";
import Loader from "../Loader";

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
            login(...payload, navigate, context, setLoading);
          }}
        >
          {loading ? <Loader /> : "LOGIN"}
        </button>
      ) : (
        <button
          onClick={() => {
            const payload = [
              accountType,
              nameRef.current.value,
              emailRef.current.value,
              contactRef.current.value,
              passwordRef.current.value,
            ];
            register(...payload, navigate, clearRegisterForm, setDefaultView);
          }}
        >
          REGISTER
        </button>
      )}
    </div>
  );
}

export default ButtonBar;
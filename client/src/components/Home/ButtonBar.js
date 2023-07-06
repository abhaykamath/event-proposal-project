import React from "react";
import login from "../../utils/login";
import register from "../../utils/register";
import { useAccountInfo } from "../../contexts/accountContext";
import "../../styles/Home/ButtonBar.css";
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
          onClick={() => {
            const payload = [
              accountType,
              usernameRef.current.value,
              passwordRef.current.value,
            ];
            login(...payload, navigate, context);
          }}
        >
          LOGIN
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

import React, { useState } from "react";
import Loader from "../Loader";
import login from "../../utils/login";
import register from "../../utils/register";
import "../../styles/Home/ButtonBar.css";
import { useAccountInfo } from "../../contexts/accountContext";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function toastError(message) {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

function toastSuccess(message) {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

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
    <>
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
              const payload = [
                accountType,
                usernameRef.current.value,
                passwordRef.current.value,
              ];
              if (!usernameRef.current.value || !passwordRef.current.value) {
                toastError("Please fill all fields");
              } else {
                setLoading(true);
                login(...payload, navigate, context, setLoading, toastError);
              }
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
              if (
                !nameRef.current.value ||
                !emailRef.current.value ||
                !contactRef.current.value ||
                !passwordRef.current.value ||
                !confirmPasswordRef.current.value
              ) {
                toastError("Please fill all fields");
              } else if (
                passwordRef.current.value != confirmPasswordRef.current.value
              ) {
                toastError(`Passwords don't match`);
              } else if (passwordRef.current.value.length <= 10) {
                toastError("Please enter a 10 digit password");
              } else {
                setLoading(true);
                register(
                  ...payload,
                  navigate,
                  clearRegisterForm,
                  setDefaultView,
                  setLoading,
                  toastSuccess,
                  toastError
                );
              }
            }}
          >
            {loading ? <Loader /> : "REGISTER"}
          </button>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default ButtonBar;

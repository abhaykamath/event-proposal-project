import axios from "axios";

const login_api = "http://localhost:4000/eventapp/api/v1/account/login";

const login = async (
  accountType,
  username,
  password,
  navigate,
  context,
  setLoading
) => {
  try {
    const res = await axios.post(login_api, {
      accountType: accountType.toUpperCase(),
      identifier_type: username.includes("@") ? "email" : "contact",
      identifier: username,
      password,
    });
    context.changeToken(res.data.token);
    context.changeAccountType(accountType);
    setLoading(false);
    if (accountType === "user") {
      navigate("/user-dashboard", { replace: true });
    } else {
      navigate("/vendor-dashboard", { replace: true });
    }
  } catch (error) {
    setLoading(false);
    console.log(error.response);
  }
};

export default login;
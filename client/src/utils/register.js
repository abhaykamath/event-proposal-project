import axios from "axios";

const register_api =
  "https://event-proposal-backend-k9e3.onrender.com/eventapp/api/v1/account/register";

const register = async (
  accountType,
  name,
  email,
  contact,
  password,
  navigate,
  clearRegisterForm,
  setDefaultView,
  setLoading
) => {
  try {
    const res = await axios.post(register_api, {
      account_type: accountType.toUpperCase(),
      name,
      email,
      password,
      contact,
    });
    setLoading(false);
    // console.log(res);
    clearRegisterForm();
    setDefaultView();
  } catch (error) {
    setLoading(false);
    // console.log(error.response);
    alert(error.response.data.message);
  }
};

export default register;

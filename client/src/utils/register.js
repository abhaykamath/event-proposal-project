import axios from "axios";

const register_api = "http://localhost:4000/eventapp/api/v1/account/register";

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
    // navigate("/user-dashboard");
    console.log(res);
    clearRegisterForm();
    setDefaultView();
    setLoading(false);
  } catch (error) {
    console.log(error.response);
    alert(error.response.data.message);
    setLoading(false);
  }
};

export default register;

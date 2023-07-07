import React, { useContext, useState } from "react";

const AccountContext = React.createContext();

export function useAccountInfo() {
  return useContext(AccountContext);
}

export function AccountProvider({ children }) {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTU2YjZhMzUwMzJmMzZmYmE2YWE5NCIsImlhdCI6MTY4ODY5MjgwOCwiZXhwIjoxNjg4NzM2MDA4fQ.bIsEyIeBGkmyULHATUpmuhVF4vrEbbw1xCYr3c8CekE"
  );
  const [accountType, setAccountType] = useState("");
  const [accountDetails, setAccountDetails] = useState();

  return (
    <AccountContext.Provider
      value={{
        token,
        changeToken: (new_token) => {
          setToken(new_token);
        },
        accountType,
        changeAccountType: (new_account_type) => {
          setAccountType(new_account_type);
        },
        accountDetails,
        changeAccountDetails: (new_details) => {
          setAccountDetails({ ...new_details });
        },
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

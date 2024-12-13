import axios from "axios";
import { UserLoginContext } from "./userLoginContext";
import { useState } from "react";
function UserLoginStore({ children }) {
  let [curr, setcurr] = useState(null);
  let [status, setStatus] = useState(false);
  let [token, setToken] = useState("");
  let [err, setErr] = useState("");
  async function loginuser(obj) {
    try {
      const res = await axios.get("http://localhost:3000/users", obj);
      if (res.data.length !== 0) {
        setStatus(true)
        setErr("");
        setcurr(res.data[0]);
      } else {
        setErr("User not found");
      }
    } catch (error) {
      setErr("Something went wrong. Please try again later.", error);
    }
  }
  function logoutuser() {
    setcurr({});
    setStatus(false);
    setErr("");
    sessionStorage.removeItem("loginDetails");
  }
  return (
    <UserLoginContext.Provider
      value={{
        loginuser,
        logoutuser,
        status,
        setStatus,
        err,
        setErr,
        curr,
        setcurr,
        token,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
}

export default UserLoginStore;

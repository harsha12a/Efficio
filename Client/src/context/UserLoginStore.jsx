import axios from "axios";
import { UserLoginContext } from "./UserLoginContext";
import { useState } from "react";
function UserLoginStore({ children }) {
  let [curr, setcurr] = useState(null);
  let [status, setStatus] = useState(false);
  let [token, setToken] = useState("");
  let [err, setErr] = useState("");
  async function loginuser(obj) {
    try {
      const res = await axios.post("http://localhost:3001/user/login", obj);
      if (res.data.payload !== null) {
        setStatus(true)
        setErr("");
        setcurr(res.data.payload);
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
    // sessionStorage.removeItem("loginDetails");
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

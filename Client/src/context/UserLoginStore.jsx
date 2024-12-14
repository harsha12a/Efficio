import axios from "axios";
import { UserLoginContext } from "./UserLoginContext";
import { useEffect, useState } from "react";
function UserLoginStore({ children }) {
  let [status, setStatus] = useState(false);
  let [token, setToken] = useState("");
  let [err, setErr] = useState("");
  let user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if (user) {
      setStatus(true);
    }
  }, [user]);
  async function loginuser(obj) {
    axios
      .post("https://efficio-one.vercel.app/user/login", obj)
      .then((res) => {
        if (res.data.message === "login success") {
          setStatus(true);
          sessionStorage.setItem("user", JSON.stringify(res.data.payload));
          setErr("");
        } else {
          setErr(res.data.message);
        }
      })
      .catch((err) => {
        setErr(err.message);
      });
  }
  function logoutuser() {
    sessionStorage.removeItem("user");
    setStatus(false);
    setErr("");
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
        token,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
}

export default UserLoginStore;

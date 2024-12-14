import "./Header.css";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import Logo from "../../assets/photos/logo.png";
import { useContext } from "react";
import { UserLoginContext } from "../../context/userLoginContext";
import { GiArchiveRegister } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function Header() {
  let { logoutuser, status } = useContext(UserLoginContext);

  return (
    <div className="d-flex flex-wrap justify-content-between header">
      <h1>
        <img className="logo" src={Logo} alt="" />
      </h1>
      {!status ? (
        <ul className="nav fs-5 p-3">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              <HiOutlineHome className=" fs-3 text-warning " /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="register" className="nav-link text-white">
              <GiArchiveRegister className="me-2 fs-3 text-warning " />
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="login" className="nav-link text-white">
              <IoLogIn className=" me-2 fs-3 text-warning " />
              Login
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav fs-5 p-3">
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link text-white">
              <HiOutlineHome className=" fs-3 text-warning " /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="login"
              className="nav-link text-white"
              onClick={logoutuser}
            >
              <IoLogOut className="fs-3 text-warning me-2 " />
              Logout
            </Link>
          </li>
          <li className="nav-item">
          <Link to="/userProfile" className="nav-link text-white">
              <CgProfile className=" fs-3 text-warning " /> Profile
            </Link>
          </li>
        </ul>
      )}

    </div>
  );
}

export default Header;

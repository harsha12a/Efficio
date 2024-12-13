import "./Header.css";
import { Link } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaSignInAlt } from "react-icons/fa";
import { FcStumbleupon } from "react-icons/fc";
import Logo from "../../assets/photos/logo.png";
// import {useContext} from "react";
// import { userLoginContext } from "../../context/UserLoginContext";

function Header() {
//   let { logoutUser = () => {}, userLoginStatus } = useContext(userLoginContext);

  return (
    <div className="d-flex flex-wrap justify-content-between header">
      <h1>
        {" "}
      <img className="logo" src={Logo} alt="" />
      </h1>
      <ul className="nav fs-5 p-3">
        <li className="nav-item">
          <Link to="/" className="nav-link text-white">
            <HiOutlineHome className="fs-3 text-warning " /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="register" className="nav-link text-white">
            <SiGnuprivacyguard className="fs-3 text-warning " />
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="login" className="nav-link text-white">
            <SiGnuprivacyguard className="fs-3 text-warning " />
            Login
          </Link>
        </li>
        
        {/* {userLoginStatus === false ? (
          <li className="nav-item">
            <Link to="login" className="nav-link text-white">
              <FaSignInAlt className="fs-3 text-warning me-2 " />
              Login
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="login" className="nav-link text-white" onClick={logoutUser}>
              <FaSignInAlt className="fs-3 text-warning me-2 " />
              Logout
            </Link>
          </li>
          
        )} */}
    </ul>
    </div>
  );
}

export default Header;
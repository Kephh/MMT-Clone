import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext.jsx";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import "./nav.css";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handlelogout = (ev) => {
    ev.preventDefault();
    axios.post("/auth/logout");
    dispatch({ type: "LOGOUT" });
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span>
          <Link to="/">
            <img
              className="logo"
              src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
              alt=""
            />
          </Link>
        </span>
        {user ? (
          <div className="dropdown">
            <button className="dropbtn">
              <FaUserCircle />
              &emsp;{user.username}
            </button>
            <div className="dropdown-content">
              <Link to="/myaccount" style={{ textDecoration: "none" }}>
                <p>My Bookings</p>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <p onClick={handlelogout} className="plogout">
                  Logout
                </p>
              </Link>
            </div>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleLogin}>
              <TbLogout className="loginicon" />
              &nbsp;Log in / Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

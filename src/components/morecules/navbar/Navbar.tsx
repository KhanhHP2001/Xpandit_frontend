import "./navbar.scss";
import { useState } from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
  setShowDropdown((prevState) => !prevState);
  };
  const nagivateToUserProfile = () => {
    navigate("/userProfile");
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search"></div>
        <div className="items">
          <div className="item">
            <h3>Welcome User</h3>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
              onClick={toggleDropdown}
            />
            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-item" onClick={nagivateToUserProfile}>
                  <AccountBoxIcon style={{ fontSize: 12 }} /> User Profile
                </div>
                <div className="dropdown-item">
                  <LogoutIcon style={{ fontSize: 12 }} /> Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

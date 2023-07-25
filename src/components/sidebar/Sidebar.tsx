import "./sidebar.scss";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {

  // const { dispatch, currentUser } = useContext(AuthContext);
  // const logout = () => {
  //   localStorage.clear();

  //   dispatch({ type: "LOGOUT" });
  // };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Xpandit</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              {/* <DashboardIcon className="icon" /> */}
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span>Nhân viên</span>
            </li>
          </Link>
          {/* <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Lương</span>
            </li>
          </Link> */}
          <Link to="/salary" style={{ textDecoration: "none" }}>
            <li>
              {/* <CreditCardIcon className="icon" /> */}
              <span>Tính Lương</span>
            </li>
          </Link>
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">USEFUL</p>
          <Link to="/attendanceData" style={{ textDecoration: "none" }}>
            <li>
              {/* <InsertChartIcon className="icon" /> */}
              <span>Dữ liệu tính lương</span>
            </li>
          </Link>

          <li>
            {/* <NotificationsNoneIcon className="icon" /> */}
            <span>Thông báo</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            {/* <SettingsSystemDaydreamOutlinedIcon className="icon" /> */}
            <span>System </span>
          </li>
          <li>
            {/* <PsychologyOutlinedIcon className="icon" /> */}
            <span>Logs</span>
          </li>
          <li>
            {/* <SettingsApplicationsIcon className="icon" /> */}
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            {/* <AccountCircleOutlinedIcon className="icon" /> */}
            <span>Profile</span>
          </li>
          <li >
            {/* <ExitToAppIcon className="icon" /> */}
            <span>Logout</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;

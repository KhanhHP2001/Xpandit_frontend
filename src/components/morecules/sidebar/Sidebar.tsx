import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaymentIcon from '@mui/icons-material/Payment';

const Sidebar = () => {
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
              <span><DashboardIcon style={{ fontSize: 15 }} /> Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <span><GroupIcon style={{ fontSize: 16 }} /> Nhân viên</span>
            </li>
          </Link>
          <Link to="/salary" style={{ textDecoration: "none" }}>
            <li>
              <span><AttachMoneyIcon style={{ fontSize: 16 }} /> Tính Lương</span>
            </li>
          </Link>
          <p className="title">PAYMENT</p>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <li>
              <span><PaymentIcon style={{ fontSize: 16 }} /> Gia Hạn Gói</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

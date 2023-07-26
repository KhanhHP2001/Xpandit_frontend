import "./sidebar.scss";
import { Link } from "react-router-dom";

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
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <span>Nhân viên</span>
            </li>
          </Link>
          <Link to="/salary" style={{ textDecoration: "none" }}>
            <li>
              <span>Tính Lương</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

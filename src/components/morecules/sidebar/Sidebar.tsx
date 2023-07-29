import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentIcon from "@mui/icons-material/Payment";
import DeleteIcon from "@mui/icons-material/Delete";

interface SideBarProps {
  onChange?: (e: SidebarType) => void;
}

export enum SidebarType {
  main = "Main",
  employees = "Employees",
  salary = "Salary",
  bin = "Bin",
}

const Sidebar = (props: SideBarProps) => {
  const { onChange } = props;
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
          <li onClick={() => onChange && onChange(SidebarType.main)}>
            <span>
              <DashboardIcon style={{ fontSize: 15 }} />
              Dashboard
            </span>
          </li>
          <p className="title">LISTS</p>
          <li onClick={() => onChange && onChange(SidebarType.employees)}>
            <span>
              <GroupIcon style={{ fontSize: 16 }} />
              Nhân viên
            </span>
          </li>
          <li onClick={() => onChange && onChange(SidebarType.salary)}>
            <span>
              <AttachMoneyIcon style={{ fontSize: 16 }} />
              Tính Lương
            </span>
          </li>
          <li onClick={() => onChange && onChange(SidebarType.bin)}>
            <span>
              <DeleteIcon style={{ fontSize: 16 }} />
              Thùng rác
            </span>
          </li>
          <p className="title">PAYMENT</p>
          <Link to="/payment" style={{ textDecoration: "none" }}>
            <li>
              <span>
                <PaymentIcon style={{ fontSize: 16 }} /> Gia Hạn Gói
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

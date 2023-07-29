import Navbar from "../../components/morecules/navbar/Navbar";
import "./ManagerHome.scss";
import Featured from "../../components/morecules/featured/Featured";
import List from "../../components/morecules/table/Table";
import { SidebarType } from "../../components/morecules/sidebar/Sidebar";

const ManagerHome = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="widgets"></div>
        <div className="charts">
          <Featured employees={[]} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List listData={[]} type={SidebarType.employees} />
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;

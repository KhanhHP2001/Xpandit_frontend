import Navbar from "../../components/morecules/navbar/Navbar";
import "./ManagerHome.scss";
import Featured from "../../components/morecules/featured/Featured";
import List from "../../components/morecules/table/Table";

const ManagerHome = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Navbar />
        <div className="widgets"></div>
        <div className="charts">
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;

import "./home.scss";
// import Featured from "../../components/morecules/featured/Featured";
import List from "../../components/morecules/table/Table";
import Sidebar from "../../components/morecules/sidebar/Sidebar";
import Navbar from "../../components/morecules/navbar/Navbar";
import FormDialog from "../../components/atoms/form/form";

const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <FormDialog />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

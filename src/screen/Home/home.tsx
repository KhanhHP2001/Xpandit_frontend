import "./home.scss";
import Featured from "../../components/morecules/featured/Featured";
import List from "../../components/morecules/table/Table";
import Sidebar from "../../components/morecules/sidebar/Sidebar";
import Navbar from "../../components/morecules/navbar/Navbar";
import FormDialog from "../../components/atoms/form/form";
import { EmployeesEntity } from "../../data/query/home/home-query";
import { useSubmitEmployees } from "../../data/mutation/home/home-mutation";

const HomePage = () => {
  const { mutateAsync: submitMutate } = useSubmitEmployees();

  const handleSubmit = async (value: EmployeesEntity) => {
    try {
      const response = await submitMutate(value);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Featured />
        <div className="widgets">
          <FormDialog
            getValue={(value: EmployeesEntity) => {
              handleSubmit(value);
            }}
          />
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

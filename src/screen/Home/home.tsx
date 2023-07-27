import "./home.scss";
import Featured from "../../components/morecules/featured/Featured";
import List, { ListDataType } from "../../components/morecules/table/Table";
import Sidebar from "../../components/morecules/sidebar/Sidebar";
import Navbar from "../../components/morecules/navbar/Navbar";
import FormDialog from "../../components/atoms/form/form";
import { EmployeesEntity } from "../../data/query/home/home-query";
import {
  useEmployees,
  useSubmitEmployees,
} from "../../data/mutation/home/home-mutation";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const HomePage = () => {
  const { mutateAsync: submitMutate } = useSubmitEmployees();
  const [employees, setEmployees] = useState<ListDataType[]>([]);
  const { data, isLoading } = useEmployees();

  useEffect(() => {
    if (data) {
      setEmployees(data);
    }
  }, [data]);

  const handleSubmit = async (value: EmployeesEntity) => {
    try {
      const response = await submitMutate(value);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Featured employeesLength={employees.length} />
        <div className="widgets">
          <FormDialog
            getValue={(value: EmployeesEntity) => {
              handleSubmit(value);
            }}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List listData={employees} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

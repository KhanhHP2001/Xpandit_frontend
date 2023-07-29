import "./home.scss";
import Featured from "../../components/morecules/featured/Featured";
import List from "../../components/morecules/table/Table";
import Sidebar, {
  SidebarType,
} from "../../components/morecules/sidebar/Sidebar";
import Navbar from "../../components/morecules/navbar/Navbar";
import FormDialog from "../../components/atoms/form/form";
import { EmployeesEntity } from "../../data/query/home/home-query";
import {
  useEmployees,
  useSubmitEmployees,
} from "../../data/mutation/home/home-mutation";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { mutateAsync: submitMutate } = useSubmitEmployees();
  const [employees, setEmployees] = useState<EmployeesEntity[]>([]);
  const [sideNavigate, setSideNavigate] = useState(SidebarType.main);
  const { data, isLoading, isError } = useEmployees();
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  useEffect(() => {
    if (data) {
      setEmployees(data);
    }
  }, [data]);

  const handleSubmit = async (value: EmployeesEntity) => {
    try {
      await submitMutate(value);
    } catch (e) {
      console.log(e);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <CircularProgress />
      </div>
    );
  }

  if (isError) {
    window.location.reload();
  }

  return (
    <div className="home">
      <Sidebar
        onChange={(e) => {
          setSideNavigate(e);
        }}
      />
      <div className="homeContainer">
        <Navbar />
        <MainContent
          type={sideNavigate}
          handleSubmit={handleSubmit}
          employees={employees}
        />
      </div>
    </div>
  );
};

export default HomePage;

interface MainContentType {
  type: SidebarType;
  handleSubmit: (value: EmployeesEntity) => void;
  employees: EmployeesEntity[];
}
const MainContent = (props: MainContentType) => {
  const { type, handleSubmit, employees } = props;
  switch (type) {
    case SidebarType.main:
      return (
        <div>
          <Featured employees={employees} />
          <div className="listContainer">
            <div className="listTitle">Top Employees</div>
            <List type={SidebarType.main} listData={employees} />
          </div>
        </div>
      );
    case SidebarType.employees:
      return (
        <>
          <div className="widgets">
            <FormDialog
              getValue={(value: EmployeesEntity) => {
                handleSubmit(value);
              }}
            >
              <div>Add Employees</div>
            </FormDialog>
          </div>
          <div className="listContainer">
            <div className="listTitle">Employees list</div>
            <List type={SidebarType.employees} listData={employees} />
          </div>
        </>
      );
    case SidebarType.salary:
      return (
        <div className="listContainer">
          <div className="listTitle">Employees salary</div>
          <List type={SidebarType.salary} listData={employees} />
        </div>
      );
    default:
      return <div></div>;
  }
};

import "./featured.scss";
import { useState, useEffect } from "react";
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useEmployees } from "../../../data/mutation/home/home-mutation";
const Featured = () => {
  const [employees, setEmployees] = useState([]);
  const { mutateAsync: employeesMutate } = useEmployees();
  const totalEmployees = 100;
  const totalSalaryThisMonth = 15000;

  const getEmployees = async () => {
    try {
      const dataEmployees = await employeesMutate();
      setEmployees(dataEmployees);
    }
    catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="featured">

      <div className="box">
        <div className="top">
          <h1 className="title">Total Employees</h1>
        </div>
        <div className="bottom">
          <PeopleIcon style={{ fontSize: 50 }} />
          <p className="amount">{employees.length}</p>
          <p className="desc">Total employees in the company</p>
        </div>
      </div>

      <div className="box">
        <div className="top">
          <h1 className="title">Total Salary</h1>
        </div>
        <div className="bottom">
          <MonetizationOnIcon style={{ fontSize: 50 }} />
          <p className="amount">{totalSalaryThisMonth} vnd</p>
          <p className="desc">Total salary to be paid this month</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;

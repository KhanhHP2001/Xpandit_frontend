import "./featured.scss";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import {
  EmployeeStatus,
  EmployeesEntity,
} from "../../../data/query/home/home-query";

interface FeatureProps {
  employees: EmployeesEntity[];
}

const Featured = (props: FeatureProps) => {
  const { employees } = props;

  const totalSalaryThisMonth = () => {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].status === EmployeeStatus.approved) {
        totalSalary += employees[i].salary_per_date * employees[i].working_date;
      }
    }
    return totalSalary;
  };

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
          <p className="amount">{totalSalaryThisMonth()} vnd</p>
          <p className="desc">Total salary to be paid this month</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;

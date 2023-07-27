import "./featured.scss";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

interface FeatureProps {
  employeesLength: number;
}

const Featured = (props: FeatureProps) => {
  const { employeesLength } = props;

  const totalSalaryThisMonth = 15000;

  return (
    <div className="featured">
      <div className="box">
        <div className="top">
          <h1 className="title">Total Employees</h1>
        </div>
        <div className="bottom">
          <PeopleIcon style={{ fontSize: 50 }} />
          <p className="amount">{employeesLength}</p>
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

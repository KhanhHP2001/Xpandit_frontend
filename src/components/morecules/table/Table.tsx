import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteEmployees } from "../../../data/mutation/home/home-mutation";

export type ListDataType = {
  _id: string;
  date: string;
  avatar: string;
  date_off: number;
  email: string;
  name: string;
  salary_per_date: number;
  status: string;
  working_date: string;
};

interface ListProps {
  listData: ListDataType[];
}

const List = (props: ListProps) => {
  const { listData } = props;
  const { mutateAsync: deleteMutate } = useDeleteEmployees();

  const handleDeleteEmployees = async (id: string) => {
    try {
      const response = await deleteMutate(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">User ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Working date</TableCell>
            <TableCell className="tableCell">Date off</TableCell>
            <TableCell className="tableCell">Salary per day</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listData.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="tableCell">{item._id}</TableCell>
              <TableCell className="tableCell">
                {/* <img src={item.avatar} alt="" className="image" /> */}
                {item.name}
              </TableCell>
              <TableCell className="tableCell">{item.email}</TableCell>
              <TableCell className="tableCell">{item.date}</TableCell>
              <TableCell className="tableCell">{item.working_date}</TableCell>
              <TableCell className="tableCell">{item.date_off}</TableCell>
              <TableCell className="tableCell">
                {item.salary_per_date}
              </TableCell>
              <TableCell className="tableCell">
                <span className={`status ${item.status}`}>{item.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                <button
                  onClick={() => {
                    handleDeleteEmployees(item._id);
                  }}
                >
                  <DeleteIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

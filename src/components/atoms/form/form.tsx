import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  EmployeesEntity,
  EmployeesStatus,
} from "../../../data/query/home/home-query";

interface FormProps {
  getValue: (value: EmployeesEntity) => void;
}

export default function FormDialog(props: FormProps) {
  const { getValue } = props;

  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    getValue
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Employees
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent
          style={{
            padding: 20,
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Employees Id"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Employees name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="working-date"
            label="Working date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="date-off"
            label="Date off"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salary per hour"
            fullWidth
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={EmployeesStatus.Approve}>Approve</MenuItem>
              <MenuItem value={EmployeesStatus.Pending}>Pending</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add Employees</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

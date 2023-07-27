import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { EmployeesEntity } from "../../../data/query/home/home-query";
import { useUploadImage } from "../../../data/mutation/home/home-mutation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface FormProps {
  getValue: (value: EmployeesEntity) => void;
}

export default function FormDialog(props: FormProps) {
  const { getValue } = props;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workingDate, setWorkingDate] = useState("");
  const [dateOff, setDateOff] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [imageData, setImageData] = useState("");
  const { mutateAsync: uploadMutate } = useUploadImage();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    clearCache();
  };

  const clearCache = () => {
    setName("");
    setEmail("");
    setWorkingDate("");
    setDateOff("");
    setSalary("");
    setDate("");
    setImageData("");
  };

  const handleSubmit = () => {
    if (name && email && workingDate && dateOff && salary && date) {
      setOpen(false);
      getValue({
        email: email,
        name: name,
        date: date,
        working_date: parseInt(workingDate),
        date_off: parseInt(dateOff),
        salary_per_date: parseInt(salary),
        avatar: imageData,
      });
      clearCache();
    } else {
      alert("please input correct data");
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formData = new FormData();
    if (event.target.files && event.target.files.length > 0) {
      formData.append("file", event.target.files[0]);
      try {
        const data = await uploadMutate(formData);
        setImageData(data.data.Location);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Employees
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "black" }}>Add new Employees</DialogTitle>
        <DialogContent
          style={{
            padding: 20,
          }}
        >
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Employees email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={date}
              onChange={(e) => {
                if (e) {
                  setDate(e);
                }
              }}
            />
          </LocalizationProvider>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Employees name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="date-off"
            label="Working date"
            type="number"
            margin="dense"
            fullWidth
            value={workingDate}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^0-9]/g, "");
              setWorkingDate(newValue);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="date-off"
            label="Date off"
            type="number"
            fullWidth
            value={dateOff}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^0-9]/g, "");
              setDateOff(newValue);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salary per date"
            type="number"
            fullWidth
            value={salary}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^0-9]/g, "");
              setSalary(newValue);
            }}
          />
          <div>
            <input type="file" onChange={handleImageChange} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Employees</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

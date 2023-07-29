import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import {
  EmployeeStatus,
  EmployeesEntity,
  FormType,
} from "../../../data/query/home/home-query";
import { FileResponseDto, useUploadImage } from "../../../data/mutation/home/home-mutation";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import dayjs from "dayjs";
import { Input } from '@mui/material';
import { PutObjectCommand } from "@aws-sdk/client-s3";



interface FormProps {
  getValue: (value: EmployeesEntity) => void;
  value?: EmployeesEntity;
  children: React.ReactNode;
  type?: FormType;
}

export default function FormDialog(props: FormProps) {
  const { getValue, value, children, type = FormType.submit } = props;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workingDate, setWorkingDate] = useState("");
  const [dateOff, setDateOff] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [imageData, setImageData] = useState<FileResponseDto | undefined>();
  const { mutateAsync: uploadMutate } = useUploadImage();
  const [status, setStatus] = useState("");

  const handleClickOpen = () => {
    if (type == FormType.change && value) {
      setName(value.name);
      setDate(value.date);
      setEmail(value.email);
      setWorkingDate(value.working_date.toString());
      setDateOff(value.date_off.toString());
      setSalary(value.salary_per_date.toString());
      setStatus(value.status ?? "");
    }
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
    setImageData(undefined);
  };

  const handleSubmit = () => {
    if (name && email && workingDate && dateOff && salary && date) {
      setOpen(false);
      type == FormType.submit
        ? getValue({
            email: email,
            name: name,
            date: date,
            working_date: parseInt(workingDate),
            date_off: parseInt(dateOff),
            salary_per_date: parseInt(salary),
            avatar: imageData,
          })
        : getValue({
            _id: value?._id,
            email: email,
            name: name,
            date: date,
            working_date: parseInt(workingDate),
            date_off: parseInt(dateOff),
            salary_per_date: parseInt(salary),
            avatar: imageData,
            status: status,
          });
      clearCache();
    } else {
      alert("please input correct data");
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      try {
        const data = await uploadMutate(event.target.files[0]);
        setImageData(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {children}
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
              defaultValue={dayjs(new Date(date))}
              onChange={(e) => {
                if (e) {
                  setDate(e.toString());
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
          {type == FormType.change && (
            <FormControl fullWidth margin="dense">
              <InputLabel id="dropdown-label">Select an option</InputLabel>
              <Select
                labelId="dropdown-label"
                id="dropdown"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                label="Select an status"
              >
                <MenuItem value={EmployeeStatus.pending}>
                  {EmployeeStatus.pending}
                </MenuItem>
                <MenuItem value={EmployeeStatus.approved}>
                  {EmployeeStatus.approved}
                </MenuItem>
                <MenuItem value={EmployeeStatus.onBoarding}>
                  {EmployeeStatus.onBoarding}
                </MenuItem>
                <MenuItem value={EmployeeStatus.rejected}>
                  {EmployeeStatus.rejected}
                </MenuItem>
              </Select>
            </FormControl>
          )}
          <div>
            <Input style={{ marginTop: '1rem' }} type="file" onChange={handleImageChange} />
            {imageData?.url && <img style={{ marginTop: '1rem' }} src={imageData.url} alt="avatar employee"/>}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {type == FormType.submit ? "Add Employees" : "Update Employees"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

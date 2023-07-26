export enum EmployeesStatus {
  Null,
  Approve,
  Pending,
}

export type EmployeesEntity = {
  id: string;
  name: string;
  workingDate: string;
  dateOff: string;
  salary: string;
  status: EmployeesStatus;
};

export enum EmployeesStatus {
  Null,
  Approve,
  Pending,
}

export type EmployeesEntity = {
  email: string;
  date: string;
  name: string;
  working_date: number;
  date_off: number;
  salary_per_date: number;
  avatar?: string;
};

export enum EmployeeStatus {
  approved = "Approved",
  pending = "Pending",
  onBoarding = "OnBoarding",
  rejected = "Rejected",
}

export enum FormType {
  submit = "submit",
  change = "change",
}

export type EmployeesEntity = {
  email: string;
  date: string;
  name: string;
  working_date: number;
  date_off: number;
  salary_per_date: number;
  avatar?: string;
  status?: string;
  _id?: string;
};

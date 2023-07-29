import { FileResponseDto } from "../../mutation/home/home-mutation";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";

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
  avatar?: FileResponseDto;
  status?: string;
  _id?: string;
};

export const employeesKey = "employees";

export const getEmployees = async () => {
  const response = await axiosInstance.get("/api/employee");
  return response.data;
};

export const useEmployees = () => {
  return useQuery([employeesKey], getEmployees);
};

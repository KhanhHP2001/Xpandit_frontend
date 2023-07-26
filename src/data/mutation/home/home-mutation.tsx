// Example usage in another file

import { useMutation } from "@tanstack/react-query";
import { axiosInstance, imageInstance } from "../../api/axios";
import { EmployeesEntity } from "../../query/home/home-query";

// Make a POST request with the custom Axios instance
export const setNewEmployees = async (employeesParams: EmployeesEntity) => {
  const dataAxiosInstance = await axiosInstance.post(
    "/api/employee",
    employeesParams
  );
  return dataAxiosInstance;
};

export const useSubmitEmployees = () => {
  return useMutation((employeesParams: EmployeesEntity) =>
    setNewEmployees(employeesParams)
  );
};

export const uploadImage = async (
  img: FormData
): Promise<{ data: { Location: string } }> => {
  const response = await imageInstance.post("/api/file/upload", img);
  return response;
};

export const useUploadImage = () => {
  return useMutation((img: FormData) => uploadImage(img));
};

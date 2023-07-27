// Example usage in another file

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance, imageInstance } from "../../api/axios";
import { EmployeesEntity } from "../../query/home/home-query";

const employeesKey = "employees";

export const getEmployees = async () => {
  const response = await axiosInstance.get("/api/employee");
  return response.data;
};

export const useEmployees = () => {
  return useQuery([employeesKey], getEmployees);
};

export const setNewEmployees = async (employeesParams: EmployeesEntity) => {
  const dataAxiosInstance = await axiosInstance.post(
    "/api/employee",
    employeesParams
  );
  return dataAxiosInstance;
};

export const useSubmitEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (employeesParams: EmployeesEntity) => setNewEmployees(employeesParams),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([employeesKey]);
      },
    }
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

export const deleteEmployees = async (id: string) => {
  const response = await imageInstance.patch("/api/employee/softDelete", {
    employee_ids: [id],
  });
  return response;
};

export const useDeleteEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteEmployees(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([employeesKey]);
    },
  });
};

// Example usage in another file

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance, imageInstance } from "../../api/axios";
import { EmployeesEntity } from "../../query/home/home-query";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../../utils/hooks/useS3";

const employeesKey = "employees";

export const getEmployees = async () => {
  const response = await axiosInstance.get("/api/employee");
  return response.data;
};

export const useEmployees = () => {
  return useQuery([employeesKey], getEmployees, {
    retry: 10,
  });
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

export interface FileResponseDto {key: string, url: string};

export const uploadImage = async (file: File): Promise<FileResponseDto | undefined> => {
    const current = new Date();
    const currentTime = current.getTime();
    const filename = `${currentTime}${file.name}`;
    const params = new PutObjectCommand({ 
        Bucket: 'my-whatsapp-bucket',
        Key: String(filename),
        Body: file,
        ACL: 'public-read',
        ContentType: file.type });
    try {
          const response = await s3Client.send(params);
          if(response) return {
            key: filename,
            url: `https://${'my-whatsapp-bucket'}.s3.amazonaws.com/${filename}`
          }
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      return undefined;
};

export const useUploadImage = () => {
  return useMutation((file: File) => uploadImage(file));
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

export const updateEmployees = async (employeesParams: EmployeesEntity) => {
  const response = await imageInstance.put(
    `/api/employee/${employeesParams._id}`,
    employeesParams
  );
  return response;
};

export const useUpdateEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (employeesParams: EmployeesEntity) => updateEmployees(employeesParams),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([employeesKey]);
      },
    }
  );
};

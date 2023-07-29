// Example usage in another file

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";
import {
  EmployeesEntity,
  deletedEmployeesKey,
} from "../../query/home/home-query";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../../../utils/hooks/useS3";

const employeesKey = "employees";

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

export interface FileResponseDto {
  key: string;
  url: string;
}

export const uploadImage = async (
  file: File
): Promise<FileResponseDto | undefined> => {
  const current = new Date();
  const currentTime = current.getTime();
  const filename = `${currentTime}${file.name}`;
  const params = new PutObjectCommand({
    Bucket: import.meta.env.VITE_AWS_IMAGE_BUCKET_NAME,
    Key: String(filename),
    Body: file,
    ACL: "public-read",
    ContentType: file.type,
  });
  try {
    const response = await s3Client.send(params);
    if (response)
      return {
        key: filename,
        url: `https://${
          import.meta.env.VITE_AWS_IMAGE_BUCKET_NAME
        }.s3.amazonaws.com/${filename}`,
      };
  } catch (error) {
    console.error("Error uploading file:", error);
  }
  return undefined;
};

export const useUploadImage = () => {
  return useMutation((file: File) => uploadImage(file));
};

export const deleteEmployees = async (id: string) => {
  const response = await axiosInstance.patch("/api/employee/softDelete", {
    employee_ids: [id],
  });
  return response;
};

export const useDeleteEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteEmployees(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([employeesKey]);
      queryClient.invalidateQueries([deletedEmployeesKey]);
    },
  });
};

export const restoreEmployees = async (id: string) => {
  const response = await axiosInstance.patch("/api/employee/restore", {
    employee_ids: [id],
  });
  return response;
};

export const useRestoreEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => restoreEmployees(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([employeesKey]);
      queryClient.invalidateQueries([deletedEmployeesKey]);
    },
  });
};

export const updateEmployees = async (employeesParams: EmployeesEntity) => {
  const response = await axiosInstance.put(
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

export const hardDeleteEmployees = async (id: string) => {
  const response = await axiosInstance.delete("/api/employee/hardDelete", {
    data: { employee_ids: [id] },
  });
  return response;
};

export const useHardDeleteEmployees = () => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => hardDeleteEmployees(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([deletedEmployeesKey]);
    },
  });
};

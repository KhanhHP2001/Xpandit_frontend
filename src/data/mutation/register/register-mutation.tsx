import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";

interface RegisterParams {
  name: string;
  email: string;
  password: string;
  date_of_birth: string;
}
export const register = async (registerParams: RegisterParams) => {
  const dataAxiosInstance = await axiosInstance.post(
    "/api/auth/register",
    registerParams
  );
  return dataAxiosInstance;
};

export const useRegister = () => {
  return useMutation((registerParams: RegisterParams) => register(registerParams));
};
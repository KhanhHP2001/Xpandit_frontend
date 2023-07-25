// Example usage in another file

import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";

interface LoginParams {
  email: string;
  password: string;
}
// Make a POST request with the custom Axios instance
export const login = async (loginParams: LoginParams) => {
  const dataAxiosInstance = await axiosInstance.post(
    "/api/auth/login",
    loginParams
  );
  return dataAxiosInstance;
};

export const useLogin = () => {
  return useMutation((logimParams: LoginParams) => login(logimParams));
};

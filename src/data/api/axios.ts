// src/api/auth.ts
import axios, { AxiosInstance } from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const BaseURL =
  "https://q0n3jsz1v7.execute-api.ap-southeast-1.amazonaws.com/dev";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 30000,
  withCredentials: false,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

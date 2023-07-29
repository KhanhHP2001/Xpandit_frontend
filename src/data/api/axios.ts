// src/api/auth.ts
import axios, { AxiosInstance } from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const BaseURL =
  "https://0y7kmzylv3.execute-api.ap-southeast-1.amazonaws.com/dev";

const token = localStorage.getItem("accessToken");

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 30000,
  withCredentials: false,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
    authorization: token ? `Bearer ${JSON.parse(token)}` : "",
  },
});

export const imageInstance: AxiosInstance = axios.create({
  baseURL: BaseURL,
  timeout: 30000,
  withCredentials: false,
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
    authorization: token ? `Bearer ${JSON.parse(token)}` : "",
  },
});

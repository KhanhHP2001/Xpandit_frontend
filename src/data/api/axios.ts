// src/api/auth.ts
import axios, { AxiosInstance } from "axios";

const token = localStorage.getItem("accessToken");

const BaseURL = import.meta.env.VITE_REACT_APP_API_URL;

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

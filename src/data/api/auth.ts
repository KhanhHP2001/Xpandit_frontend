// src/api/auth.ts
import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl =
  "https://q0n3jsz1v7.execute-api.ap-southeast-1.amazonaws.com/dev";

const headers = {
  accept: "*/*",
  "Content-Type": "application/json",
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    `${apiUrl}/api/auth/login`,
    { email: email, password: password },
    { headers }
  );
  return response.data;
};

import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";


export const getUser = async (id: string) => {
    const response = await axiosInstance.get(`/api/users`, { params: { id } });
    return response.data;
};
export const useUser = (id: string) => {
    return useMutation(() => getUser(id));
};
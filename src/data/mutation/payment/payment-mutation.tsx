import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../api/axios";
import { employeesKey } from "../../query/home/home-query";

export interface TransactionEntity {
  name: string;
  price: number;
  user: string;
  bonus_month: number;
}

export const setTransaction = async (transaction: TransactionEntity) => {
  const dataAxiosInstance = await axiosInstance.post(
    "/transaction",
    transaction
  );
  return dataAxiosInstance;
};

export const useSubmitTransaction = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (transaction: TransactionEntity) => setTransaction(transaction),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([employeesKey]);
      },
    }
  );
};

import { useMutation, useQueryClient } from "react-query";

import { createList } from "../../../api/services/list.service";

export const useCreateList = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, data } = useMutation(createList, {
    onSuccess: () => {
      queryClient.invalidateQueries(["lists"]);
    },
  });

  return {
    createList: mutate,
    createdList: data,
    isCreating: isLoading,
  };
};

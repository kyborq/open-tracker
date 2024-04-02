import { useMutation, useQueryClient } from "react-query";

import { createTask } from "../../../api/services/task.service";

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(createTask, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["tasks", data.list]);
    },
  });

  return {
    createTask: mutate,
    isTaskCreating: isLoading,
  };
};

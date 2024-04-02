import { useMutation } from "react-query";

import { createTask } from "../../../api/services/task.service";

export const useCreateTask = () => {
  const { mutate, isLoading } = useMutation(createTask);

  return {
    createTask: mutate,
    isTaskCreating: isLoading,
  };
};

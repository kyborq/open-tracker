import { useQuery } from "react-query";

import { getTasks } from "../../../api/services/task.service";

export const useGetTasks = (listId?: string) => {
  const { data, isLoading } = useQuery(["tasks", listId], () =>
    listId ? getTasks(listId) : undefined
  );

  return {
    tasks: data?.items || [],
    total: data?.totalItems || 0,
    isTasksLoading: isLoading,
  };
};

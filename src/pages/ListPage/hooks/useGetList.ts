import { useQuery } from "react-query";

import { getList } from "../../../api/services/list.service";

export const useGetList = (listId?: string) => {
  const { data, isLoading } = useQuery(["lists", listId], () =>
    listId ? getList(listId) : undefined
  );

  return { list: data, isLoading };
};

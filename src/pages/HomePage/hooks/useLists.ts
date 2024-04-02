import { useQuery } from "react-query";

import { getLists } from "../../../api/services/list.service";

export const useLists = () => {
  const { data, isLoading } = useQuery(["lists"], getLists);

  return {
    lists: data?.items || [],
    total: data?.totalItems || 0,
    isLoading,
  };
};

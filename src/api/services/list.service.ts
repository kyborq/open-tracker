import { api } from "../api";
import { CreateList, List } from "../models/list.model";
import { Created, Result } from "../models/result.model";

export const getLists = async () => {
  const { data } = await api.get<Result<List[]>>("/lists/records");
  return data;
};

export const createList = async (list: CreateList) => {
  const { data } = await api.post<Created>("/lists/records", list);
  return data;
};

import { api } from "../api";
import { Result } from "../models/result.model";
import { CreateTask, Task } from "../models/task.model";

export const getTasks = async (listId: string) => {
  const { data } = await api.get<Result<Task[]>>(
    `/tasks/records?filter=(list="${listId}")`
  );
  return data;
};

export const createTask = async (task: CreateTask) => {
  const { data } = await api.post<Task>("/tasks/records", task);
  return data;
};

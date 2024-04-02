import { api } from "../api";
import { CreateTask } from "../models/task.model";

export const createTask = async (task: CreateTask) => {
  await api.post("/tasks/records", task);
};

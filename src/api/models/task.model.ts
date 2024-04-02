export type Task = {
  id: string;
  collectionId: string;
  collectionName: string;
  created: Date;
  updated: Date;
  title: string;
  estimate: number;
  spended: number;
  isCompleted: boolean;
  list: string;
};

export type CreateTask = {
  title: string;
  estimate: number;
  list: string;
};

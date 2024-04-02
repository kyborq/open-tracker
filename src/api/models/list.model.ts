export type List = {
  id: string;
  title: string;
  isPrivate: boolean;
  created: Date;
  updated: Date;
};

export type CreateList = {
  title: string;
};

export type Result<T> = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: T;
};

export type Created = {
  id: string;
};

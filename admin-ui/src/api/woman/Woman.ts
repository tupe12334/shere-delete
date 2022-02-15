import { Man } from "../man/Man";

export type Woman = {
  createdAt: Date;
  id: string;
  man?: Man;
  updatedAt: Date;
};

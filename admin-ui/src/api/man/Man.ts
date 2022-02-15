import { Woman } from "../woman/Woman";

export type Man = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  women?: Woman | null;
};

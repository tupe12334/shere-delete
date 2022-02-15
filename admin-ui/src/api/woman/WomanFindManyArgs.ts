import { WomanWhereInput } from "./WomanWhereInput";
import { WomanOrderByInput } from "./WomanOrderByInput";

export type WomanFindManyArgs = {
  where?: WomanWhereInput;
  orderBy?: WomanOrderByInput;
  skip?: number;
  take?: number;
};

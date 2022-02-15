import { ManWhereInput } from "./ManWhereInput";
import { ManOrderByInput } from "./ManOrderByInput";

export type ManFindManyArgs = {
  where?: ManWhereInput;
  orderBy?: ManOrderByInput;
  skip?: number;
  take?: number;
};

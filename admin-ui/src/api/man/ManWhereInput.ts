import { StringFilter } from "../../util/StringFilter";
import { WomanWhereUniqueInput } from "../woman/WomanWhereUniqueInput";

export type ManWhereInput = {
  id?: StringFilter;
  women?: WomanWhereUniqueInput;
};

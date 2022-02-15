import { StringFilter } from "../../util/StringFilter";
import { ManWhereUniqueInput } from "../man/ManWhereUniqueInput";

export type WomanWhereInput = {
  id?: StringFilter;
  man?: ManWhereUniqueInput;
};

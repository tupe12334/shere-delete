import { Man as TMan } from "../api/man/Man";

export const MAN_TITLE_FIELD = "id";

export const ManTitle = (record: TMan): string => {
  return record.id || record.id;
};

import { Woman as TWoman } from "../api/woman/Woman";

export const WOMAN_TITLE_FIELD = "id";

export const WomanTitle = (record: TWoman): string => {
  return record.id || record.id;
};

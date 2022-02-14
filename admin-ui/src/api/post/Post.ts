import { Tag } from "../tag/Tag";

export type Post = {
  createdAt: Date;
  id: string;
  tags?: Array<Tag>;
  updatedAt: Date;
};

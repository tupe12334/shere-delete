import { Post } from "../post/Post";

export type Tag = {
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
};

import { TagCreateNestedManyWithoutPostsInput } from "./TagCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  tags?: TagCreateNestedManyWithoutPostsInput;
};

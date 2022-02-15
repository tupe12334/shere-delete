import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostTitle } from "../post/PostTitle";

export const TagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="post.id" reference="Post" label="Posts">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

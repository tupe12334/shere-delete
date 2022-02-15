import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TagTitle } from "../tag/TagTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="tag.id" reference="Tag" label="Tags">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

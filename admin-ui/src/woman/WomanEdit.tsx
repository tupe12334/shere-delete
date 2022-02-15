import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManTitle } from "../man/ManTitle";

export const WomanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="man.id" reference="Man" label="Man">
          <SelectInput optionText={ManTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

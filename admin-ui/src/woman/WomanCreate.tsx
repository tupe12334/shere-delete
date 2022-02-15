import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ManTitle } from "../man/ManTitle";

export const WomanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="man.id" reference="Man" label="Man">
          <SelectInput optionText={ManTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

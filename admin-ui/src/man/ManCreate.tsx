import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WomanTitle } from "../woman/WomanTitle";

export const ManCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="woman.id" reference="Woman" label="Women">
          <SelectInput optionText={WomanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WomanTitle } from "../woman/WomanTitle";

export const ManEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="woman.id" reference="Woman" label="Women">
          <SelectInput optionText={WomanTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

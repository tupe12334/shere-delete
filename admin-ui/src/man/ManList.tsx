import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WOMAN_TITLE_FIELD } from "../woman/WomanTitle";

export const ManList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Men"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Women" source="woman.id" reference="Woman">
          <TextField source={WOMAN_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};

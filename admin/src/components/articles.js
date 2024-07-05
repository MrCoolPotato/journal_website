import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const ArticleList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="createdAt" />
    </Datagrid>
  </List>
);

export const ArticleEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="content" />
      <TextInput source="author" />
    </SimpleForm>
  </Edit>
);

export const ArticleCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="content" />
      <TextInput source="author" />
    </SimpleForm>
  </Create>
);

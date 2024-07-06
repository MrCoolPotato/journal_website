import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { ArticleList, ArticleEdit, ArticleCreate } from "./components/articles";

const dataProvider = jsonServerProvider("http://localhost:5000/api");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="articles"
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
    />
  </Admin>
);

export default App;

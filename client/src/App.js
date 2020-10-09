import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import PostLists from "./components/PostLists";
import PostCreate from "./components/PostCreate";

function App() {
  return (
    <Admin dataProvider={restProvider("http://localhost:3000")}>
      <Resource name="posts" list={PostLists} />
    </Admin>
  );
}

export default App;

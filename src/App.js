import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Layout from "./components/Layout";
import { ProductList } from "./pages/Product List";

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={ProductList} />
    </Switch>
  </Layout>
);

export default App;

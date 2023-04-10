import React from "react";
import { Route, Switch } from "react-router-dom";

import DataContextProvider from "../src/context/DataContext";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <DataContextProvider>
        <Menu />
        {/* <Switch> */}
        <Home />
        {/* <Route path="/" component={Home} />
          <Route />
        </Switch> */}
      </DataContextProvider>
    </>
  );
}

export default App;

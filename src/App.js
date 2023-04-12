import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";

import DataContextProvider from "../src/context/DataContext";

import Home from "../src/components/Home/Home";
import Menu from "../src/components/Menu/Menu";
import About from "../src/components/About/About";
import Contact from "../src/components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <DataContextProvider>
      <BrowserRouter>
        <Menu />
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DataContextProvider>
  );
}

export default App;

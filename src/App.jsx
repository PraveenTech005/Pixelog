import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Client from "./Client";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

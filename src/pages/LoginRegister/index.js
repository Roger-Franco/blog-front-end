/* eslint-disable react/prop-types */
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";

const LoginRegister = ({ onReceiveGoogle }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/registrar" element={<Login />} />

        <Route
          exact
          path="*"
          element={<Register onReceiveGoogle={onReceiveGoogle} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRegister;

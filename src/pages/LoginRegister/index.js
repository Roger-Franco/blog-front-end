/* eslint-disable react/prop-types */
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

const LoginRegister = ({ onReceiveGoogle, setUser }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/registrar" element={<Register />} />

        <Route
          exact
          path="/login"
          element={
            <Login onReceiveGoogle={onReceiveGoogle} setUser={setUser} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRegister;

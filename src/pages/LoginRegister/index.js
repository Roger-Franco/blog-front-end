/* eslint-disable react/prop-types */
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

const LoginRegister = ({ setIsAuth }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/registrar" element={<Register />} />

        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LoginRegister;

/* eslint-disable react/prop-types */
import React from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Api from "../../Api";

import { AreaLogin } from "./styled";
import { BtnDefault, BtnDefaultIcons } from "../../components/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Login = ({ onReceiveGoogle }) => {
  const actionLoginGoogle = async () => {
    let result = await Api.googleLogar();

    if (result) {
      onReceiveGoogle(result.user);
    } else {
      alert("Error");
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/registrar"
          element={
            <AreaLogin>
              <h1 className="organizeIcon">
                <Link to="/">
                  <ArrowBackIosIcon />
                </Link>
                Crie a sua conta
              </h1>
              <p>Crie sua conta, é grátis!</p>
              <form>
                <div className="form-input">
                  <label>Nome</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label>E-mail</label>
                  <input type="email" />
                </div>
                <div className="form-input">
                  <label>Senha</label>
                  <input type="password" />
                </div>
                <BtnDefault>Comece Agora!</BtnDefault>
                <div className="footerLogin">
                  Já tem uma conta?
                  <Link to="/">Fazer Login</Link>
                </div>
              </form>
            </AreaLogin>
          }
        />

        <Route
          exact
          path="*"
          element={
            <AreaLogin>
              <h1>Faça login em sua conta</h1>

              <BtnDefaultIcons>
                <FacebookIcon />
                <div className="center">Faça login com Facebook</div>
              </BtnDefaultIcons>

              <BtnDefaultIcons>
                <GoogleIcon onClick={actionLoginGoogle} />
                <div className="center">Faça login com Google</div>
              </BtnDefaultIcons>

              <p>OU</p>

              <form>
                <div className="form-input">
                  <label>E-mail</label>
                  <input type="email" />
                </div>
                <div className="form-input">
                  <label>Senha</label>
                  <input type="password" />
                </div>
                <BtnDefault>Entrar</BtnDefault>
                <div className="footerLogin">
                  Não tem uma conta?
                  <Link to="/registrar">Registre-se</Link>
                </div>
              </form>
            </AreaLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Login;

import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

import { AreaLogin } from "./styled";
import { BtnDefault, BtnDefaultIcons } from "../../components/styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <BrowserRouter>
      <AreaLogin>
        <h1>Faça login em sua conta</h1>

        <BtnDefaultIcons>
          <FacebookIcon />
          <div className="center">Faça login com Facebook</div>
        </BtnDefaultIcons>

        <BtnDefaultIcons>
          <GoogleIcon />
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
        </form>
        <BtnDefault>Entrar</BtnDefault>
        <div className="footerLogin">
          Não tem uma conta?
          <Link to="/registrar">Registre-se</Link>
        </div>
      </AreaLogin>
    </BrowserRouter>
  );
};

export default Login;

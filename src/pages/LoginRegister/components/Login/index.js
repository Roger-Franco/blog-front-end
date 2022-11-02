import React from "react";
import { Link } from "react-router-dom";
import { BtnDefault } from "../../../../components/styled";
import { AreaLogin } from "../../styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Login() {
  return (
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
  );
}

export default Login;

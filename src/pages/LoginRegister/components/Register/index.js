/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { BtnDefault, BtnDefaultIcons } from "../../../../components/styled";
import { AreaLogin } from "../../styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Api from "../../../../Api";

function Register({ onReceiveGoogle }) {
  const actionLoginGoogle = async () => {
    let result = await Api.googleLogar();

    if (result) {
      onReceiveGoogle(result.user);
    } else {
      alert("Error");
    }
  };
  return (
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
  );
}

export default Register;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BtnDefault } from "../../../../components/styled";
import { AreaLogin } from "../../styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../../../Api";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AreaLogin>
      <h1 className="organizeIcon">
        <Link to="/login">
          <ArrowBackIosIcon />
        </Link>
        Faça login
      </h1>
      <p>OU</p>
      <br />
      <h3>Crie sua conta, é grátis!</h3> <br />
      <form>
        <div className="form-input">
          <label>E-mail</label>
          <input
            type="email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label>Senha</label>
          <input
            type="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <BtnDefault onClick={register}>Criar usuário!</BtnDefault>
        <div className="footerLogin">
          Já tem uma conta?
          <Link to="/login">Fazer Login</Link>
        </div>
      </form>
    </AreaLogin>
  );
}

export default Register;

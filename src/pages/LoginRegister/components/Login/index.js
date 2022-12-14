/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BtnDefault, BtnDefaultIcons } from "../../../../components/styled";
import { AreaLogin } from "../../styled";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider } from "../../../../Api";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// const auth = getAuth(firebaseApp);
// const auth1 = getAuth();

function Login({ isAuth, setIsAuth }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     try {
  //       const uid = currentUser.uid;
  //       const displayName = currentUser.displayName;
  //       console.log(uid, "uiduid");
  //       console.log(displayName, "displayName");
  //     } catch {
  //       console.log("não há usuário autenticado!");
  //     }
  //   });
  // }, []);

  const login = async (e) => {
    e.preventDefault();
    try {
      const authLogin = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("email", email);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  // useEffect(() => {
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   navigate("/");
  // });
  // }, []);

  const signWithGoogle = async () => {
    let result = await signInWithPopup(auth, provider);

    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profilePic", profilePic);
    localStorage.setItem("isAuth", true);
    setIsAuth(true);
    navigate("/");
  };
  return (
    <AreaLogin>
      <h1>Faça login em sua conta</h1>

      <BtnDefaultIcons>
        <FacebookIcon />
        <div className="center">Faça login com Facebook</div>
      </BtnDefaultIcons>

      <BtnDefaultIcons>
        <GoogleIcon onClick={signWithGoogle} />
        <div className="center">Faça login com Google</div>
      </BtnDefaultIcons>

      <p>OU</p>

      <form>
        {/* <div className="form-input">
          <label>Nome</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div> */}
        <div className="form-input">
          <label>E-mail</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-input">
          <label>Senha</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <BtnDefault onClick={login}>Entrar</BtnDefault>
        {/* <button onClick={login}>Entrar</button> */}
        <div className="footerLogin">
          Não tem uma conta?
          <Link to="/registrar">Registre-se</Link>
        </div>
      </form>
    </AreaLogin>
  );
}

export default Login;

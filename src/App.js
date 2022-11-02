import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Posts } from "./components/Posts";
import { PostCard } from "./components/PostCard";
import { PostCard2 } from "./components/PostCard2";
import { PostCard3 } from "./components/PostCard3";
import { PostCard4 } from "./components/PostCard4";
import { Divider } from "@mui/material";
import { useState } from "react";
import LoginRegister from "./pages/LoginRegister";
import PersonalTexts from "./pages/PersonalTexts";
import WriteTexts from "./pages/PersonalTexts/components/writeTexts";
import EditTexts from "./pages/PersonalTexts/components/editTexts";
import ReadText from "./pages/PersonalTexts/components/ReadText";

function App() {
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState("diferente de null pra ficar logado");

  const actionLoginDataGoodle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    setUser(newUser);
  };

  if (user === null) {
    return <LoginRegister onReceiveGoogle={actionLoginDataGoodle} />;
  }
  return (
    <div className="App">
      <Menu user={user} />
      <Divider />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                {" "}
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/postcard">PostCard</Link>
              </li>
              <li>
                {" "}
                <Link to="/postcard2">PostCard2</Link>
              </li>
              <li>
                {" "}
                <Link to="/postcard3">PostCard3</Link>
              </li>
              <li>
                {" "}
                <Link to="/postcard4">PostCard4</Link>
              </li>
            </ul>
          </nav> */}
          <Routes>
            <Route path="/" element={<Posts />}></Route>
            <Route path="/postcard" element={<PostCard />}></Route>
            <Route path="/postcard2" element={<PostCard2 />}></Route>
            <Route path="/postcard3" element={<PostCard3 />}></Route>
            <Route path="/postcard4" element={<PostCard4 />}></Route>
            <Route path="/PersonalTexts" element={<PersonalTexts />}></Route>
            <Route path="/postar-conteúdo" element={<WriteTexts />}></Route>
            <Route path="/editar-conteúdo/:id" element={<EditTexts />}></Route>
            <Route path="/ler-conteúdo/:id" element={<ReadText />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

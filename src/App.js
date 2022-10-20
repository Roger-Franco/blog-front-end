import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Posts } from "./components/Posts";
import { PostCard } from "./components/PostCard";
import { PostCard2 } from "./components/PostCard2";
import { PostCard3 } from "./components/PostCard3";
import { PostCard4 } from "./components/PostCard4";
import { Divider } from "@mui/material";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(null);

  if (user === null) {
    return <Login />;
  }
  return (
    <div className="App">
      <Menu />
      <Divider />
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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

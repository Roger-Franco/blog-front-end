/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Grid,
  IconButton,
  Paper,
  styled,
  Tab,
  Tabs,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Posts } from "../../components/Posts";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { firebaseApp } from "../../Api";

const auth = getAuth(firebaseApp);

export const Menu = ({ user, setUser }) => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "red", display: "flex" }}>
      {/* <nav>
        <Link to="/" value="1">
          All Posts
        </Link>
        <Link to="/PostCard" value="2">
          Posts One
        </Link>
        <Link to="/PostCard2" value="3">
          Posts Two
        </Link>
        <Link to="/PostCard3" value="3">
          Posts Three
        </Link>
        <Link to="/PostCard4" value="3">
          Posts Four
        </Link>
        <Link to="/PersonalTexts" value="3">
          Personal Texts
        </Link>
      </nav> */}
      <AppBar
        style={{
          background: "linear-gradient(45deg, #48D1CC 30%, #008080 90%)",
          display: "flex",
        }}
      >
        <Toolbar>
          <Tabs value="0">
            <IconButton>
              <MenuIcon />
            </IconButton>

            <Tab value="0" label="Item Zero" />
            <Tab href="/" value="1" label="All Posts" />
            <Tab disableRipple href="/PostCard" value="2" label="Posts One" />
            <Tab href="/PostCard2" value="3" label="Posts Two" />
            <Tab href="/PostCard3" value="3" label="Posts Three" />
            <Tab href="/PostCard4" value="3" label="Posts Four" />
            <Tab href="/PersonalTexts" value="3" label="Personal Texts" />
          </Tabs>
          <div
            className="avatar"
            style={{ display: "block", marginLeft: "10px" }}
          >
            <img
              src={user.avatar || localStorage.getItem("profilePic")}
              alt="avatar"
            />
            <label> {user.displayName || localStorage.getItem("name")}</label>
            <label> {localStorage.getItem("email")}</label>
          </div>
          <button onClick={logout}>Sign Out</button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

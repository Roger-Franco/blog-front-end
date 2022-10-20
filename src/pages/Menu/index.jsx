/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
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

export const Menu = ({ user }) => {
  const imagem = user.avatar;
  const [data, setData] = useState();

  return (
    <div style={{ backgroundColor: "red", display: "flex" }}>
      <AppBar
        style={{
          background: "linear-gradient(45deg, #48D1CC 30%, #008080 90%)",
          display: "flex",
        }}
      >
        <Tabs value="0">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Tab value="0" label="Item Zero" />
          <Tab href="/" value="1" label="All Posts" />
          <Tab href="/PostCard" value="2" label="Posts One" />
          <Tab href="/PostCard2" value="3" label="Posts Two" />
          <Tab href="/PostCard3" value="3" label="Posts Three" />
          <Tab href="/PostCard4" value="3" label="Posts Four" />
        </Tabs>
        <div className="avatar">
          <img src={user.avatar} alt="avatar" />
          <label> {user.name}</label>
        </div>
      </AppBar>
    </div>
  );
};

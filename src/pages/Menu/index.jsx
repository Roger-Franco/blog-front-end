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

export const Menu = () => {
  const [data, setData] = useState();

  return (
    <div>
      <AppBar>
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
      </AppBar>
    </div>
  );
};

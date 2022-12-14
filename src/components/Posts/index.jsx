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
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { PostCard } from "../PostCard";
import { PostCard2 } from "../PostCard2";
import { PostCard3 } from "../PostCard3";
import { PostCard4 } from "../PostCard4";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Posts = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar>
        <Tabs value="0">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <Tab value="0" label="Item Zero" />
          <Tab href="/PostCard" value="1" label="Item One" />
          <Tab value="2" label="Item Two" />
          <Tab value="3" label="Item Three" />
        </Tabs>
      </AppBar> */}
      <Grid container style={{ marginTop: "70px" }}>
        <Grid item xs={3}>
          <Item>
            <PostCard2 />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <PostCard />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <PostCard3 />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <PostCard4 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

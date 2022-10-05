import { Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
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
      <Grid container>
        <Grid item xs={3}>
          <Item>
            <PostCard />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <PostCard2 />
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

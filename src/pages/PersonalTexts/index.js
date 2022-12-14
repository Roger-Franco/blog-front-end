/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { red } from "@mui/material/colors";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../Api";
import moon from "../../imgs/download.jpeg";
import { ExpandMore } from "./components/ExpandMore";
// import { styled } from "@mui/material/styles";
// import { ExpandMore } from "@mui/icons-material";

const PersonalTexts = ({ isAuth }) => {
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const blogCollectionRef = collection(db, "blogs");
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  });

  const deleteBlog = async (id) => {
    const blogDoc = doc(db, "blogs", id);
    await deleteDoc(blogDoc);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const verificaIsAuth = () => {
    if (!isAuth) {
      navigate("/login");
    }
    return;
  };

  return (
    <Container
      fixed
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // width: 100,
        // bgcolor: "#ddd",
        // height: "90vh",
      }}
    >
      <Box sx={{ width: 500 }}>
        <Box
          component="span"
          sx={{ p: 1, borderRadius: "5px", bgcolor: "#59D1CC" }}
        >
          {/* <Button>Save</Button> */}
          <Link
            style={{
              margin: "1rem",
              // border: "1px solid grey",
              textDecoration: "none",
              color: "blue",
            }}
            to={!isAuth ? "/login" : "/postar-conte??do"}
          >
            Postar Conte??do
          </Link>
        </Box>
        {blogs.map((blog) => {
          return (
            <Card
              style={{
                marginTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {blog.name}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={blog.title}
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image={moon}
                alt="Beautiful moon"
              />
              <CardContent onClick={() => navigate(`/ler-conte??do/${blog.id}`)}>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.subtitle} {blog.id}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <Button size="small">
                  <Link to={`/ler-conte??do/${blog.id}`}>Learn More</Link>
                </Button>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Texto: {blog.text}</Typography>
                </CardContent>
                <h3>@{blog?.author?.name || localStorage.getItem("email")}</h3>
              </Collapse>

              {/* <h1>Nome: {blog.name}</h1>
              <h2>Idade: {blog.age}</h2>
              <h4>T??tulo: {blog.title}</h4>
              <p>Texto: {blog.text}</p> */}
              <Link to={`/editar-conte??do/${blog.id}`}>Editar</Link>
              <button onClick={() => deleteBlog(blog.id)}>Deletar post</button>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
};

export default PersonalTexts;

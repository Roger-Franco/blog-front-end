import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import { Container, CssBaseline } from "@mui/material";
// import { makeStyles } from "@material-ui/core";
// import makeStyles from "@mui/styles";
// import { makeStyles } from "tss-react/mui";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moon from "../../static/images/download.jpeg";

export const PostCard2 = () => {
  // const classes = useStyles();
  const [data, setData] = useState();
  const [updateNews, setUpdateNews] = useState(false);

  const url =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3a39182ebcf345629a9dcba3a2d9d126";

  useEffect(() => {
    const postJson = fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.articles);
        console.log(myJson, "myJson2");
      });
  }, [updateNews]);

  return (
    <>
      {data &&
        data.map((result) => (
          <Container component="main" maxWidth="xs" key={result.url}>
            <Card
              style={{
                marginTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "10px",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={result.urlToImage}
                alt={result.title}
              />
              <CardContent>
                <CssBaseline />
                <Typography
                  key={result.id}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {result.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {result.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => setUpdateNews(!updateNews)} size="small">
                  Update
                </Button>
                <Button
                  variant="contained"
                  href={result.url}
                  size="small"
                  target="_blank"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        ))}
    </>
  );
};

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
// }));

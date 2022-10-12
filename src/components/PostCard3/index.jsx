import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moon from "../../static/images/download.jpeg";

export const PostCard3 = () => {
  const [data, setData] = useState();
  const [updateNews, setUpdateNews] = useState(false);

  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-10-03&" +
    "sortBy=popularity&" +
    "apiKey=3a39182ebcf345629a9dcba3a2d9d126";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.articles);
      });
  }, [updateNews, url]);

  return (
    <>
      {data &&
        data.map((result) => (
          <>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={result.urlToImage}
                alt="beautiful moon"
              />
              <CardContent>
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
          </>
        ))}
    </>
  );
};

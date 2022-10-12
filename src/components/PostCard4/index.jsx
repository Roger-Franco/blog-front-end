import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moon from "../../static/images/download.jpeg";

export const PostCard4 = () => {
  const [data, setData] = useState();
  const [updateNews, setUpdateNews] = useState(false);

  const url =
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3a39182ebcf345629a9dcba3a2d9d126";
  const url2 =
    "https://newsdata.io/api/1/news?apikey=pub_122006ad0699de9c0b4f0d27895131837b87d";

  useEffect(() => {
    fetch(url2)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.results);
        console.log(myJson, "myJson");
      });
  }, [updateNews]);

  return (
    <>
      {data &&
        data.map((result) => (
          <>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={result.image_url}
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
                  {result.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => setUpdateNews(!updateNews)} size="small">
                  Update
                </Button>
                <Button
                  variant="contained"
                  href={result.link}
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

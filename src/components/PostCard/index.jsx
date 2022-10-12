import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import moon from "../../static/images/download.jpeg";

export const PostCard = () => {
  const [data, setData] = useState();
  const [updateNews, setUpdateNews] = useState(false);

  const url =
    "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=MtrMwQLW4cSdt0unqDhL2GoPh6Q1Z4yp";

  useEffect(() => {
    const postJson = fetch(url)
      .then((response) => response.json())
      .then((myJson) => {
        setData(myJson.results);
      });
  }, [updateNews]);
  return (
    <>
      {data &&
        data.map((result) => (
          <div key={result.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={moon}
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
                  {result.abstract}
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
          </div>
        ))}
    </>
  );
};

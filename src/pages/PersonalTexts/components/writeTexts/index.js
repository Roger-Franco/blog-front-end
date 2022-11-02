import { TextField, Button, Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../../Api";

function WriteTexts() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [text, setText] = useState("");
  const blogCollectionRef = collection(db, "blogs");

  const createPost = async () => {
    const docRef = await addDoc(blogCollectionRef, {
      name,
      age,
      title,
      subtitle,
      text,
    });
  };
  return (
    <div>
      <Container
        // fixed
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
        <Box
          component="form"
          sx={{
            p: 1,
            borderRadius: "5px",
            bgcolor: "#fff",
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              placeholder="Nome..."
              onChange={(e) => setName(e.target.value)}
              required
              id="outlined-required"
              label="Nome..."
            />
          </div>
          <div>
            <TextField
              type="number"
              onChange={(e) => setAge(e.target.value)}
              required
              id="outlined-required"
              label="Idade..."
            />
          </div>
          <div>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              required
              id="outlined-required"
              label="Título"
            />
          </div>
          <div>
            <TextField
              onChange={(e) => setSubtitle(e.target.value)}
              required
              id="outlined-required"
              label="Subtítulo..."
            />
          </div>
          <div>
            <TextField
              onChange={(e) => setText(e.target.value)}
              id="outlined-multiline-static"
              label="Texto"
              multiline
              rows={4}
            />
          </div>
          <Stack sx={{ marginLeft: "10px" }} direction="row" spacing={2}>
            <Button variant="contained" onClick={createPost}>
              Postar
            </Button>
            <Button variant="contained" href="">
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/PersonalTexts"
              >
                Posts
              </Link>
            </Button>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default WriteTexts;

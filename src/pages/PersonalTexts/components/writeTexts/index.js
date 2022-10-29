import { TextField } from "@mui/material";
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
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </div>
      </Box>
      <input placeholder="Nome..." onChange={(e) => setName(e.target.value)} />
      <input
        type="number"
        placeholder="Idade..."
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="Título..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Subtítulo..."
        onChange={(e) => setSubtitle(e.target.value)}
      />
      <textarea
        placeholder="Texto..."
        rows="4"
        cols="50"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={createPost}>Postar</button>
      <Link to="/PersonalTexts">Posts</Link>
    </>
  );
}

export default WriteTexts;

/* eslint-disable react/prop-types */
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../../../Api";

function EditTexts(props) {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const blogCollectionRef = collection(db, "blogs");

  const { id } = useParams();

  console.log(id, "id");
  const updateBlog = async (id, newName, newAge, newTitle, newText) => {
    const blogDoc = doc(db, "blogs", id);
    const newFields = {
      name: newName,
      age: newAge,
      title: newTitle,
      text: newText,
    };
    await updateDoc(blogDoc, newFields);
  };
  return (
    <>
      <input
        placeholder="Nome..."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade..."
        onChange={(e) => setNewAge(e.target.value)}
      />
      <input
        placeholder="Título..."
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        placeholder="Texto..."
        rows="4"
        cols="50"
        onChange={(e) => setNewText(e.target.value)}
      />
      <button
        onClick={() => updateBlog(id, newName, newAge, newTitle, newText)}
      >
        Atualizar
      </button>
      <Link to="/PersonalTexts">Posts</Link>
    </>
  );
}

export default EditTexts;

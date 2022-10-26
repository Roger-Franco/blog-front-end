/* eslint-disable react/jsx-key */
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../Api";

const PersonalTexts = () => {
  const [blogs, setBlogs] = useState([]);
  const blogCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      // data.forEach((doc) => {
      //   console.log(doc.id, doc.data());
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  }, []);

  const deleteBlog = async (id) => {
    const blogDoc = doc(db, "blogs", id);
    await deleteDoc(blogDoc);
  };

  return (
    <>
      <Link to="/postar-conteúdo">Postar Conteúdo</Link>
      {blogs.map((blog) => {
        return (
          <>
            <h1>Nome: {blog.name}</h1>
            <h2>Idade: {blog.age}</h2>
            <h4>Título: {blog.title}</h4>
            <p>Texto: {blog.text}</p>
            <Link to={`/editar-conteúdo/${blog.id}`}>Editar</Link>
            <button onClick={() => deleteBlog(blog.id)}>Deletar post</button>
          </>
        );
      })}
    </>
  );
};

export default PersonalTexts;

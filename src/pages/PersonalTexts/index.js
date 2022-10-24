/* eslint-disable react/jsx-key */
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
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
      console.log(blogs);
    };
    getBlogs();
  }, []);

  return (
    <>
      {blogs.map((blog) => {
        return (
          <>
            <h1>Nome: {blog.nome}</h1>
            <h2>Idade: {blog.idade}</h2>
            <h4>Título: {blog.titulo}</h4>
            <p>Texto: {blog.texto}</p>
          </>
        );
      })}
    </>
  );
};

export default PersonalTexts;

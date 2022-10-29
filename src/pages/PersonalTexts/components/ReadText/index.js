/* eslint-disable react/jsx-key */
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../Api";

function ReadText() {
  const [blog, setBlog] = useState([]);
  const [post, setPost] = useState("");
  const blogCollectionRef = collection(db, "blogs");
  const { id } = useParams();

  // useEffect(() => {
  //   getBlog();
  // }, []);
  // useEffect(() => {
  //   getBlog();
  //   filterPost();
  // }, []);

  const getBlog = useCallback(async () => {
    // const blogDoc = doc(db, "blogs", id);
    const blogData = await getDocs(blogCollectionRef);
    // const post = query(blogCollectionRef, where("id", "==", "id"));
    // const querySnapshot = await getDocs(post);
    // setBlog(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    const texts = blogData.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((doc) => doc.id === id);

    return setBlog(texts);
  }, [blog]);

  useEffect(() => {
    getBlog();
  }, []);
  console.log(post, "poospost");

  console.log(blog, "blologblog");

  return (
    <div>
      <p>{id}ReadText</p>
      {blog.map((doc) => {
        return <p>{doc.name}</p>;
      })}
      {/* {blog.filter((doc) => doc.id === id)} */}
      {/* <p>{post[0] && post[0].name}Name</p> */}
    </div>
  );
}

export default ReadText;

/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Posts } from "../../components/Posts";

export const Home = () => {
  const [data, setData] = useState();

  return (
    <div>
      <Posts />
    </div>
  );
};

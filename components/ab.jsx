import React from "react";
import { useEffect, useState } from "react";

const Ab = () => {
  let [count, setCount] = useState(1);

  useEffect(() => {
    setCount(count + 5);
  }, []);
  console.log(count);

  return <div>ab</div>;
};

export default Ab;

import React, { useState, useEffect } from "react";
// import Counter from "../Counter";
// import Modal from "../Modal";

const UseEffects = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello UseEffectsOne");
    document.title = `Clicked (${count})`;
  });

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      // Do something with the data here
      // For example, you can display the data in a list on your web page
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });

  return (
    //UseEffects calls first time when the page is load
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "50px",
      }}
    >
      <div>useEffectsOne {count}</div>
      <button
        style={{
          width: "100px",
          height: "50px",
          backgroundColor: "#8f88f43d",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => setCount(count + 1)}
      >
        Click 🤩
      </button>
      {/* <Modal /> */}
    </div>
  );
};

export default UseEffects;

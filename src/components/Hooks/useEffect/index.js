import React, { useEffect, useRef, useState } from "react";

const MyComponent = () => {
  //   const [name, setName] = useState("");
  //   const renderCount = useRef(0);
  //   const inputRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //   useEffect(() => {
  //     renderCount.current = renderCount.current + 1;
  //     console.log("first");
  //   });

  //   const onclick = () => {
  //     inputRef.current.focus();
  //   };

  useEffect(() => {
    console.log("Mounted");
    window.addEventListener("resize", updateWindowWidth);
    console.log("i rerender");
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div>
      {/* <input ref={inputRef} onChange={(e) => setName(e.target.value)} />
      <p>My name is {name}</p>
      <p>i rendered {renderCount.current} times</p>
      <button onClick={onclick}>Focus</button> */}
      <p>Window Size is {windowWidth}</p>
    </div>
  );
};

export default MyComponent;

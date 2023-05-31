import React, { useRef, useEffect, useState } from "react";

const Reference = () => {
  //   const inputRef = useRef(null);

  //   const onClick = () => {
  //     // console.log(inputRef.current.value);
  //     inputRef.current.focus();
  //   };

  //   return (
  //     <div>
  //       <input type="text" placeholder="Zain" ref={inputRef} />
  //       <button onClick={onClick}>Change ....</button>
  //     </div>
  //   );
  //   useEffect for Count changed
  const [count, setCount] = useState(0);
  //   useRef for refrence call
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (count !== prevCountRef.current) {
      console.log("Count changed!");
      prevCountRef.current = count;
      console.log(prevCountRef);
    }
  }, [count]);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={onClick}>increment</button>
      {count}
    </div>
  );
};

export default Reference;

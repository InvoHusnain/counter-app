import React from "react";
import { useState } from "react";
import "../Styles/Counter.scss";

const Counter = (props) => {
  let [countNum, setCount] = useState(0);
  let increaseValaue = () => {
    setCount((countNum += 1)); //increases the count by 1
  };
  let decreaseValue = () => {
    if (countNum === 0) {
      alert("Let's stay positive, shall we?");
    } else {
      setCount((countNum -= 1));
    }
  }; // decreases the count by 1
  let resetValue = () => {
    setCount(0); //resets the count to 0
  };

  return (
    <div className="counter-body">
      <h1>Simple Counter App</h1>
      <p>Count: {countNum}</p>
      <div className="btns_Flex">
        <button className="plusBtn" onClick={increaseValaue}>
          +
        </button>
        <button className="minusBtn" onClick={decreaseValue}>
          -
        </button>
        <button className="resetBtn" onClick={resetValue}>
          Reset
        </button>
      </div>
      {[0].includes(props.index) ? <h1>Home</h1> : <h1>About</h1>}
    </div>
  );
};

export default Counter;

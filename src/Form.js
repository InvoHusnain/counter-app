import React, { useState, useRef, useEffect } from "react";
import "./Form.scss";

const Form = () => {
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setIsClicked(true);
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="form-wrapper">
      <div className="form-outlined">
        <label
          htmlFor="your-input"
          className={isClicked ? "clicked" : "notClicked"}
        >
          Label
        </label>
        <input ref={inputRef} type="text" onClick={handleInputClick} />
      </div>
    </div>
  );
};

export default Form;

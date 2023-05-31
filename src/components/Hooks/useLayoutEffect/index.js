import { useState, useLayoutEffect, useRef } from "react";

function Component() {
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState(null);

  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
      setColor(ref.current.getBoundingClientRect().color);
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "300px",
        background: "orange",
      }}
    >
      <p>The height of this element is {height}px.</p>
      <p>The Color of this element is {color}.</p>
    </div>
  );
}
export default Component;

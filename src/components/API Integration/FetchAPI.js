import React, { useState, useEffect } from "react";
// import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import "../../App.scss";

const Example = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  if (loading) {
    return <div className="sliding-tiles"></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ul>
        {data.slice(0, 6).map((item) => (
          <li key={item.id}>{item.email}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;

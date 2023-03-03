import React from "react";
import { useState } from "react";
import "./styles.css";
import LoadOne from "../Loader/LoadOne";

const FetchAPITest = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleFetch = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setUser(response.data);
          setIsLoading(false);
        }, 3000);
      })
      .catch(() => {
        setError("Failed");
        setIsLoading(false);
      });
  };

  const renderUser = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {user.map((content, key) => (
        <div className="user-container" key={key}>
          <img src={content.avatar} alt="" />
          <div className="userDetail">
            <div className="first-name">{`${content.first_name}                
                                   ${content.last_name}`}</div>
            <div className="last-name">{content.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div>
      {isLoading ? <LoadOne /> : renderUser}
      <button onClick={handleFetch}>Click</button>
    </div>
  );
};

export default FetchAPITest;

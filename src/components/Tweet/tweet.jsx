import React from "react";

const Tweet = ({ tweet }) => {
  const handleDelete = () => {
    fetch("http://localhost:5000/", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: tweet._id,
      }),
    })
      .then((res) => res.json())
      .then((output) => alert(output))
      .catch((err) => console.log(err));
  };
  return (
    <div className="tweet-container" key={tweet._id}>
      <p>{tweet.tweet}</p>
      <div className="tweet-button-container">
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Tweet;

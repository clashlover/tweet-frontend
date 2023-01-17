import React, { useState } from "react";

const TweetField = () => {
  const [tweetField, setTweetField] = useState("");
  const handleChange = (event) => {
    const newTweet = event.target.value;
    setTweetField(newTweet);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tweet: tweetField,
      }),
    })
      .then((res) => res.json())
      .then((output) => alert("Success!"))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        cols="30"
        rows="4"
        placeholder="Enter your tweet..."
        required
        value={tweetField}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetField;

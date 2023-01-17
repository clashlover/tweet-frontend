import React, { useEffect, useState } from "react";
import Tweet from "../Tweet/tweet";
// import { tweets } from "../../Test-APIS/tweets";
import "./tweet.scss";

const TweetsContainer = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((output) => setTweets(output))
      .catch((err) => console.log(err));
  });
  return (
    <div className="tweets-container alignment-center">
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id} />;
      })}
    </div>
  );
};

export default TweetsContainer;

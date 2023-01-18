import React from "react";
import Tweet from "../Tweet/tweet";
// import { tweets } from "../../Test-APIS/tweets";
import "./tweet.scss";

const TweetsContainer = ({ tweets }) => {
  return (
    <div className="tweets-container alignment-center">
      {tweets.map((tweet) => {
        return <Tweet tweet={tweet} key={tweet._id} />;
      })}
    </div>
  );
};

export default TweetsContainer;

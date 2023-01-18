import React, { useEffect, useState } from "react";
import "./App.scss";
import TweetsContainer from "./components/Tweet-container/tweetsContainer";
import TweetField from "./components/TweetField/tweetField";

const App = () => {
  const [tweets, setTweets] = useState([]);
  // console.log(tweets);
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((output) => setTweets(output))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App alignment-center">
      <TweetField />
      <TweetsContainer tweets={tweets} />
    </div>
  );
};

export default App;

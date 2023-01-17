import "./App.scss";
import TweetsContainer from "./components/Tweet-container/tweetsContainer";
import TweetField from "./components/TweetField/tweetField";

function App() {
  return (
    <div className="App alignment-center">
      <TweetField />
      <TweetsContainer />
    </div>
  );
}

export default App;

import video from "../data/video.js";
import VideoPage from './VideoPage';

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoPage video={video}/>
    </div>
  );
}

export default App;

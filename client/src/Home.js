import "./Home.css";
import React from "react";
import Video_thumbnail from "./Video_thumbnail";
function Home() {
  return (
    <div className="Home">
      <h1>Create your own live stream</h1>
      <button>LET'S GO</button>
      <div className="videos_grid">
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      <Video_thumbnail></Video_thumbnail>
      </div>
      
    </div>
  );
}
export default Home;

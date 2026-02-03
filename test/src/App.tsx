import { AudioPlayer } from "audio-yt";
import "./style.scss";

export default function App() {
  // console.info("YT", yt);
  return (
    <div>
      <div id="player"></div>
      <AudioPlayer videoId="_KsLNGcuTlE" />
    </div>
  );
}
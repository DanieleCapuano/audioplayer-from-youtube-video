import { AudioPlayer } from "./AudioPlayer";
import "./style.scss";

export default function App() {
  return (
    <div>
      <div id="player"></div>
      <AudioPlayer videoId="Bca0rLtyG84"/>
    </div>
  );
}
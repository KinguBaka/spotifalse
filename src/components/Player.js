import React from "react";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

function Player(token) {
  var sound = new Howl({
    src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    html5: true,
    preload: true,
  });

  const playSong = (song) => {
    sound.play(song);
    document.getElementById("playBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "inline";
  };

  const pauseSong = (song) => {
    sound.pause(song);
    document.getElementById("pauseBtn").style.display = "none";
    document.getElementById("playBtn").style.display = "inline";
  };

  const volumeUp = () => {
    sound.mute(false);
    document.getElementById("muteVolBtn").style.display = "none";
    document.getElementById("volBtn").style.display = "inline";
  };

  const volumeDown = () => {
    sound.mute(true);
    document.getElementById("volBtn").style.display = "none";
    document.getElementById("muteVolBtn").style.display = "inline";
  };

  return (
    <div className="App-player">
      <div className="App-player-info">
        <span id="track">Track Name</span>
      </div>
      <div className="App-player-control">
        <div className="App-player-control-control">
          <FontAwesomeIcon
            className="controls-icon"
            id="playBtn"
            icon={faPlay}
            onClick={() => playSong()}
          />
          <FontAwesomeIcon
            className="controls-icon"
            id="pauseBtn"
            icon={faPause}
            onClick={() => pauseSong()}
          />
        </div>
        <div className="App-player-control-times">
          <div id="timer">0:00</div>
          <div id="duration">0:00 : {sound.duration()}</div>
        </div>
      </div>
      <div className="App-player-volume">
        <FontAwesomeIcon
          className="volume-icon"
          id="volBtn"
          icon={faVolumeUp}
          onClick={() => volumeDown()}
        />
        <FontAwesomeIcon
          className="volume-icon"
          id="muteVolBtn"
          icon={faVolumeMute}
          onClick={() => volumeUp()}
        />
        <input
          id="volRange"
          type="range"
          min="1"
          max="100"
          defaultValue="50"
          onChange={(e) => sound.volume(e.target.value / 100)}
        />
      </div>
    </div>
  );
}

export default Player;

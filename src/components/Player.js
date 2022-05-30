import React from "react";
import { Howl, Howler } from "howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";

function Player({ token, trackSelect }) {
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

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="App-player">
      <div className="App-player-info">
        <span id="track-name">{trackSelect.name}</span>
      </div>
      <div className="App-player-control">
        <div className="App-player-control-control">
          <FontAwesomeIcon
            className="controls-icon"
            id="playBtn"
            icon={faPlay}
            onClick={(e) => playSong()}
          />
          <FontAwesomeIcon
            className="controls-icon"
            id="pauseBtn"
            icon={faPause}
            onClick={(e) => pauseSong()}
          />
        </div>
        <div className="App-player-control-times">
          <div id="duration">
            0:00 - {millisToMinutesAndSeconds(trackSelect.duration_ms)}
          </div>
        </div>
      </div>
      <div className="App-player-volume">
        <FontAwesomeIcon
          className="volume-icon"
          id="volBtn"
          icon={faVolumeUp}
          onClick={(e) => volumeDown()}
        />
        <FontAwesomeIcon
          className="volume-icon"
          id="muteVolBtn"
          icon={faVolumeMute}
          onClick={(e) => volumeUp()}
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

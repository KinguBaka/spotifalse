import React, { useState, useEffect } from "react";
import axios from "axios";

function Tracks({ id, token, setTrackSelect }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const searchTracks = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/albums/${id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            market: "FR",
            limit: 50,
          },
        }
      );
      setTracks(data.items);
    };

    searchTracks();
  }, []);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  function addTrackToState(trackSelected) {
    setTrackSelect(trackSelected);
  }

  return (
    <ul className={"App-tracks " + id}>
      {tracks.map((track) => (
        <li key={track.id}>
          <div className="track" onClick={(e) => addTrackToState(track)}>
            <div className="track-info">
              <div className="track-info-number">{track.track_number}</div>
              <div className="track-info-artistsAndTracks">
                <div className="trackName">{track.name}</div>
                <div className="artist">
                  {track.artists.map((artist) => " - " + artist.name)}
                </div>
              </div>
            </div>
            <div className="track-duration">
              {millisToMinutesAndSeconds(track.duration_ms)}
            </div>
          </div>
          <br />
        </li>
      ))}
    </ul>
  );
}

export default Tracks;

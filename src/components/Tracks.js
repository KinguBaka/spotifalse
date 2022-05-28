import React from "react";

function Tracks({ tracks, id }) {
  return (
    <div className={"App-tracks" + id}>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tracks;

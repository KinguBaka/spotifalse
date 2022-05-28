import React, { useState, useEffect } from "react";
import axios from "axios";

function Tracks({ id, token }) {
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

  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>{track.name}</li>
      ))}
    </ul>
  );
}

export default Tracks;

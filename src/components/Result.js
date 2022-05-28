import React, { useState } from "react";
import Tracks from "./Tracks";
import axios from "axios";

function Result({ albums, token }) {
  const [tracks, setTracks] = useState([]);

  const renderTracks = async (id) => {
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

  const renderAlbums = () => {
    return albums.map((album) => (
      <div
        onClick={(e) => {
          renderTracks(album.id);
        }}
        className={"App-result-albumsCard " + album.id}
        key={album.id}
      >
        {album.images.length ? (
          <div className="App-result-albumsCard-img">
            <img src={album.images[0].url} alt={"cover album: " + album.name} />
          </div>
        ) : (
          <div>No Image</div>
        )}
        <div className="App-result-albumsCard-info">
          {album.name} • {album.total_tracks + " Tracks"}
          <div className="secondary-color">
            {album.release_date} • {album.artists[0].name}
          </div>
        </div>
        <Tracks id={album.id} tracks={tracks} />
      </div>
    ));
  };

  return (
    <div className="App-result">
      {!token ? <h2>Merci de vous connecter</h2> : renderAlbums()}
    </div>
  );
}

export default Result;

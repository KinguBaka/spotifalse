import React from "react";

function Result({ albums, searchKey }) {
  let token = window.localStorage.getItem("token");

  const renderAlbums = () => {
    return albums.map((album) => (
      <div className="App-result-albumsCard" key={album.id}>
        {album.images.length ? (
          <div className="App-result-albumsCard-img">
            <img src={album.images[0].url} alt="" />
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

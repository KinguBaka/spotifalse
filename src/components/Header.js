import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Header({ setAlbums, token, setToken }) {
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, [setToken]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  function test(a, b) {
    if (a.release_date.toLowerCase() < b.release_date.toLowerCase()) {
      return 1;
    }
    if (a.release_date.toLowerCase() > b.release_date.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  const searchAlbums = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: "artist:" + searchKey,
        type: "album",
        include_external: "audio",
        market: "FR",
      },
    });

    data.albums.items.sort(test);

    setAlbums(data.albums.items);

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <header className="App-header">
      <div className="App-header-left">
        <img src="./img/spotifalse.png" alt="" />
        <h1>Spotifalse</h1>
      </div>
      {!token ? (
        <a
          href={`${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
        >
          Login to Spotify
        </a>
      ) : (
        <div className="App-header-right">
          <form onSubmit={searchAlbums}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;

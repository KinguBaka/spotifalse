import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [albums, setAlbums] = useState([]);
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [volume, setVolume] = useState("36");

  return (
    <div className="App">
      <Header
        setAlbums={setAlbums}
        token={token}
        setToken={setToken}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
      <Result albums={albums} token={token} searchKey={searchKey} />
      <Player volume={volume} setVolume={setVolume} />
    </div>
  );
}

export default App;

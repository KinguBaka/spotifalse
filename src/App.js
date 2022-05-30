import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import Player from "./components/Player";

function App() {
  const [token, setToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [trackSelect, setTrackSelect] = useState();

  return (
    <div className="App">
      <Header setAlbums={setAlbums} token={token} setToken={setToken} />
      <Result albums={albums} token={token} setTrackSelect={setTrackSelect} />
      {token ? <Player token={token} trackSelect={trackSelect} /> : ""}
    </div>
  );
}

export default App;

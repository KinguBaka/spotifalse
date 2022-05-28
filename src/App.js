import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [albums, setAlbums] = useState([]);
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");

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
      <Player />
    </div>
  );
}

export default App;

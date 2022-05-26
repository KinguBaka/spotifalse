import Header from "./components/Header";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="App">
      <Header
        setArtists={setArtists}
        token={token}
        setToken={setToken}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
      />
      <Result artists={artists} token={token} />
    </div>
  );
}

export default App;

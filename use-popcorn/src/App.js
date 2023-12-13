import { useState } from "react";

import SearchBar from "./Search";
import WatchedList from "./WatchedList";
import SearchingList from "./SearchingList";

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="App">
      <SearchBar movies={movies} setMovies={setMovies} setError={setError} />
      <div className="content">
        <SearchingList
          movies={movies}
          error={error}
          setSelectedId={setSelectedId}
        />
        <WatchedList selectedId={selectedId} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default App;

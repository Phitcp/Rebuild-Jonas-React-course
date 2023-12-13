import SearchMovie from "./SearchedMovie";
import { useState } from "react";
function SearchingList({ movies, error, setSelectedId }) {
  return (
    <div className="container">
      {error.length > 0 && error}
      {!error.length && (
        <ul>
          {movies.map((movie) => (
            <SearchMovie movie={movie} setSelectedId={setSelectedId} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchingList;

import { useState, useEffect } from "react";

function SearchBar({ movies, setMovies, setError }) {
  const key = "483f21e8";
  const [query, setQuery] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    const fetchMovie = async () => {
      try {
        const result = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controller.signal }
        );

        if (!result.ok) {
          throw new Error("Something went wrong while fetching the movie");
        }
        const resData = await result.json();
        if (resData.Response === "False") {
          setError("Movies not found");
          // setMovies([]);
        } else {
          setMovies(resData.Search);
          setError("");
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(setError(error.message));
        }
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovie();
    return function () {
      controller.abort();
    };
  }, [query, setMovies, setError]);

  return (
    <div className="search-bar">
      <h1>🍿usePopcorn</h1>
      <input
        type="text"
        placeholder="Find you movie"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <p>Found {movies.length} results</p>
    </div>
  );
}

export default SearchBar;

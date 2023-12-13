import { useEffect, useState } from "react";
import StarRating from "./StarRating";

function MovieDetails({
  selectedId,
  setSelectedId,
  setWatchedList,
  watchedList,
}) {
  const key = "483f21e8";
  const [movieDetails, setMovieDetails] = useState(null);
  const [rating, setRating] = useState(null);
  const handleAddList = () => {
    setWatchedList([...watchedList, movieDetails]);
  };
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
      );

      const result = await res.json();
      setMovieDetails(result);
    };

    fetchMovieDetails();
  }, [selectedId]);
  console.log(watchedList);
  return (
    <>
      {movieDetails && (
        <div className="details">
          <header>
            <img
              src={movieDetails.Poster}
              alt={`Poster for ${movieDetails.Title}`}
            />
            <div className="details-overview">
              <h2>{movieDetails.Title}</h2>
              <p>{movieDetails.Released}</p>
              <p>{movieDetails.Genre}</p>
              <p>{movieDetails.imdbRating}</p>
            </div>
          </header>
          <section>
            <StarRating onRating={setRating} />
            {rating && (
              <p onClick={handleAddList}>
                You rated this movie with {rating} point. Add to your watched
                list.
              </p>
            )}
            <p style={{ fontStyle: "italic" }}>{movieDetails.Plot}</p>
            <p>Starring: {movieDetails.Actors}</p>
            <p>Directed by: {movieDetails.Writer}</p>
          </section>
          <button
            onClick={() => {
              setSelectedId(null);
            }}
          >
            Back to your movie list
          </button>
        </div>
      )}
    </>
  );
}

export default MovieDetails;

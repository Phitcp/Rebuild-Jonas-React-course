function SearchMovie({ movie, setSelectedId }) {
  const defaultImg =
    "https://lajoyalink.com/wp-content/uploads/2018/03/Movie.jpg";

  return (
    <li
      key={movie.imdbID}
      onClick={() => {
        setSelectedId(movie.imdbID);
      }}
    >
      <img src={movie.Poster ?? defaultImg} alt="" />
      <h2>{movie.Title}</h2>
      <p> 🗓 {movie.Year}</p>
    </li>
  );
}

export default SearchMovie;

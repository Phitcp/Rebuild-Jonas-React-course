import Summary from "./Summary";

function WatchedMovie({ watchedList = [] }) {
  return (
    <ul>
      <Summary />
      {watchedList.map((watchedMovie) => (
        <Movie watchedMovie={watchedMovie} />
      ))}
    </ul>
  );
}

const Movie = ({ watchedMovie }) => {
  return (
    <li>
      <img src={watchedMovie.Poster} alt={watchedMovie.Title} />
      <h2>{watchedMovie.Title}</h2>
      <div className="movie-stat">
        <p>
          <span> ⭐️ </span>
          <span> 2 </span>
        </p>

        <p>
          <span> 🌟 </span>
          <span> 3</span>
        </p>

        <p>
          <span> ⏳ </span>
          <span> 4 min</span>
        </p>
      </div>
    </li>
  );
};
export default WatchedMovie;

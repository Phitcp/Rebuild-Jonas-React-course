import MovieDetails from "./MovieDetails";
import WatchedMovie from "./WatchedMovie";
import { useState } from "react";
function WatchedList({ selectedId, setSelectedId }) {
  const [watchedList, setWatchedList] = useState([]);

  return (
    <div className="container">
      {selectedId ? (
        <MovieDetails
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setWatchedList={setWatchedList}
          watchedList={watchedList}
        />
      ) : (
        <WatchedMovie watchedList={watchedList} />
      )}
    </div>
  );
}

export default WatchedList;

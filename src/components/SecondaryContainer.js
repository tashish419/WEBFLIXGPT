import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  return (
    movies && (
      <div>
        <div>
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
          <MovieList title={"Horror"} movies={movies} />
          <MovieList title={"Bollywood"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

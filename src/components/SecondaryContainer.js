import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  return (
    movies && (
      <div className=" mt-7">
        <div className=" bg-gradient-to-t from-black ">
          <MovieList title={"Now Playing"} movies={movies} />
        </div>
        <div className="bg-black">
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

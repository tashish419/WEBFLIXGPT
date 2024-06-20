import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pl-16">
      <h1 className="text-xl text-white font-semibold">{title}</h1>
      <div className="py-2 flex overflow-x-scroll">
        <div className="flex gap-2 ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSearchMovieSuggestions = () => {
  const { gptMovieNames, gptMovieData } = useSelector((store) => store.GPT);
  if (!gptMovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList title={movieName} movies={gptMovieData[index]} />
        ))}
      </div>
    </div>
  );
};

export default GPTSearchMovieSuggestions;

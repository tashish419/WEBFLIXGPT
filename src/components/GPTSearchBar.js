import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config?.language);
  const searchText = useRef(null);

  // make an API call to tmdb search-> movie
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGPtSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest me some movies for the query: " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Phir Hera Pheri, Sholay, Don, Golmal, Bhulbhuliyan";

    // make an API call to GPT API and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      const err = new Error("Too many APIs calls");
      return err;
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //it will return array of 5 promises
    const promiseResults = gptMovies.map((movie) => searchMovieTMDB(movie));

    /*
     * Promise.all will resolve all 5 promises and will return movie data , since searchMovieTMDB
     * is async funtion , it will take time to fetch api that is why making the below function await.
     */
    const tmdbSearchMovieList = await Promise.all(promiseResults);

    //this is how we can dispatch more data by just calling one action
    dispatch(
      addGptMovieResult({
        gptMovieData: tmdbSearchMovieList,
        gptMovieNames: gptMovies,
      })
    );
  };

  return (
    <div className="flex justify-center pt-[55%] md:pt-[15%]">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPtSearchClick}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

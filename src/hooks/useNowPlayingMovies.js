import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  //memoization - make nowPlayingMovies API call only when data is not there inside the store that is when nowPlayingMovies state is null
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );

  // fetch data from TMDB API and update the store
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    //memoization- preventing unnecessary API calls
    !nowPlayingMovies && getNowPlayingMovie();
  }, [dispatch, nowPlayingMovies]);
};

export default useNowPlayingMovies;

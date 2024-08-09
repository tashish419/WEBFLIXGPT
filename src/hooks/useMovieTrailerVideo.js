import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  //memoization- if my store already has data then do not need to make api call again n again and this is how we can do it:
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  //fetch trailer video
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterVideo.length ? filterVideo[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer(); //now getMovieTrailer will be called when trailerVideo is not there in store
  }, [trailerVideo, dispatch, movieId]);
};

export default useMovieTrailerVideo;

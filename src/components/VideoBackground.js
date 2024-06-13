import { useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";

const VideoBackground = (movieID) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailerVideo();

  return (
    <div className="w-full h-full absolute top-0 -z-10">
      <iframe
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

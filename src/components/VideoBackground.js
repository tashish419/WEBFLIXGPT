import { useSelector } from "react-redux";
import useMovieTrailerVideo from "../hooks/useMovieTrailerVideo";

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);

  useMovieTrailerVideo(movieId)
  // console.log(movieId);

  return (
    <div className="w-screen absolute top-0 -z-10">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&rel=0&controls=0&loop=1&modestbranding=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
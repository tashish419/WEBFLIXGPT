import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[1];
//   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoBackground movieID={id}/>
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;

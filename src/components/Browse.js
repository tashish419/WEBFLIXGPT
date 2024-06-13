import Header from "./Header";
import  useNowPlayingMovies  from "../hooks/useNowPlayingMovies";

const Browse = () => {
  //created custom hook to declutter Browse component in hooks folder and now calling custom hook here
  useNowPlayingMovies();
  return (
    <div className=" font-bold text-3xl text-center">
      <Header />
    </div>
  );
};

export default Browse;

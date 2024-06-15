import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //created custom hook to declutter Browse component in hooks folder and now calling custom hook here
  useNowPlayingMovies();

  return (
    <div>
      <div className="relative">
        <Header />
        <MainContainer />
      </div>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

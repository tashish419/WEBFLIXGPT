import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchMovieSuggestions from "./GPTSearchMovieSuggestions";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_URL} alt="BG_Image" />
      </div>
      <div>
        <GPTSearchBar />
        <GPTSearchMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearchPage;

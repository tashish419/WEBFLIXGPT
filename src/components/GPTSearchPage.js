import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchMovieSuggestions from "./GPTSearchMovieSuggestions";

const GPTSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="BG_Image" />
      </div>
      <GPTSearchBar />
      <GPTSearchMovieSuggestions />
    </div>
  );
};

export default GPTSearchPage;

import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config?.language);

  return (
    <div className="flex justify-center pt-[15%]">
      <form
        className="grid grid-cols-12 bg-black w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder= {lang[langKey]?.gptSearchPlaceholder}
          className="px-4 py-2 m-4 col-span-9"
        />
        <button className="m-4 px-4 py-2 bg-red-800 col-span-3 rounded-lg">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;

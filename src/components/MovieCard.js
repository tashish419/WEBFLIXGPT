import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Card_image"
        className="w-[100%] h-40"
      />
    </div>
  );
};

export default MovieCard;

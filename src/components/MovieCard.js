import { IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48">
      <img src={IMG_CDN_URL + posterPath} alt="Card_image" className="w-[100%] h-40"/>
    </div>
  );
}

export default MovieCard;

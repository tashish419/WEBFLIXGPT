const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-16 px-12 text-white">
      <h1 className=" text-6xl font-sans w-96 font-semibold">{title}</h1>
      <p className="py-6 w-1/3 text-sm">{overview}</p>
      <div>
        <button className="py-3 px-6 rounded-lg  text-black bg-white hover:bg-opacity-80 font-bold">
          Play
        </button>
        <button className="py-3 px-6 rounded-lg text-black bg-white m-2 hover:bg-opacity-80 font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

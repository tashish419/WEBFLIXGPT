const VideoTitle = ({title, overview}) => {
    return (
        <div className="pt-16 px-12 ">
            <h1 className=" text-6xl font-sans w-96">{title}</h1>
            <p className="py-6 w-1/3 text-lg">{overview}</p>
            <div>
                <button className="py-3 px-6 rounded-lg  text-white bg-gray-700 hover:bg-opacity-60">▶ Play</button>
                <button className="py-3 px-6 rounded-lg text-white bg-gray-700 m-2 hover:bg-opacity-60">More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;
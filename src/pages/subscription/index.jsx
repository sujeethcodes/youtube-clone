import React from "react";
import youtubeMusic from "../../assets/youtubeMusic.jpeg";
const Subscription = () => {
  const [getAllCreators, SetGetAllCreators] = React.useState([]);

  const AllCategoriesBasedCreators = async () => {
    SetGetAllCreators(
      JSON.parse(localStorage.getItem("categoriesBasedCreator"))
    );
  };

  React.useEffect(() => {
    AllCategoriesBasedCreators();
  }, []);

  return (
    <>
      <div className=" ml-[90px] mt-8 ">
        <div>
          <p className="text-white font-bold">Current News</p>
          <div className="flex">
            {getAllCreators.newsCategories?.map((each) => (
              <div className=" ">
                <img
                  src={youtubeMusic}
                  alt=""
                  className="h-[90px] w-[90px] rounded-full ml-[70px] m-6"
                />
                <p className="text-white ml-[70px]">{each?.channelName}</p>
                <p className="text-zinc-400 ml-[90px] text-sm">750k </p>
                <p className="text-white ml-[50px] h-8 rounded-full justify-center items-center flex mt-4 bg-zinc-800">
                  subscribe
                </p>
              </div>
            ))}
          </div>
          <button className="text-white font-bold mt-6 mb-6  hover:bg-zinc-700 h-10  rounded-e-full w-[100px]">
            show more
          </button>
        </div>

        <hr className="w-[1100px] opacity-50 mt-4" />

        <div>
          <p className="text-white font-bold mt-4">Movies</p>
          <div className="flex  ">
            {getAllCreators.moviesCategories?.map((each) => (
              <div>
                <img
                  src={youtubeMusic}
                  alt=""
                  className="h-[90px] w-[90px] rounded-full ml-[70px] m-6"
                />
                <p className="text-white ml-[70px]">{each?.channelName}</p>
                <p className="text-zinc-400 ml-[90px] text-sm">750k </p>
                <p className="text-white ml-[50px] h-8 rounded-full justify-center items-center flex mt-4 bg-zinc-800">
                  subscribe
                </p>
              </div>
            ))}
          </div>
          <button className="text-white font-bold mt-6 mb-6  hover:bg-zinc-700 h-10  rounded-e-full w-[100px]">
            show more
          </button>
        </div>

        <hr className="w-[1100px] opacity-50 mt-4" />

        <div>
          {getAllCreators.songsCategories?.map((each) => (
            <div>
              <p className="text-white">{each?.channelName}</p>
            </div>
          ))}
        </div>

        <div>
          {getAllCreators.sportsCategories?.map((each) => (
            <div>
              <p className="text-white">{each?.channelName}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Subscription;

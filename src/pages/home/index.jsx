import React from "react";
import defaultCreatorProfile from "../../../src/assets/3dimage.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [getAllPost, setGetAllPost] = React.useState([]);
  const navigation = useNavigate();

  const showVideos = async () => {
    setGetAllPost(JSON.parse(localStorage.getItem("getAllPostApi")));
  };
  React.useEffect(() => {
    showVideos();
  }, []);

  const homeCategories = [
    "Music",
    "Arijit Singh",
    "Live",
    "Pop Music",
    "TamilCinema",
    "Gaming",
    "News",
    "Comdey",
    "Filmi",
  ];
  return (
    <>
      <div className="h-[780px] ml-10  overflow-y-scroll">
        <div className="flex mt-5">
          <div className="flex overflow-x-auto absolute ">
            {homeCategories?.map((each) => (
              <p className=" flex justify-center text-white h-7 w-28  ml-2 items-center border  bg-zinc-800 rounded-lg text-center text-sm">
                {each}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-white"></p>
        </div>
        <div className="flex flex-wrap mb-6">
          {getAllPost?.getAllPost?.map((each, index) => (
            <div>
              <video
                // controls
                src={each?.post}
                className=" mt-16 hover-auto-play h-[200px] w-[350px] mr-4 mx-4 rounded-2xl cursor-pointer"
                key={index}
                onClick={() => {
                  navigation("/watch");
                  localStorage.setItem(
                    "watchVideo",
                    JSON.stringify({
                      post: each?.post,
                      description: each?.description,
                      channelName: each?.channelName,
                      channelProfile: each?.channelProfile,
                      postId: each?.postId,
                      creatorId: each?.creatorId,
                    })
                  );
                }}
              />
              <div className="flex mt-4">
                <img
                  src={defaultCreatorProfile}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full "
                />
                <p className="text-white font-bold flex text-sm justify-center w-[300px] ml-2">
                  {each?.description}
                </p>
              </div>
              <div className="flex-col">
                <p className="text-zinc-300 flex justify-center text-xs mr-[250px] p-2">
                  {each?.channelName}
                </p>
                <p className="text-zinc-300 flex justify-center text-xs mr-[180px]">
                  620k * 2months ago
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

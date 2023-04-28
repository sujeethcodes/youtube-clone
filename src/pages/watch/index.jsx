import React from "react";
import youTubeLogo from "../../assets/youtube-logo.jpeg";

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineAudio,
  AiOutlineLike,
} from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDislike } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Watch = () => {
  const navigation = useNavigate();
  const [watchVideo, getSetWatchVideo] = React.useState("");
  const [viewLike, setViewLike] = React.useState("");
  const [like, setLike] = React.useState();
  const [disLike, setDisLike] = React.useState();
  const [subscribe, setSubscribe] = React.useState();
  const [showSubscribe, setShowSubscribe] = React.useState();
  const [showverifySubscribers, setShowVerifySubscribers] = React.useState();

  const likeApi = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/like",
      {
        postId: watchVideo?.postId,
        userId: 432290,
        like: like,
      }
    );
  };

  const verifySubscribe = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/subscribedChannel",
      {
        userId: 432290,
        creatorId: watchVideo?.creatorId,
      }
    );
    setShowVerifySubscribers(data);
  };

  const disLikeApi = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/disLike",
      {
        postId: watchVideo?.postId,
        userId: 432290,
        like: disLike,
      }
    );
  };

  const showLike = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/getLike",
      {
        postId: watchVideo?.postId,
        userId: 432290,
      }
    );
    setViewLike(data);
  };

  const subscribtion = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/setSubscribedChannel",
      {
        userId: 432290,
        creatorId: watchVideo?.creatorId,
        subscribe: subscribe,
      }
    );
    setShowSubscribe(data);
  };

  const geWatchVideo = () => {
    getSetWatchVideo(JSON.parse(localStorage.getItem("watchVideo")));
  };

  React.useEffect(() => {
    geWatchVideo();
  }, []);

  React.useEffect(() => {
    watchVideo && showLike();
  }, [watchVideo]);

  React.useEffect(() => {
    verifySubscribe();
  });

  return (
    <>
      <div className="">
        <div className="flex sticky z-1  bg-black h-14 ">
          <p>
            <AiOutlineMenu className="text-zinc-300 cursor-pointer h-16 text-[20px] ml-8" />
          </p>

          <img
            src={youTubeLogo}
            className="h-16 cursor-pointer ml-4 "
            onClick={() => {
              navigation("/home");
            }}
            alt=""></img>

          <div className="flex-col mt-2 ">
            <div className="flex">
              <input
                type="text"
                className="ml-60 w-[600px] px-4 py-2 border rounded-full bg-black outline-none text-white"
                placeholder="Search..."
              />
              <AiOutlineSearch className="text-white ml-[790px] text-2xl mt-2 absolute" />
              <div className="absolute">
                <AiOutlineAudio className="text-white ml-[860px] text-2xl mt-[13px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black h-screen">
          <div>
            <div>
              <video
                src={watchVideo?.post}
                controls
                className="h-[600px] p-6"
              />
            </div>
            <div>
              <p className="text-white font-bold ml-20">
                {watchVideo?.description}
              </p>
            </div>
            <div className="flex  items-center ml-20 mt-4">
              <img
                src={watchVideo?.channelProfile}
                alt=""
                className="h-[40px] w-[40px] rounded-full"
              />
              <p className="text-white ml-2 font-bold">
                {watchVideo?.channelName}
              </p>

              {showverifySubscribers?.subscribe === 1 ? (
                <button
                  className="ml-[40px]  h-[30px] w-[90px] font-bold text-sm text-white rounded-full bg-red-600"
                  onClick={() => {
                    subscribtion();
                    setSubscribe(false);
                    verifySubscribe();
                  }}>
                  Subscribe
                </button>
              ) : (
                <button
                  className="ml-[40px]  h-[30px] w-[90px] font-bold text-sm text-black rounded-full bg-white"
                  onClick={() => {
                    subscribtion();
                    setSubscribe(true);
                    verifySubscribe();
                  }}>
                  Subscribe
                </button>
              )}

              {viewLike?.postId === watchVideo?.postId &&
              viewLike?.like === 1 ? (
                <AiOutlineLike
                  className="text-blue-800  ml-[300px]  bg-zinc-800  h-[30px] w-[60px] rounded-l-full cursor-pointer"
                  onClick={() => {
                    likeApi() && setLike(false);
                  }}
                />
              ) : (
                <AiOutlineLike
                  className="text-white text-2xl ml-[300px]  bg-zinc-800  h-[30px] w-[60px] rounded-l-full cursor-pointer hover:bg-zinc-600"
                  onClick={() => {
                    likeApi() && setLike(true);
                  }}
                />
              )}

              {viewLike?.postId === watchVideo?.postId &&
              viewLike?.disLike === 1 ? (
                <BiDislike
                  className="text-blue-800 text-2xl bg-zinc-800  h-[30px] w-[60px] rounded-e-full cursor-pointer "
                  onClick={() => {
                    disLikeApi() && setDisLike(false);
                  }}
                />
              ) : (
                <BiDislike
                  className="text-white text-2xl bg-zinc-800  h-[30px] w-[60px] rounded-e-full cursor-pointer hover:bg-zinc-600"
                  onClick={() => {
                    disLikeApi() && setDisLike(true);
                  }}
                />
              )}

              <RiShareForwardLine className="text-white text-2xl bg-zinc-800  h-[30px] w-[60px] rounded-full hover:bg-zinc-600 ">
                share
              </RiShareForwardLine>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;

import React from "react";
import axios from "axios";

import youTubeLogo from "../../assets/youtube-logo.jpeg";
import youtubeShorts from "../../assets/youtubeShorts.png";
import youtubeFlim from "../../assets/youtubeFlim.jpeg";
import youtubeGame from "../../assets/youtubeGame.jpeg";
import youtubeMusic from "../../assets/youtubeMusic.jpeg";
import youtubeSports from "../../assets/youtubeSports.jpeg";
import youtubePremium from "../../assets/youtubePremium.jpeg";
import youtubeKids from "../../assets/youtubeKids.jpeg";
import youtubeMusicPremium from "../../assets/youtubeMusicPremium.jpeg";
import youtubeStudio from "../../assets/youtubeStudio.jpeg";
import { Navigate, useNavigate, Outlet } from "react-router-dom";

import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineLike,
  AiFillShopping,
  AiOutlineBulb,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineAudio,
} from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
  MdOutlineFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { HiFire, HiOutlineStatusOnline } from "react-icons/hi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { BiMovie, BiHelpCircle } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { TfiCup } from "react-icons/tfi";
import { TbHanger2 } from "react-icons/tb";

const Menu = () => {
  const navigation = useNavigate();

  const getAllPostApi = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/getAllPost"
    );
    return localStorage.setItem("getAllPostApi", JSON.stringify(data));
  };

  const getAllShortsApi = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/getAllShorts"
    );
    return localStorage.setItem("getAllShortsApi", JSON.stringify(data));
  };

  const categoriesBasedCreator = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/categoriesBasedCreator"
    );
    localStorage.setItem("categoriesBasedCreator", JSON.stringify(data));
  };

  return (
    <>
      <div className="bg-black h-full">
        <div className="flex sticky z-1 inset-1 bg-black h-14">
          <p>
            <AiOutlineMenu className="text-zinc-300 cursor-pointer h-16 text-[20px] ml-8" />
          </p>

          <img
            src={youTubeLogo}
            className="h-16 cursor-pointer ml-4 "
            alt=""
            onClick={() => {
              navigation("/home");
            }}
          />

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

        {/* MENU BAR */}
        <div className="flex">
          <div className="overflow-y-scroll h-[780px] w-[300px] mt-2">
            <div className="ml-2">
              <div className="p-2 ">
                <div
                  className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center "
                  onClick={() => {
                    navigation("/home");
                    getAllPostApi();
                  }}>
                  <AiFillHome className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Home
                  </p>
                </div>
                <div
                  className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center"
                  onClick={() => {
                    navigation("/shorts");
                    getAllShortsApi();
                  }}>
                  <img
                    src={youtubeShorts}
                    className="bg-zinc-400 rounded-full text-xl ml-6 h-6"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Shorts
                  </p>
                </div>
                <div
                  className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center"
                  onClick={() => {
                    categoriesBasedCreator();
                    navigation("/subscription");
                  }}>
                  <MdOutlineSubscriptions className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Subscriptions
                  </p>
                </div>
              </div>

              <hr className="w-[230px] mt-2 opacity-40" />

              <div className="mt-2 p-2">
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <MdOutlineVideoLibrary className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Library
                  </p>
                </div>
                <div
                  className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center"
                  onClick={() => {
                    navigation("/history");
                  }}>
                  <MdHistory className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Histroy
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <RiVideoLine className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Your videos
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <MdOutlineWatchLater className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Watch Later
                  </p>
                </div>
                <div
                  className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center"
                  onClick={() => {
                    navigation("/likedVideos");
                  }}>
                  <AiOutlineLike className="text-zinc-300 text-xl ml-6" />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Liked Videos
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-[230px] mt-2 opacity-40" />

            <div className="p-2 ml-2">
              <div>
                <p className="text-zinc-300 ml-6 cursor-pointer mt-2 font-semibold text-sm">
                  Subscription
                </p>
              </div>
              <div className="mt-2">
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center text-sm">
                  <img
                    src={youtubeMusic}
                    className="h-6 cursor-pointer ml-6 rounded-lg"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Music
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <img
                    src={youtubeSports}
                    className="h-6 cursor-pointer ml-6 rounded-full"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Sports
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <img
                    src={youtubeGame}
                    className="h-6 cursor-pointer ml-6 rounded-full"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Gaming
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <img
                    src={youtubeFlim}
                    className="h-6 cursor-pointer ml-6 rounded-full"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    Flims
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-[230px] mt-2 opacity-40" />

            <div className="ml-2">
              <div className="mt-2 p-2 ">
                <p className="text-zinc-300 ml-6 cursor-pointer mt-2 font-semibold">
                  Explore
                </p>
              </div>

              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center mt-2">
                <HiFire className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Trending
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <AiFillShopping className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Shoping
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <IoMusicalNoteOutline className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Music
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <BiMovie className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Moives & Shows
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <HiOutlineStatusOnline className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Live
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <SiYoutubegaming className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Gaming
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <IoNewspaperOutline className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  News
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <TfiCup className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Sports
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <AiOutlineBulb className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                  Learning
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <TbHanger2 className="text-zinc-300 text-xl ml-7" />
                <p className="text-zinc-300 ml-6 cursor-pointer  text-sm">
                  Fashion & beauty
                </p>
              </div>
            </div>

            <hr className="w-[230px] mt-2 opacity-40" />

            <div className="p-2 ml-2">
              <div>
                <p className="text-zinc-300 ml-6 cursor-pointer mt-2 font-semibold">
                  More From YouTube
                </p>
              </div>
              <div className="mt-2">
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <img
                    src={youtubePremium}
                    className="h-6 cursor-pointer ml-3 rounded-lg bg-black"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    YouTube Premium
                  </p>
                </div>
                <div
                  className="flex  hover:bg-zinc-800  h-[40px] w-56 rounded-lg items-center"
                  onClick={() => {
                    navigation("/studio");
                  }}>
                  <img
                    src={youtubeStudio}
                    className="h-7 cursor-pointer ml-3 rounded-full"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    YouTube Studio
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                  <img
                    src={youtubeMusicPremium}
                    className="h-6  cursor-pointer ml-1 rounded-full"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-4 cursor-pointer text-sm">
                    YouTube Music
                  </p>
                </div>
                <div className="flex  hover:bg-zinc-800 rounded-lg  h-[38px] w-56  items-center">
                  <img
                    src={youtubeKids}
                    className="h-[35px] cursor-pointer ml-2 rounded-full"
                    alt=""
                  />
                  <p className="text-zinc-300 ml-6 cursor-pointer text-sm">
                    YouTube Kids
                  </p>
                </div>
              </div>
            </div>

            <hr className="w-[230px] mt-2 opacity-40" />

            <div className="mt-2 ml-2">
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <AiOutlineSetting className="text-zinc-300 text-xl ml-6" />
                <p className="text-zinc-300 ml-6 cursor-pointer ">Settings</p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <MdOutlineFlag className="text-zinc-300 text-xl ml-6" />
                <p className="text-zinc-300 ml-6 cursor-pointer ">
                  Report History
                </p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center">
                <BiHelpCircle className="text-zinc-300 text-xl ml-6" />
                <p className="text-zinc-300 ml-6 cursor-pointer ">Help</p>
              </div>
              <div className="flex  hover:bg-zinc-800  h-[38px] w-56 rounded-lg items-center mb-2">
                <MdOutlineFeedback className="text-zinc-300 text-xl ml-6" />
                <p className="text-zinc-300 ml-6 cursor-pointer ">
                  Send Feedback
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

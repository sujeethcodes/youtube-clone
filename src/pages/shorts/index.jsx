import React from "react";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import axios from "axios";

const Shorts = () => {
  const [getShorts, setGetShorts] = React.useState([]);
  const [subscribe, setSubscribe] = React.useState("");
  const [shortsCreatorId, setShortscreatorId] = React.useState("");
  const [showSubscribe, setShowSubscribe] = React.useState([]);

  const subscribeApi = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/setSubscribedChannel",
      {
        userId: 312312,
        creatorId: shortsCreatorId,
        subscribe: subscribe,
      }
    );
    console.log(data);
  };

  const verifySubscribersShort = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/getShortsViewSubscribedChannel"
    );
    setShowSubscribe(data);
  };

  const getAllShorts = async () => {
    setGetShorts(JSON.parse(localStorage.getItem("getAllShortsApi")));
  };

  React.useEffect(() => {
    getAllShorts();
    verifySubscribersShort();
  }, []);

  return (
    <>
      <div className="h-[300px] overflow-y-hidden">
        <div className="flex absolute h-[600px] ml-[300px] mt-6 ">
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={80}
            mousewheel={true}
            autoplay={{
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Mousewheel, Pagination]}
            className="mySwiper">
            {getShorts?.map((each, index) => (
              <div className="">
                <SwiperSlide className="text-white h-[580px] " key={index}>
                  <div className="flex">
                    <div className="relative">
                      <video
                        src={each?.shorts}
                        className="h-[570px]  w-[350px] rounded-xl"
                        autoplay={1}
                      />
                      <div className="absolute bottom-2 flex items-center">
                        <img
                          src={each?.creatorProfile}
                          className="h-[40px] w-[40px] ml-[25px] rounded-full "
                          alt=""
                        />
                        <p className="ml-[10px] font-bold">
                          {each?.channelName}
                        </p>

                        <button
                          className="text-black font-bold bg-white text-sm ml-[110px] border h-[30px] w-[90px] rounded-full"
                          onClick={async () => {
                            setShortscreatorId(each?.creatorId);
                            setSubscribe(true);
                            await subscribeApi();
                          }}
                          key={index}>
                          Subscribe
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col ">
                      <div
                        className="flex justify-center items-center rounded-full h-[40px] w-[40px] mt-[200px] bg-zinc-700"
                        onClick={() => {
                          alert(123);
                        }}>
                        <AiOutlineLike className="text-white text-3xl  rounded-full cursor-pointer" />
                      </div>
                      <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] mt-[30px] bg-zinc-700">
                        <AiOutlineDislike className="text-white text-3xl  rounded-full cursor-pointer" />
                      </div>
                      <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] mt-[30px] bg-zinc-700">
                        <BiCommentDetail className="text-white text-3xl  rounded-full cursor-pointer" />
                      </div>
                      <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] mt-[30px] bg-zinc-700">
                        <RiShareForwardLine className="text-white text-3xl  rounded-full cursor-pointer" />
                      </div>
                      <div className="flex justify-center items-center rounded-full h-[40px] w-[40px] mt-[30px] bg-zinc-700">
                        <FiMoreHorizontal className="text-white text-3xl  rounded-full cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Shorts;

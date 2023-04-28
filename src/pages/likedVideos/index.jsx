import axios from "axios";
import React from "react";

const LikedVideos = () => {
  const likedVideosApi = async () => {
    const { data } = await axios.post(
      "http://localhost:9001/api/creator/getLike"
    );
    console.log(data);
  };

  React.useEffect(() => {
    likedVideosApi();
  });
  return (
    <>
      <div></div>
    </>
  );
};

export default LikedVideos;

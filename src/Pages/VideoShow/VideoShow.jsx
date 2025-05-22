import React from "react";
import "./VideoShow.css";
import Videodetails from "./../../Components/Videodetails/Videodetails";
import Recommend from "./../../Components/Recommended/Recommend";
import { useParams } from "react-router-dom";

const VideoShow = () => {
  const { categoryid, videoid } = useParams();
  return (
    <section className="video-page">
      <Videodetails videoid={videoid}  />
      <Recommend categoryid={categoryid} />
    </section>
  );
};

export default VideoShow;

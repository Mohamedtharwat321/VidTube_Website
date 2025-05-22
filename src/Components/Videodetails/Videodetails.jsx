import React, { useEffect, useState } from "react";
import "./Videodetails.css";
import vid from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user from "../../assets/user_profile.jpg";
import { Api_key, valueConverter } from "../../Data";
import moment from "moment";
import { useParams } from "react-router-dom";

const Videodetails = () => {
  const { videoid } = useParams();
  const [vidData, setVidData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comment, setCommentData] = useState(null);

  const fetchVideo = async () => {
    const DataUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${Api_key}`;

    await fetch(DataUrl)
      .then((response) => response.json())
      .then((data) => setVidData(data.items[0]));
  };

  const fetchChannel = async () => {
    //fetch channel data
    const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${vidData?.snippet.channelId}&key=${Api_key}`;
    await fetch(channelUrl)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));
  };
  const fetchComments = async () => {
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${Api_key}`;
    await fetch(commentUrl)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideo();
  }, [videoid]);

  useEffect(() => {
    fetchChannel();
    fetchComments();
  }, [vidData]);

  return (
    <div className="video-details">
      <iframe
        src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3 className="title">
        {vidData ? vidData.snippet.title : "title Here"}
      </h3>
      <div className="video-info">
        <p>
          {vidData ? valueConverter(vidData.statistics.viewCount) : "16k"} Views
          &bull; {vidData ? moment(vidData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="like icon" />
            {vidData ? valueConverter(vidData.statistics.likeCount) : "155"}
          </span>
          <span>
            <img src={dislike} alt="dislike icon" />
          </span>
          <span>
            <img src={share} alt="share icon" />
            Share
          </span>
          <span>
            <img src={save} alt="save icon" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : user}
          alt="publisher profile"
        />
        <div>
          <p>{vidData ? vidData.snippet.channelTitle : "Title"}</p>
          <span>
            {channelData ? channelData.statistics.subsrciperCount : ""}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="desc">
        <p>
          {vidData
            ? vidData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {" "}
          {vidData ? valueConverter(vidData.statistics.commentCount) : 102}
        </h4>
        {comment?.map((item, idx) => {
          return (
            <div key={idx} className="comment-info">
              <img
                src={
                  item
                    ? item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    : user
                }
                alt="user profile"
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay} </p>
                <div className="comment-reactions">
                  <img src={like} alt="like icon" />
                  <span>
                    {valueConverter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}{" "}
                  </span>
                  <img src={dislike} alt="dislike icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videodetails;

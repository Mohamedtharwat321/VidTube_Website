import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { Api_key, valueConverter } from "../../Data";
import moment from "moment";

const Feed = ({ category }) => {
  const [apiData, setApidData] = useState([]);
  const fetchData = async () => {
    const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${Api_key}`;
    await fetch(videoListUrl)
      .then((response) => response.json())
      .then((data) => setApidData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <section className="feed">
      {apiData.map((item, idx) => {
        return (
          <Link
            key={idx}
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {valueConverter(item.statistics.viewCount)} Views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export default Feed;

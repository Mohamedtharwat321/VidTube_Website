import React, { useEffect, useState } from "react";
import "./Recommend.css";
import img1 from "../../assets/thumbnail1.png";
import { Api_key, valueConverter } from "../../Data";
import { Link } from "react-router-dom";

const Recommend = ({ categoryid }) => {
  const [recData, setRecData] = useState([]);
  const fetchRecommend = async () => {
    const relatedUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryid}&key=${Api_key}`;
    fetch(relatedUrl)
      .then((response) => response.json())
      .then((res) => setRecData(res.items));
  };
  useEffect(() => {
    fetchRecommend();
  }, []);
  return (
    <div className="recommend">
      {
        recData.map((item,idx)=>{
          return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={idx} className="side-card">
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className="card-info">
              <h3>{item.snippet.title}</h3>
              <p>{item.snippet.channelTitle}</p>
              <span>{valueConverter(item.statistics.viewCount)}Views</span>
            </div>
          </Link>
          )
        })
      }
    
    </div>
  );
};

export default Recommend;

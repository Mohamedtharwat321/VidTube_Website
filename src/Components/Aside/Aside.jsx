import React, { useState } from "react";
import "./Aside.css";
import homeicon from "../../assets/home.png";
import gamingicon from "../../assets/game_icon.png";
import automobilesicon from "../../assets/automobiles.png";
import sport from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";

const Aside = ({ menubar, setCategory, category }) => {
  const [active, setActive] = useState("Home");
  const sideBar = [
    {
      title: "Home",
      img: homeicon,
      id: 0,
    },
    {
      title: "Gaming",
      img: gamingicon,
      id: 20,
    },
    {
      title: "Automobiles",
      img: automobilesicon,
      id: 2,
    },
    {
      title: "Sports",
      img: sport,
      id: 17,
    },
    {
      title: "Entertainment",
      img: entertainment,
      id: 24,
    },
    {
      title: "Technology",
      img: tech,
      id: 28,
    },
    {
      title: "Music",
      img: music,
      id: 10,
    },
    {
      title: "Blogs",
      img: blogs,
      id: 22,
    },
    {
      title: "News",
      img: news,
      id: 25,
    },
  ];
  return (
    <aside className={`sidebar ${menubar === false ? "" : "short-sidebard"}`}>
      <div className="categories">
        <ul>
          {sideBar.map((side, idx) => {
            return (
              <li key={idx}
                className={`side-link ${active === side.title ? "active" : ""}`}
                onClick={() => {
                  setCategory(side.id);
                  setActive(side.title);
                }}
              >
                <img src={side.img} alt="Home icon" />
                <p>{side.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
      <div className="subsrcibe-list">
        <h3>SUBSCRIBED</h3>
        <ul>
          <li className="side-link">
            <img src={jack} alt="channel profile" />
            <p>PewDiePie</p>
          </li>
          <li className="side-link">
            <img src={simon} alt="channel profile" />
            <p>MrBeast</p>
          </li>
          <li className="side-link">
            <img src={tom} alt="channel profile" />
            <p>Justin Bieber</p>
          </li>
          <li className="side-link">
            <img src={megan} alt="channel profile" />
            <p>5-Minute Crafts</p>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

import React, { useState } from "react";
import "./Home.css";
import Aside from "./../../Components/Aside/Aside";
import Feed from "../../Components/Feed/Feed";

const Home = ({ menubar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Aside category={category} setCategory={setCategory}  menubar={menubar} />
      <div
        className={`container ${menubar === false ? "" : "large-container"}`}
      >
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;

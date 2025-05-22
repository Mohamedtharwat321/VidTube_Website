import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import VideoShow from "./Pages/VideoShow/VideoShow";
import { useState } from "react";

function App() {
  const [menubar, setMenubar] = useState(false);
  return (
    <div>
      <Navbar setMenubar={setMenubar}/>
      <Routes>
        <Route path="/" element={<Home menubar={menubar} />} />
        <Route path="/video/:categoryid/:videoid" element={<VideoShow />} />
      </Routes>
    </div>
  );
}

export default App;

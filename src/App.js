import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Menu from "../src/pages/menu/index";
import Home from "../src/pages/home/index";
import Shorts from "../src/pages/shorts/index";
import Studio from "../src/pages/studio/index";
import Subscription from "./pages/subscription";
import Watch from "./pages/watch";
import History from "./pages/history";
import LikedVideos from "./pages/likedVideos";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="/home" element={<Home />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/history" element={<History />} />
          <Route path="/likedVideos" element={<LikedVideos />} />
        </Route>
        <Route path="/watch" element={<Watch />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

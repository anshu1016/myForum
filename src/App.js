import Feed from "./pages/feed/Feed";
import LeftBar from "./pages/leftBar/LeftBar";
import NavBar from "./pages/navBar/NavBar";
import RightBar from "./pages/rightBar/RightBar";
import { Routes, Route, Switch } from "react-router-dom";

import "./styles.css";
import PostDetails from "./pages/postDetails/PostDetails";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <div className="left-sidebar">
          <LeftBar />
        </div>

        <div className="feed">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/post/:postId" element={<PostDetails />} />
          </Routes>
        </div>

        <div className="right-sidebar">
          <RightBar />
        </div>
      </div>
    </div>
  );
}

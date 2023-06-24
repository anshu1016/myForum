import React from "react";
import HouseIcon from "@mui/icons-material/House";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Person3Icon from "@mui/icons-material/Person3";
import "./leftBar.css";

export default function LeftBar() {
  return (
    <div className="left-bar">
      <p className="left-bar-item">
        <HouseIcon className="left-bar-icon" />
        Home
      </p>
      <p className="left-bar-item">
        <ExploreIcon className="left-bar-icon" />
        Explore
      </p>
      <p className="left-bar-item">
        <BookmarksIcon className="left-bar-icon" />
        Bookmarks
      </p>
      <p className="left-bar-item">
        <Person3Icon className="left-bar-icon" />
        Profile
      </p>
    </div>
  );
}

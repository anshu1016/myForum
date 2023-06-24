import { React, useState, useContext } from "react";
import { forumData } from "../../data/Data";

import { Link } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import "./feed.css";
import { AppContext } from "../../context/AppContext";
import RightBar from "../rightBar/RightBar";
const Card = ({ post }) => {
  const [votes, setVotes] = useState(post.upvotes - post.downvotes);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  const handleUpvote = () => {
    setVotes(votes + 1);
  };

  const handleDownvote = () => {
    setVotes(votes - 1);
  };
  return (
    <div className="mainContainer">
      <div className="card">
        <div className="arrow">
          <div className="votes">
            <button className="arrow-up" onClick={handleUpvote}>
              &#9650;
            </button>
            <span className={`vote-count ${votes < 0 ? "negative" : ""}`}>
              {votes}
            </span>
            <button className="arrow-down" onClick={handleDownvote}>
              &#9660;
            </button>
          </div>
        </div>
        <div className="cardContent">
          <div className="card-header">
            <img src={post.picUrl} alt="Profile" className="profile-pic" />
            <div className="username">
              Posted By <a href="/">@{post.username}</a>
            </div>
          </div>
          <div className="card-content">
            <h2>{post.post}</h2>
            <div className="tags">
              {post.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
            <p>{post.postDescription}</p>
          </div>
          <hr />

          <div className="card-footer">
            <span>
              {" "}
              <Link to={`/post/${post.postId}`}>
                <ChatBubbleOutlineIcon />
              </Link>
            </span>
            <span>
              <ShareIcon />
            </span>
            <span onClick={toggleBookmark}>
              {isBookmarked ? (
                <BookmarkIcon className="bookmarked" />
              ) : (
                <BookmarkBorderIcon />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Forum = () => {
  const { selectedCategory } = useContext(AppContext); // Access the selected category from context
  const [sortBy, setSortBy] = useState("latestPost");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortPosts = (posts) => {
    if (sortBy === "latestPost") {
      return posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sortBy === "mostUpvoted") {
      return posts.sort((a, b) => b.upvotes - a.upvotes);
    } else {
      return posts;
    }
  };

  // Filter posts based on the selected category
  const filteredPosts = selectedCategory
    ? forumData.posts.filter((post) => post.category === selectedCategory)
    : forumData.posts;

  const sortedPosts = sortPosts(filteredPosts);
  return (
    <div className="forum">
      {sortedPosts.map((post) => (
        <Card key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default Forum;

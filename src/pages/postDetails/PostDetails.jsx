import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { forumData } from "../../data/Data";
import "./postDetails.css";

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  // Get the postId from the URL parameter

  // Find the post data based on the postId
  const post = forumData.posts.find((post) => post.postId === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Back
      </p>
      <div>
        <img src={post.picUrl} alt="Profile" className="profile-pic" />
        <div className="username">
          Posted By <a href="/">@{post.username}</a>
        </div>
      </div>
      <h2>{post.post}</h2>
      <p>{post.postDescription}</p>
      <div>
        {post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <div key={comment.commentId}>
              <img src={comment.picUrl} alt="Profile" className="profile-pic" />
              <div className="username">
                Commented By <a href="/">@{comment.username}</a>
              </div>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet</p>
        )}
      </div>
    </div>
  );
};

export default PostDetails;

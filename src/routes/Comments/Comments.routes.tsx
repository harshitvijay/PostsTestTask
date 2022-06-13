import React, { useContext, useEffect } from "react";
import {
  PostCommentContext,
  PostCommentContextType,
} from "../../Context/PostsComment.Context";
import axios from "axios";
import { getPostsComments } from "../../api/api";
import { useParams } from "react-router-dom";
import "./Comments.styles.css";

const Comments = () => {
  const { postid } = useParams();
  const { postsComments, setPostsComments } = useContext(
    PostCommentContext
  ) as PostCommentContextType;

  const fetchPostComments = async () => {
    if (postid) {
      const { data } = await axios.get(getPostsComments(postid));
      setPostsComments(data);
    }
  };

  useEffect(() => {
    fetchPostComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!postsComments) return <div>Loading......</div>;

  return (
    <div className="container-fluid comment-container">
      {postsComments.map((comment, index) => (
        <div key={index} className="body-container">
          <h5>{comment.body}</h5>
        </div>
      ))}
    </div>
  );
};

export default Comments;

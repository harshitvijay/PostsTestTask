import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../api/api";
import { PostContext, PostContextType } from "../../Context/Posts.Context";
import axios from "axios";
import "./Home.styles.css";

const Home = () => {
  const { posts, setPosts, addPostCart, postsCart } = useContext(
    PostContext
  ) as PostContextType;
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const { data } = await axios.get(getPosts());
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!posts) return <div>Loading......</div>;
  return (
    <div className="container-fluid home-container">
      <div className="row">
        <div className="col-8">
          <div className="posts">
            {posts.map((post) => (
              <div className="title-container" key={post.id}>
                <div className="title">
                  <p
                    className="post-id"
                    onClick={() => navigate(`/comment/${post.id}`)}
                  >
                    {post.id}
                  </p>
                  <h5>{post.title}</h5>
                </div>
                <div className="button">
                  <button
                    className="btn btn-primary"
                    onClick={() => addPostCart(post.id)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-4 cart">
          {postsCart.map((item, index) => (
            <div key={index}>
              <div>{item.postId}</div>
              <div>count: {item.count}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

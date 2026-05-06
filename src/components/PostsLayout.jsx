import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Posts.module.css";

function PostsLayout() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3001/posts");

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Something went wrong while loading posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const handleAddPost = (newPost) => {
    const postToAdd = {
      id: Date.now(),
      title: newPost.title,
      body: newPost.body,
    };

    setPosts((prevPosts) => [postToAdd, ...prevPosts]);
  };

  const handleUpdatePost = (postId, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        String(post.id) === String(postId)
          ? { ...post, title: updatedPost.title, body: updatedPost.body }
          : post
      )
    );
  };

const handleDeletePost = (postId) => {
  setPosts((prevPosts) =>
    prevPosts.filter(
      (post) => String(post.id) !== String(postId)
    )
  );
};
  const handleLogPosts = () => {
    console.log(posts);
  };

  return (
    <div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={handleLogPosts}>
          Log Posts
        </button>

        <button
          className={styles.button}
          onClick={() => navigate("/posts/new")}
        >
          + Add New Post
        </button>
      </div>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {error && (
        <p style={{ textAlign: "center", color: "red" }}>
          {error}
        </p>
      )}

      {!loading && !error && (
        <Outlet
          context={{
            posts,
            onAddPost: handleAddPost,
            onUpdatePost: handleUpdatePost,
            onDeletePost: handleDeletePost,
          }}
        />
      )}
    </div>
  );
}

export default PostsLayout;
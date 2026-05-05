import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import styles from "./Posts.module.css";

const initialPosts = [
  { name: "Tova Oshinsky", content: "This is my first post" },
  { name: "John Doe", content: "This is my second post" },
  { name: "Jane Smith", content: "This is my third post" },
];

function Posts() {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpdatePost = (index, newContent) => {
    const updatedPosts = posts.map((post, i) =>
      i === index ? { ...post, content: newContent } : post
    );

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const handleAddPost = (newPost) => {
    const updatedPosts = [...posts, newPost];

    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
    setIsModalOpen(false);
  };

  const handleLogPosts = () => {
    console.log("Current posts array:", posts);
  };

  return (
    <>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          + Add New Post
        </button>

        <button className={styles.button} onClick={handleLogPosts}>
          Log Posts to Console
        </button>
      </div>

      {isModalOpen && (
        <NewPost
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddPost}
        />
      )}

      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          content={post.content}
          onSave={(newContent) => handleUpdatePost(index, newContent)}
        />
      ))}
    </>
  );
}

export default Posts;
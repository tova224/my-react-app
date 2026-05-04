import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import NewPost from "./components/NewPost";

const initialPosts = [
  { name: "Tova Oshinsky", content: "This is my first post" },
  { name: "John Doe", content: "This is my second post" },
  { name: "Jane Smith", content: "This is my third post" }
];

function App() {
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
  };

  const handleLogPosts = () => {
    console.log("Current posts array:", posts);
  };

  return (
    <>
      {/* כפתור הוספת פוסט */}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <button className="button" onClick={() => setIsModalOpen(true)}>
          + Add New Post
        </button>
      </div>

      {/* מודל */}
      {isModalOpen && (
        <NewPost
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddPost}
        />
      )}

      {/* פוסטים */}
      {posts.map((post, index) => (
        <Post
          key={index}
          name={post.name}
          content={post.content}
          onSave={(newContent) => handleUpdatePost(index, newContent)}
        />
      ))}

      {/* כפתור לוג */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button className="button" onClick={handleLogPosts}>
          Log Posts to Console
        </button>
      </div>
    </>
  );
}

export default App;
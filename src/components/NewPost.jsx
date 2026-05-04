import { useState } from "react";
import styles from "./NewPost.module.css";

function NewPost({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!name || !content) return;

    onAdd({ name, content });
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add New Post</h2>

        <label>Author Name:</label>
        <input
          type="text"
          placeholder="Enter author name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Post Content:</label>
        <textarea
          placeholder="Enter post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className={styles.buttons}>
          <button onClick={handleSubmit} className={styles.create}>
            Create Post
          </button>

          <button onClick={onClose} className={styles.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPost;